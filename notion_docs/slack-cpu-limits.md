---
type: slack
title: Slack: CPU Limits Discussion
date: 2025-06-07
tags: [cpu, limits, infra]
---

@infra-team:  
"We’re seeing throttling on node-pool-gpu-1. Might be due to 200m CPU limits"  
@dev1:  
"Can we try 400m and observe metrics via Grafana?"  
@infra-lead:  
"Yes, try increasing, but also cap requests to prevent node drain."
