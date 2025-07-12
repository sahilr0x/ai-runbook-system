---
type: alert
title: Alert Playbook: Deployment Stuck
date: 2025-05-28
tags: [alerting, kubernetes, deploy]
---

Trigger: Deployment not progressing  
Steps:
- Run `kubectl rollout status`  
- Check events for resource or image issues  
- Roll back if necessary
