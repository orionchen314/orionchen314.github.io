---
layout: page
title: Light Source Position Reconstruction with PMT Arrays
description: Implemented position reconstruction algorithms based on PMT charge distributions, including center-of-gravity and PAF methods, and evaluated spatial resolution.
img: /assets/img/projects/PMT_arrary.jpg
importance: 5
category: research
---

## Research Question

How do PMT-array geometry and reconstruction methods affect light-source position estimates in liquid xenon detector studies?

My work uses PMT charge distributions to study source-position reconstruction, including charge-weighted methods and response-based approaches. The associated 55-PMT readout platform connects waveform processing with event-level light patterns.

## My Work

- Developed and evaluated position-reconstruction algorithms using PMT charge distributions.
- Used Geant4 simulations to study reconstruction performance.
- Connected channel-level charge extraction with array-level position estimates.

## Simulation Result and Scope

The simulation study reported a position resolution of approximately **0.66 mm**. This value describes the simulated configuration studied; it is not an experimentally measured resolution of a full liquid xenon TPC. Interpretation depends on the geometry, light yield, source locations, and residual definition used in the study.

## Related Work

- **Undergraduate thesis (2025):** Light Source Position Reconstruction Using PMT Arrays in Liquid Xenon Detectors.
- **Manuscript in preparation:** Comparative Study of Position Reconstruction Performance between Two-Inch and Three-Inch PMT Arrays.
- [55-PMT readout platform]({{ '/projects/1_pmy_readout_system/' | relative_url }})
- [ROOT waveform analysis framework]({{ '/projects/4_root_waveform_analysis_framework/' | relative_url }})
