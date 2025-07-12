---
type: incident
title: Memory Leak in Notification Service
date: 2025-06-12
tags: [memory, crash, notification-service]
---

Incident Time: 2025-06-12 14:30 IST  
Impact: Notification service crashed in prod. 5 mins of message loss.  
Root Cause: Improper object cleanup in Go routine  
Resolution:
- Added memory profiler in CI
- Added service limit alerts in Datadog  
Next Steps:
- Setup heap dump analysis cron
