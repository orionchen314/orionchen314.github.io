---
layout: page
title: PMT Readout Platform for a PandaX-inspired Array
description: Designed and implemented a multi-channel PMT readout system for a 55-PMT array, including waveform acquisition, baseline correction, and charge extraction.
img: /assets/img/projects/pmt_readout.jpg
importance: 4
category: research
---

## Overview

This project develops a compact PMT waveform readout and analysis platform for a PandaX-inspired photomultiplier-tube array. The system is designed around a 55-PMT geometry and focuses on the full data-processing chain from raw waveform acquisition to baseline correction, pulse finding, charge integration, and event-level light-pattern reconstruction.

The main goal is to build a reproducible analysis framework that can be used to test detector-response ideas, validate PMT-array reconstruction algorithms, and study how waveform-level choices propagate into higher-level observables such as total photoelectron yield and reconstructed source position.

## Motivation

Dual-phase liquid-xenon time projection chambers rely on PMT arrays to measure prompt scintillation light and delayed electroluminescence signals. In this context, robust PMT readout and waveform analysis are essential for detector calibration, event reconstruction, and background control. This project uses a PandaX-inspired layout as a realistic detector benchmark while keeping the system small enough for fast development and controlled algorithm testing.

## Key Features

- **Multi-channel waveform handling:** supports waveform data from a 55-PMT array.
- **Baseline estimation and subtraction:** removes channel-dependent pedestal offsets before pulse analysis.
- **Pulse identification:** searches for PMT pulses using threshold- and window-based logic.
- **Charge extraction:** integrates waveform regions of interest to estimate per-channel light yield.
- **Array-level reconstruction:** uses the PMT charge pattern to infer light-source position and event topology.
- **Modular analysis workflow:** separates waveform I/O, calibration, pulse processing, and reconstruction modules for easier validation.

## Analysis Workflow

1. **Waveform input:** load multi-channel digitized PMT waveforms.
2. **Preprocessing:** estimate baseline, subtract pedestal, and suppress obvious noise artifacts.
3. **Pulse finding:** identify candidate signal windows in each PMT channel.
4. **Charge integration:** calculate integrated charge for each pulse and each channel.
5. **Event building:** combine channel-level information into event-level observables.
6. **Position reconstruction:** reconstruct the light-source position using the spatial PMT response pattern.
7. **Validation:** compare reconstructed positions and charge distributions against expected detector geometry or simulation inputs.

## Technical Stack

- **Language:** Python / C++ analysis components
- **Core tasks:** waveform processing, PMT calibration, charge extraction, position reconstruction
- **Detector context:** liquid-xenon PMT-array readout and PandaX-inspired detector geometry
- **Outputs:** processed waveform summaries, per-channel charge maps, reconstructed source positions, and diagnostic plots

## Representative Results

The current implementation provides a complete prototype chain for processing PMT-array waveform data. The most important intermediate products are baseline-corrected waveforms, channel-wise integrated charge distributions, and event-level light maps across the PMT plane.

## My Contributions

- Designed the waveform-processing workflow for multi-channel PMT data.
- Implemented baseline correction, pulse-window selection, and charge extraction routines.
- Built event-level charge-map generation for a 55-PMT array.
- Developed and tested position-reconstruction logic using PMT light-pattern information.
- Organized the analysis into modular components to support later detector studies and calibration tests.

## Status and Next Steps

This project currently serves as a prototype platform for PMT-array readout studies and reconstruction-method development. Planned improvements include adding more realistic electronics response models, incorporating PMT gain calibration constants, benchmarking reconstruction performance with simulated calibration sources, and expanding diagnostic plots.
