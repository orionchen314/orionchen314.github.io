---
layout: page
title: 55-Channel R11410 PMT Readout Array
description: Designed and implemented a multi-channel PMT readout system for a 55-PMT array, including waveform acquisition, baseline correction, and charge extraction.
img: /assets/img/projects/pmt_readout.jpg
importance: 4
category: research
---

## Overview

I led hardware development, DAQ, calibration, Geant4 optical simulation, and reconstruction analysis for a **55-channel R11410 PMT array**. The system connects waveform acquisition and charge extraction with event-level light patterns and position reconstruction.

## My Contributions

- Integrated the array hardware and data acquisition.
- Established PMT calibration and waveform-processing workflows, including baseline correction and charge extraction.
- Developed optical simulations in Geant4 and evaluated reconstruction algorithms.
- Compared center-of-gravity, template-matching, light-response-function, and machine-learning methods.

## Result

Array performance tests achieved approximately **0.66 mm overall spatial resolution**. See the [position-reconstruction study]({{ '/projects/3_position_recon/' | relative_url }}) for context. This array test result does not establish the resolution of a full liquid-xenon detector.

The array is distinct from the [192-channel PMT characterization platform]({{ '/projects/pmt_acquisition_characterization/' | relative_url }}).
