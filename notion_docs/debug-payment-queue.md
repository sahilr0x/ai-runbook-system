---
type: debug
title: Payment Retries Stuck in Queue
date: 2025-06-08
tags: [payment, kafka, queue]
---

Observed: Payments stuck in pending for over 30 mins  
Checked:
- Kafka consumer logs: ✔️ Healthy  
- Queue length metrics: ❌ Spiking abnormally  
Hypothesis: Deadlock in consumer worker pool  
Temporary Fix: Restarted the worker
