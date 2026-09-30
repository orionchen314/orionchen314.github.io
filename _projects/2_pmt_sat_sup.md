---
layout: page
title: PMT Saturation and Suppression Characterization
description: Bench measurements and circuit simulation of nonlinear PMT-base response for PandaX-xT.
img: /assets/img/projects/pmt_saturation.jpg
importance: 1
category: research
---

## Overview

This project studies the saturation and suppression behavior of the Hamamatsu R12699-406-M4 photomultiplier tube (PMT) base developed for next-generation liquid-xenon rare-event experiments. The work combines dedicated bench measurements with circuit-level simulation to understand how the PMT voltage-divider base responds to large scintillation-like signals and closely spaced consecutive pulses.

The study is motivated by the broad dynamic-range requirement of future PandaX-xT physics searches, which need to preserve single-photoelectron sensitivity while also covering MeV-scale signals relevant to neutrinoless double-beta decay of $$^{136}\mathrm{Xe}$$.

## My Contributions

- Participated in the R12699 PMT-base performance study for PandaX-xT detector R&D.
- Contributed to waveform analysis for PMT saturation and suppression measurements.
- Supported charge reconstruction using monitor PMT channels and calibrated PMT response curves.
- Helped compare different base configurations and evaluate their dynamic-range performance.
- Contributed to the interpretation of saturation/suppression behavior using circuit-level modeling.

## Physics and Detector Context

Large liquid-xenon time projection chambers rely on PMT arrays to measure both low-energy rare-event signals and high-energy calibration or physics signals. For PandaX-xT, the selected R12699-406-M4 PMT is a compact 2-inch square PMT with four independent 1-inch readout channels in a single package. Its compact geometry improves granularity and reduces background contribution, but the base circuit must still maintain linear charge response over a wide signal range.

At high light intensity, the PMT response becomes nonlinear because large secondary currents perturb the inter-dynode voltages in the voltage-divider chain. This reduces the multiplication factors in later dynode stages and causes charge loss and waveform distortion. For two nearby pulses, the first pulse can leave the dynode-chain capacitances partially discharged, suppressing the measured charge of the second pulse.

## Base-Circuit Designs

Three base configurations were studied by changing the number of desaturation capacitors connected around the later dynode stages:

| Base   |                      Configuration | Measured dynamic range |
| ------ | ---------------------------------: | ---------------------: |
| BASE-1 | Full desaturation, C1-C4 installed |                 286 nC |
| BASE-2 |        C1 removed, C2-C4 installed |                  83 nC |
| BASE-3 |     C1-C2 removed, C3-C4 installed |                  25 nC |

The comparison shows the trade-off between dynamic range and low-background material budget. BASE-1 provides the largest charge range, while BASE-3 minimizes capacitor usage. BASE-2 provides a balanced design and exceeds the PandaX-xT dynamic-range requirement for the R12699 PMT.

## Measurement Strategy

A dedicated bench-test system was used to characterize the saturation and suppression response. The setup included a dark box, five R12699 PMTs, two blue LEDs embedded in PTFE diffusers, a high-voltage supply, synchronized waveform generation, and a DAQ system digitizing PMT signals at high sampling rate.

One R12699 PMT served as the test PMT, while four neighboring PMTs were used as monitor channels. The monitor PMTs were masked to keep at least one channel within its linear regime across a wide light-intensity range. This allowed the true input charge to be reconstructed from the monitor response and compared with the observed charge of the tested PMT.

## Saturation Study

The saturation study measured the observed charge as a function of reconstructed input charge for each base design. At low intensity, the observed and reconstructed charges agree. At high intensity, the observed waveform becomes distorted and the measured charge falls below the reconstructed true charge.

The main conclusions are:

- the saturation limit increases strongly with additional desaturation capacitors;
- BASE-1 reaches the largest range, about 286 nC;
- BASE-2 reaches about 83 nC and is sufficient for the PandaX-xT design goal;
- BASE-3 reaches about 25 nC and is useful for evaluating minimal-capacitor configurations;
- saturation is mainly associated with voltage drops in the later dynode stages and charge depletion from equivalent inter-dynode capacitances.

## Suppression Study

The suppression study used two consecutive LED pulses with controlled time separation. When the first pulse is large, the second pulse can be suppressed because the base circuit has not fully recovered. The effect depends on both the charge of the first pulse and the time interval between the two pulses.

The measurements show two recovery components:

- a fast component associated with the equivalent inter-dynode capacitance;
- a slow component associated with the desaturation capacitors.

The paper reports that the response approaches 90% recovery after several fast relaxation times, while full recovery requires a much longer timescale governed by the desaturation capacitors. This behavior is important for data-quality selection and for correcting closely spaced signals in future PandaX-xT analyses.

## Circuit Simulation

An LTSpice-based circuit model was developed to reproduce the PMT-base response. The model includes the voltage-divider chain, equivalent inter-dynode capacitances, desaturation capacitors, and controlled current sources describing electron multiplication and transport through the dynode chain.

The simulation reproduces the key experimental features:

- waveform distortion under large input charge;
- saturation curves for different base configurations;
- suppression of a second pulse after a large preceding signal;
- qualitative recovery behavior as the pulse separation increases.

The agreement between bench measurements and circuit simulation provides a practical tool for optimizing base designs and for building future saturation/suppression correction models.

## Publication

**Performance Study and Circuit Simulation for R12699-406-M4 Photomultiplier Tube Base**  
Peiyuan Chen, Houqi Huang, and collaborators.  
_IEEE Transactions on Nuclear Science_ **73**(6), 2511-2519 (2026). **Co-first author** with Houqi Huang.

[Published article](https://doi.org/10.1109/TNS.2026.3689710) · [Preprint PDF](https://arxiv.org/pdf/2601.12364)

The preprint uses the earlier title, _Performance Test and Circuit Simulation for R12699-406-M4 Photomultiplier Tube Base_.

## Status and Next Steps

The current study establishes a validated bench-test and circuit-simulation framework for understanding nonlinear PMT-base response. Future work includes optimizing low-radioactivity capacitor choices, extending the correction database for saturation and suppression effects, and integrating the correction strategy into PandaX-xT data-analysis workflows.
