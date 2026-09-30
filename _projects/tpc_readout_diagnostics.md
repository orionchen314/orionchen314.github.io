---
layout: page
title: Full-Chain Diagnostics of a 1408-Channel TPC Readout System
description: Led three students in channel-level diagnostics and built a database for shared measurements and fault tracking.
importance: 2
category: research
---

## Background

Large-scale liquid xenon Time Projection Chamber (TPC) detectors rely on the stability and uniformity of thousands of readout channels. I carried out a systematic diagnostic campaign on a 1408-channel TPC readout system at the Tsung-Dao Lee Institute, targeting signal abnormalities such as unstable baselines, excessive noise, and dead channels.

---

## System Overview

The full signal chain includes:

- Detector / PMT
- Flange feedthrough
- High-voltage (HV) system
- Amplifiers
- FADC modules
- Signal cables

Each stage introduces distinct failure modes, requiring structured debugging.

---

## Methodology

### Layered Debugging

The system was decomposed into:

- Hardware layer (flange, HV)
- Electronics layer (amplifier, FADC)
- Signal layer (waveform quality)

This allowed progressive fault isolation.

### Channel-Level Analysis

Each channel was evaluated using:

- Baseline
- RMS noise
- Waveform morphology
- Rate stability

Abnormal channels were flagged and traced upstream.

### Team Coordination

I led three students to execute channel-wise diagnostics, ensuring consistent criteria and coverage.

---

## Data Integration

To handle distributed measurements, I built a database to unify all diagnostic results:

- Aggregation of multi-user measurements
- Standardized channel status records
- Queryable fault tracking
- Cross-run comparison

This supported consistent measurement records, shared fault tracking, and cross-run comparison.

---

## Results

- Full diagnostic coverage of all 1408 channels
- Fault localization across HV, cabling, electronics, and FADC
- Established a reusable debugging workflow
- Centralized measurements from multiple users for shared fault tracking

---

## Summary

This work provides a scalable framework for debugging large-channel-count detector systems, combining structured diagnostics with data integration.

[Research note]({% post_url 2026-04-26-Checking-The-Full-Chain-of- Detectors-with-1408-Channels %})
