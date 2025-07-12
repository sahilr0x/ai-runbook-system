---
type: infra
title: Helm Upgrade Failure
date: 2025-06-01
tags: [helm, deployment]
---

Issue:
- Helm upgrade timeout on release `xyz`
Fixes:
- `helm uninstall` and clean redeploy
- Increased timeout in Helm values
