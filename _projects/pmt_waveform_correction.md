---
layout: page
title: PMT Large-Signal Response and Waveform Correction
description: Measured PMT response, coupled transport and circuit modeling, and correction of detector waveforms.
img: /assets/img/projects/pmt_saturation.jpg
importance: 2
category: research
---

## Research Question

How can measured and modeled PMT response help recover signals distorted by saturation and suppression in liquid-xenon detector data?

## Experimental Foundation

I measured nonlinear PMT responses over approximately **1–100,000 photoelectrons per channel**, with pulse separations of **5–100 μs**, to study large-signal saturation, consecutive-pulse suppression, and temporal recovery. Part of the R12699 base and circuit work was published in _IEEE Transactions on Nuclear Science_ with co-first authorship.

## Coupled Response Modeling

I proposed and developed a framework coupling PMT base-circuit simulation with a custom **2.5D electron-transport model**. It investigates the relationship between internal multiplication and external circuitry and reproduces key features of small-signal multiplication and large-signal nonlinearity. This is a diagnostic framework; it is not a fully validated three-dimensional PMT model.

## Application to Detector Data

I derived waveform corrections from measured and simulated response curves and applied them to saturated and suppressed signals in detector data. **With the same event selection before and after correction, the difference between multi-site (MS) and single-site (SS) reconstructed energy peak positions decreased by 85%.**

This metric describes the alignment of reconstructed energy peaks. It does not quantify an improvement in energy resolution.

## Related Work

- [Published R12699 PMT-base study]({{ '/projects/2_pmt_sat_sup/' | relative_url }})
- **Manuscript in preparation (working title):** Coupled PMT Electron-Transport and Base-Circuit Modeling for Saturation and Suppression Correction in Liquid-Xenon Detector Data.
