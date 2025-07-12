---
type: incident
title: Search API Timeout
date: 2025-06-11
tags: [search, elasticsearch, timeout]
---

Incident:
- High 5xx error rate on `/search` route.
- Root cause: ElasticSearch node timeout due to GC pause.
Resolution:
- Increased heap size.
- Switched to async search client.
