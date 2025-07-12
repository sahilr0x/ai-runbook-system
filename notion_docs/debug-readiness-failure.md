---
type: debug
title: Readiness Probe Failures in User Service
date: 2025-06-09
tags: [kubernetes, readiness, user-service]
---

Observations:
- Frequent restarts due to failed readiness probes.
Checks:
- Service log shows DB not reachable on init.
Fix:
- Added initContainers to wait for DB availability.
