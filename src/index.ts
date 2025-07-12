import { config } from "dotenv";
config();

import fs from "fs";
import path from "path";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { ChatOpenAI } from "@langchain/openai";
import readline from "readline";

function loadDocs(folder: string) {
  const files = fs.readdirSync(folder).filter((f) => f.endsWith(".md"));
  return files.map((file) => ({
    name: file,
    content: fs.readFileSync(path.join(folder, file), "utf-8"),
  }));
}

async function runQuery(query: string) {
  const docsPath = "./notion_docs";
  const vectorStorePath = "./faiss_store";
  const rawDocs = loadDocs(docsPath);

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

  const allChunks = [];
  for (const doc of rawDocs) {
    const splits = await splitter.createDocuments(
      [doc.content],
      [{ source: doc.name }]
    );
    allChunks.push(...splits);
  }

  const embeddings = new OpenAIEmbeddings();
  let vectorStore: FaissStore;

  if (fs.existsSync(vectorStorePath)) {
    console.log("📂 Loading existing FAISS store...");
    vectorStore = await FaissStore.load(vectorStorePath, embeddings);
  } else {
    console.log("🔨 Creating new FAISS store...");
    vectorStore = await FaissStore.fromDocuments(allChunks, embeddings);

    await vectorStore.save(vectorStorePath);
    console.log("💾 FAISS store saved to disk");
  }

  const retriever = vectorStore.asRetriever({
    k: 5,
  });

  const relevantDocs = await retriever.getRelevantDocuments(query);

  const llm = new ChatOpenAI({
    temperature: 0.2,
    modelName: "gpt-3.5-turbo",
  });

  const prompt = `
You're an SRE assistant. Based on the context below, provide a step-by-step runbook for the following query:

Query: "${query}"

Context:
${relevantDocs.map((d: any) => d.pageContent).join("\n\n")}

Only respond with clear, numbered action steps (not a summary).
`;

  const response = await llm.invoke(prompt);
  console.log("\n🧾 Runbook Response:\n");
  console.log(response.content);
}

function askQuestion(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const userQuery = process.argv.slice(2).join(" ");

  if (!userQuery) {
    const input = await askQuestion("🧠 Enter your query: ");
    await runQuery(input);
  } else {
    await runQuery(userQuery);
  }
}

main().catch(console.error);
