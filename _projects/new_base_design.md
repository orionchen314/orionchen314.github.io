---
layout: page
title: Flexible PMT Base Design for Next-generation LXe Detectors
description: Designed a compact flexible PMT base integrating voltage division, signal readout, and mechanical adaptability for dense PMT arrays in future liquid xenon experiments.
img: /assets/img/projects/flexible_base.jpg
importance: 6
category: engineering
---

This project develops and validates a **flex-rigid PMT base (FRP)** for LXe detectors, integrating voltage division and long-distance signal readout into a single structure to replace traditional cables and hub boards.

**Motivation**

- Future LXe detectors require increasingly dense photosensor layouts with strict space and radiopurity constraints.
- Conventional rigid PCB bases can introduce mechanical interference, routing complexity, and assembly limitations in compact PMT arrays.
- A flexible base design provides a route toward improved mechanical compatibility while preserving stable voltage division and signal readout.

**System Architecture**

- 3×3 PMT module (9 HV channels, 36 signal channels).
- Flex–rigid structure:
  - Rigid base board: ~0.2 m × 0.2 m
  - Flexible readout tail: ~0.9 m (total length ~1.1 m)
- Direct connection to flange via **Micro-D connectors** (no external cable bundle).
- Cut-out regions introduced to reduce material and background.

**Design Evolution**

- V1–V2: FR4 rigid boards + cable/hub → wiring complexity, failure risk.
- V3: PI rigid base → lower background, validated fabrication.
- V4: Flex–rigid PCB → integrated base + signal routing, cable-free design.
- V5 (ongoing): optimized layout and stack-up based on test feedback.

**Mechanical & Thermal Validation**

- Repeated bending test: >100 cycles with stable electrical continuity.
- Thermal cycling: down to ~−37°C and back to room temperature.
- Observed issues:
  - Partial delamination after thermal cycles
  - Local PI swelling during soldering
    → Indicates need for improved stack-up and material control.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/echo.png" title="Echo test result" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/thermal.png" title="Flex-rigid PCB demo" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/mechanic.png" title="Mechanical test" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Electrical Performance**

- **High-voltage stability**:
  - Tested at 1000–1200 V for 3 hours
  - One discharge observed at 1200 V
- **Noise**:
  - ~10 mVpp baseline noise (no shielding)
  - Reduced to ~5 mVpp with shielding (~50% improvement)
- **Signal attenuation**:
  - Strong frequency dependence; improves at low temperature
- **Crosstalk**:
  - ~10–15% between adjacent traces
  - Strongly dependent on trace spacing, not region location
- **Waveform quality**:
  - Noticeable distortion observed → identified as a critical issue for next iteration

**Key Engineering Insights**

- Signal integrity is dominated by **routing geometry (spacing, layer separation)**.
- Shielding layers are essential for noise suppression.
- HV and signal lines must be strictly separated across layers.
- Flex–rigid integration introduces new failure modes (delamination, mechanical stress coupling).

**Optimization Strategy (Next Iteration)**

- Introduce multi-layer stack-up:
  - Signal / Ground / HV / Ground / Signal
  - Top/bottom shielding layers
- Increase trace spacing to suppress crosstalk.
- Improve impedance matching and routing continuity.
- Evaluate high-frequency materials (e.g., LCP) for reduced attenuation.
- Strengthen mechanical robustness (thickness, bonding process).
  **Outcome**
- Demonstrated feasibility of a **cable-free PMT readout architecture**.
- Established a unified framework linking:
  - mechanical design
  - electrical performance
  - detector integration constraints
- Identified concrete upgrade directions toward deployable systems in future detectors (e.g., PandaX-20T / xT).
