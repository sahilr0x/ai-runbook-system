---
type: kb
title: How to Investigate Pod CrashLoopBackOff
date: 2025-06-05
tags: [kubernetes, crashloop, troubleshooting]
---

1. Run `kubectl describe pod <name>`  
2. Check last events for OOMKilled / probe errors  
3. Run `kubectl logs` for container output  
4. Check node resource pressure using `kubectl top node`
