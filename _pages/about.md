---
layout: about
title: About
permalink: /
subtitle: Research Assistant, PandaX Collaboration · Detector Instrumentation

profile:
  align: right
  #image: prof_pic.jpg
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p><a href="https://pandax.sjtu.edu.cn/" target="_blank">PandaX Collaboration</a></p>
    <p>Experimental Particle Physics</p>
    <p>Detector Instrumentation & Data Analysis</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a research assistant with the <a href="https://pandax.sjtu.edu.cn/" target="_blank" rel="noopener">PandaX Collaboration</a> at the Tsung-Dao Lee Institute, Shanghai Jiao Tong University. I received my B.S. in Physics from Jilin University in June 2026 and was a visiting undergraduate student at Georgia Tech in 2024.

My work connects detector hardware with the signals used in rare-event searches. I develop PMT acquisition systems, characterize photosensor response, and use bench measurements, circuit simulation, and waveform analysis to study calibration and reconstruction in liquid-xenon detectors. My research spans the full chain from high-voltage and readout integration to detector-data correction and PMT-array position reconstruction.

[Download CV]({{ '/assets/pdf/cv_jakes_resume_emphasis_2026.pdf' | relative_url }}) · [Email](mailto:orionchen314@gmail.com) · [Research projects]({{ '/projects/' | relative_url }})

## Selected Research

- **[PMT acquisition and characterization]({{ '/projects/pmt_acquisition_characterization/' | relative_url }}):** Led development and maintenance of a 192-channel test platform with 500 MS/s digitization and over 1,000 MB/s readout bandwidth. Characterized more than 160 R11410 and 500 R12699 PMTs.
- **[Large-signal response and waveform correction]({{ '/projects/pmt_waveform_correction/' | relative_url }}):** Combine measured response curves, base-circuit simulation, and a custom 2.5D diagnostic electron-transport model. Under the same event selection, waveform correction reduced the difference between multi-site and single-site reconstructed energy peak positions by 85%.
- **[PMT arrays and position reconstruction]({{ '/projects/3_position_recon/' | relative_url }}):** Led hardware, DAQ, calibration, Geant4 optical simulation, and reconstruction for a 55-channel R11410 array; achieved approximately 0.66 mm overall spatial resolution in array performance tests.
- **[R12699 base performance]({{ '/projects/2_pmt_sat_sup/' | relative_url }}):** Co-first author of the resulting _IEEE Transactions on Nuclear Science_ paper on PMT-base performance and circuit simulation.

## Research Interests

- Dark matter detection and rare-event searches
- Liquid-xenon detectors, PMT instrumentation, and readout electronics
- Detector calibration, nonlinear waveform response, and position reconstruction
