---
layout: page
title: ROOT-based PMT Waveform Analysis Framework
description: Developed a C++/ROOT pipeline for multi-channel waveform processing, including baseline subtraction, peak finding, charge integration, and automated fitting.
img: /assets/img/projects/root_waveform.png
importance: 6
category: research
---

## Purpose

I developed a C++/ROOT analysis pipeline for multi-channel PMT waveforms. It supports baseline subtraction, pulse finding, charge integration, and automated fitting for detector-response studies.

## Analysis Workflow

1. Read digitized waveforms and estimate each channel's baseline.
2. Subtract the baseline and identify candidate pulse windows.
3. Integrate pulse charge and summarize channel-level observables.
4. Fit charge distributions and compare PMT response across measurements.

## My Contributions

- Implemented waveform-processing and charge-extraction routines.
- Organized processing stages for multi-channel analysis.
- Used ROOT fitting and diagnostic plots to study PMT response.

## Connection to Detector Studies

The framework supports the [55-PMT readout platform]({{ '/projects/1_pmy_readout_system/' | relative_url }}) and related [PMT response studies]({{ '/projects/2_pmt_sat_sup/' | relative_url }}). Position reconstruction is described [separately]({{ '/projects/3_position_recon/' | relative_url }}).
