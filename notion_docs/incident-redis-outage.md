---
type: incident
title: Redis Outage Impacting Checkout
date: 2025-06-10
tags: [redis, outage, checkout]
---

Root Cause: Redis cluster mode misconfiguration after deployment  
Timeline: 11:04 AM - 11:43 AM  
Detection: Alert from Grafana + customer complaints  
Fix: Reverted Helm chart, drained bad pod  
Follow-ups:
- Add cluster health check in pre-deploy
- Add canary release for infra changes
