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
  username: "Amir Janjan",
  title: "Hi all, I'm Amir M. Janjan",
  subTitle: emoji(
    "An AI and backend developer 🚀 with a strong background in Machine Learning, NLP, and Large Language Models. Skilled in building scalable web systems, generative AI applications, and intelligent robotics solutions."
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
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "AI & Backend Developer specializing in Machine Learning, NLP, LLMs, and scalable systems",
  skills: [
    emoji("⚡ Building production-grade Machine Learning and NLP solutions"),
    emoji("⚡ Fine-tuning and deploying Large Language Models (LLMs) using LoRA/QLoRA"),
    emoji("⚡ Developing scalable APIs and backend systems with FastAPI and Django"),
    emoji("⚡ Creating intelligent robotics and computer vision applications"),
    emoji("⚡ Automating development and deployment pipelines using Docker & GitHub Actions")
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
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
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
      subHeader: "Master of Science in Artificial Inteligence and Robotics",
      duration: " 2024 -> now ",
      desc: "Description:",
      descBullets: [
        "Working on LxMs especially LLM agents",
        "Developing and working on Generative AI",
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
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Machine learning",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "30%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineer of Phone-Based Tracking Robot",
      company: "IUST Robotics Lab",
      companylogo: require("./assets/images/Logo-IUST.png"),
      date: "January 2024 – July 2024",
      desc: "Building phone-based robot that can tracks humans.",
      descBullets: [
        "All processing takes place in the smartphone.",
        "Control commands are calculated based on the image received in the smartphone.",
        "Engineered a robot with integrated mechanical, electronic, and AI systems.",
        "Programmed and evaluated neural networks for image processing and autonomous navigation.",
        "Spearheaded troubleshooting and optimization efforts.",
      ]
    },
    {
      role: "Programmer and Optimizer",
      company: "IUST CVLab",
      companylogo: require("./assets/images/cvlab_logo.png"),
      date: "July 2023 – September 2023",
      desc: "Internship at Computer Vision Lab, Iran University of Science and Technology, Tehran",
      descBullets: [
        "Optimizing Neural Networks with TensorRT.",
        "Train neural networks and inference with NVIDIA Jetson AGX Xavier.",
        "Develop some projects about object detection, template matching, and face detection.",
        "Gaining experience in building neural nets with Pytorch and TensorFlow.",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Freelancer",
      companylogo: require("./assets/images/freelancer.png"),
      date: "June 2022 – October 2022",
      desc: "Building e-commerce website",
      descBullets: [
        "Design website with Django framework as back-end framework.",
        "Designing beautiful and user-friendly UI/UX.",
        "Use PostgreSQL as DataBase.",
        "Deploy website on PaaS.",
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
