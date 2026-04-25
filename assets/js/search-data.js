// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "research publications and selected manuscripts",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-hobbies",
          title: "Hobbies",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-mega-trophy-achieved-first-prize-in-china-undergraduate-physics-experiment-competition",
          title: ':mega: :trophy: Achieved First Prize in China Undergraduate Physics Experiment Competition',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-joined-pandax-4t-as-a-research-assistant",
          title: 'Joined PandaX-4T as a Research Assistant.',
          description: "",
          section: "News",},{id: "news-finalized-pmt-waveform-analysis-and-charge-reconstruction-framework",
          title: 'Finalized PMT waveform analysis and charge reconstruction framework.',
          description: "",
          section: "News",},{id: "projects-pmt-readout-platform-for-a-pandax-inspired-array",
          title: 'PMT Readout Platform for a PandaX-inspired Array',
          description: "Designed and implemented a multi-channel PMT readout system for a 55-PMT array, including waveform acquisition, baseline correction, and charge extraction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_pmy_readout_system/";
            },},{id: "projects-pmt-linearity-and-saturation-correction-study",
          title: 'PMT Linearity and Saturation Correction Study',
          description: "Investigated PMT saturation mechanisms and improved linearity using optimized base circuits and desaturation capacitors, extending dynamic range significantly.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_pmt_sat_sup/";
            },},{id: "projects-light-source-position-reconstruction-with-pmt-arrays",
          title: 'Light Source Position Reconstruction with PMT Arrays',
          description: "Implemented position reconstruction algorithms based on PMT charge distributions, including center-of-gravity and PAF methods, and evaluated spatial resolution.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_position_recon/";
            },},{id: "projects-root-based-pmt-waveform-analysis-framework",
          title: 'ROOT-based PMT Waveform Analysis Framework',
          description: "Developed a C++/ROOT pipeline for multi-channel waveform processing, including baseline subtraction, peak finding, charge integration, and automated fitting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_root_waveform_analysis_framework/";
            },},{id: "projects-cycling-injury-workshop-and-sports-outreach",
          title: 'Cycling Injury Workshop and Sports Outreach',
          description: "Organized and delivered a workshop on identifying and managing cycling-related knee injuries, integrating biomechanics with practical training guidance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_cycling_injury_workshop/";
            },},{id: "projects-first-cycling-race-at-jilin-university",
          title: 'First Cycling Race at Jilin University',
          description: "Organized the first campus-wide cycling race, including planning, safety management, and on-site execution.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cycling_race/";
            },},{id: "projects-flexible-pmt-base-design-for-next-generation-lxe-detectors",
          title: 'Flexible PMT Base Design for Next-generation LXe Detectors',
          description: "Designed a compact flexible PMT base integrating voltage division, signal readout, and mechanical adaptability for dense PMT arrays in future liquid xenon experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/new_base_design/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old_9_project/";
            },},{id: "projects-jilin-university-physics-academic-competition",
          title: 'Jilin University Physics Academic Competition',
          description: "Organized and led a university-wide physics competition, designing evaluation systems and coordinating judging processes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/physics_competition/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%4F%72%69%6F%6E%63%68%65%6E%33%31%34@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/3109706", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QRPXZ3UAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Orionchen314", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
