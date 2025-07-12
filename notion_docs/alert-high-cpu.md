---
type: alert
title: Alert Playbook: High CPU Usage
date: 2025-06-04
tags: [cpu, alerting, monitoring]
---

Trigger: CPU > 90% for 10 mins  
Steps:
1. Run `kubectl top pod`  
2. Look for noisy neighbors on the node  
3. Check if autoscaler triggered  
4. Restart pod if needed
