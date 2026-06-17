/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amir M. Janjan",
  title: "Hi all, I'm Amir M. Janjan",
  subTitle: emoji(
    "AI Engineer 🚀 specializing in LLM Agents, Multi-Agent Systems, and Quantitative Finance. Experienced in developing agentic AI applications, generative AI systems, and scalable backend solutions using modern AI frameworks."
  ),
  resumeLink:
    "https://www.notion.so/2360f0296e1980d3b005fac449c49b87?v=2360f0296e19814ba60f000c43e9d543", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/A-janjan",
  linkedin: "https://www.linkedin.com/in/amir-mohammad-janjan-181707286",
  gmail: "a.m.x.janjan@gmail.com",
  // gitlab: "https://gitlab.com/a_janjan",
  twitter: "https://twitter.com/AMXJanjan",
  hashnode: "https://a-janjan.hashnode.dev/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "AI Engineer specializing in LLM Agents, Multi-Agent Systems, and Quantitative Finance",

  skills: [
    emoji("⚡ Designing and developing LLM-powered agents and multi-agent AI systems"),
    emoji("⚡ Building agentic workflows with planning, reasoning, memory, and tool-use capabilities"),
    emoji("⚡ Developing AI solutions for quantitative finance, financial analysis, and algorithmic trading"),
    emoji("⚡ Creating production-ready AI applications using Python, LangChain, FastAPI, and modern LLM frameworks"),
    emoji("⚡ Deploying and optimizing machine learning and generative AI systems with Docker and cloud technologies")
  ],

  /* Font Awesome Classnames for display icons */
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "LangGraph",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "FAISS",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-rocket"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Keep true to show on your website
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Tehran",
      logo: require("./assets/images/ut_logo.png"),
      subHeader: "Master of Science in Artificial Intelligence and Robotics",
      duration: "2024 – Present",
      desc: "Focused on agentic AI, large language models, and quantitative finance applications.",
      descBullets: [
        "Researching autonomous LLM agents and multi-agent systems for complex decision-making tasks.",
        "Building AI applications using generative AI, retrieval-augmented generation (RAG), and agent frameworks.",
        "Exploring planning, reasoning, memory, and tool-use capabilities of AI agents.",
        "Developing a multi-agent quantitative finance platform as part of my master's thesis."
      ]
    },
    {
      schoolName: "Iran University of Science and Technology",
      logo: require("./assets/images/Logo-IUST.png"),
      subHeader: "Bachelor of Science in Electrical and Control Engineering",
      duration: " 2019 -> 2024 ",
      desc: "Courses and Achievements:",
      descBullets: [
        "Ranked top 10% in the program.",
        "Trained extensively in Electrical Theories.",
        "Trained in Industrial Automation.",
        "Get a good knowledge of Control Theory and making controllers with MATLAB.",
        "Gaining experience in ARM and microcontroller programming.",
        "Gaining experience in building several robotics projects.",
        "Final Project: Implementation of the self-driving robot with a smartphone.",
      ]
    },
    {
      schoolName: "National Organization for Development of Exceptional Talents(Sampad)",
      logo: require("./assets/images/Sampad.png"),
      subHeader: "Diploma of Mathematical and technical sciences",
      duration: "2013 -> 2019",
      desc: "Courses and Achievements:",
      descBullets: [
        "Rank 1st Among school students.",
        "Ranked top 1% in Iranian University Entrance Exam.",
        "Gaining comprehensive knowledge in Mathematics and Physics.",
        "Gaining experience in C/C++ programming.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "LLM Agents",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Quant Finance",
      progressPercentage: "50%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "University of Tehran NLP Lab",
      companylogo: require("./assets/images/University_of_Tehran_logo.png"),
      date: "Nov 2024 – Present",
      desc: "Conducting research on multi-agent LLM systems, with a focus on planning, reasoning, and decision-making for real-world applications.",
      descBullets: [
        "Developing LLM-based agents for task automation and decision support.",
        "Researching agentic AI approaches for travel planning and complex decision-making.",
        "Designing and evaluating LLM-driven agents for financial and investment applications.",
        "Investigating multi-agent architectures for quantitative finance and algorithmic trading systems."
      ]
    },
    {
      role: "Robotics Engineer",
      company: "IUST Robotics Lab",
      companylogo: require("./assets/images/Logo-IUST.png"),
      date: "Jan 2024 – Jul 2024",
      desc: "Developed a smartphone-based autonomous robot capable of real-time human tracking using onboard computer vision and control algorithms.",
      descBullets: [
        "Designed a robot architecture where all perception and decision-making processes were executed on a smartphone.",
        "Implemented vision-based control algorithms to generate robot motion commands from camera input.",
        "Integrated mechanical, electronic, and AI components into a fully functional robotic platform.",
        "Developed and evaluated deep learning models for visual perception and target tracking.",
        "Performed system debugging, optimization, and performance evaluation for reliable real-time operation."
      ]
    },
    {
      role: "Computer Vision Engineer Intern",
      company: "IUST CVLab",
      companylogo: require("./assets/images/cvlab_logo.png"),
      date: "Jul 2023 – Sep 2023",
      desc: "Worked on computer vision and deep learning projects, focusing on model optimization and deployment on edge AI platforms.",
      descBullets: [
        "Optimized deep learning models using NVIDIA TensorRT for accelerated inference.",
        "Trained, deployed, and benchmarked neural networks on NVIDIA Jetson AGX Xavier.",
        "Developed computer vision applications including object detection, face detection, and template matching.",
        "Built and evaluated deep learning models using PyTorch and TensorFlow.",
        "Gained hands-on experience with edge AI deployment and performance optimization."
      ]
    },
    {
      role: "Freelance AI & Backend Developer",
      company: "Freelance",
      companylogo: require("./assets/images/freelancer.png"),
      date: "Jun 2022 – Present",
      desc: "Providing freelance services in Python backend development and AI-powered software solutions.",
      descBullets: [
        "Developed backend services, REST APIs, and web applications using Django and FastAPI.",
        "Designed and implemented scalable database solutions using PostgreSQL.",
        "Built AI-powered applications leveraging machine learning and large language models.",
        "Developed custom software solutions for automation, data processing, and business workflows.",
        "Managed the full project lifecycle, including requirements analysis, development, deployment, and maintenance."
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },

  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [

    {
      title: "1st rank in the information technology(IT) national entrance exam",
      subtitle:
        "February 2024",
      image: require("./assets/images/Sanjesh_logo.png"),
      imageAlt: "Sanjesh Logo",

      footerLink: [
        {
          name: "MSc Konkur",
          url: "#"
        }
      ]
    },




  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to share my knowledge",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@a.m.x.janjan/",
      title: "MEDIUM.COM",
      description:
        "I enjoy sharing my knowledge on Medium.com across a variety of fields to help and inspire others."
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "a.m.x.janjan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "AMXJanjan", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
