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

## Array Performance and Scope

The 55-channel R11410 array achieved an overall spatial resolution of approximately **0.66 mm in array performance tests**. My responsibilities covered hardware development, DAQ, calibration, Geant4 optical simulation, and reconstruction analysis. I compared center-of-gravity, template-matching, light-response-function, and machine-learning methods. This array result is not a full liquid-xenon TPC resolution.

## Related Work

- **B.S. thesis (2026):** Development and Testing of R12699 and R11410 PMT Arrays: A Comparative Study of Position-Reconstruction Algorithms. Outstanding Undergraduate Thesis Award, Jilin University.
- [55-PMT readout platform]({{ '/projects/1_pmy_readout_system/' | relative_url }})
- [ROOT waveform analysis framework]({{ '/projects/4_root_waveform_analysis_framework/' | relative_url }})
