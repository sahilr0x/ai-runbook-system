---
type: kb
title: Troubleshooting Stuck Deployments
date: 2025-06-03
tags: [kubernetes, deployment, stuck]
---

1. Use `kubectl rollout status`  
2. Describe the pod to check events  
3. Check for image pull or readiness errors  
4. Consider rollback or fix config
