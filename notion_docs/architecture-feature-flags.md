---
type: architecture
title: Feature Flag Infra Migration
date: 2025-05-29
tags: [feature-flags, infra]
---

Migrating from LaunchDarkly to internal system:  
- Lower cost  
- Faster local evaluation  
Risks:
- Inconsistent propagation
- Solved with Kafka pub-sub
