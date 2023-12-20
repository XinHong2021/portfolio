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
  username: "Hindy Hong",
  title: "Hello, I'm Hindy Hong",
  subTitle: emoji(
    "A passionate Data Scientist or Analyst studying Master of Artificial Intelligence in the penultimate year 💺. Consistently self grow focusing on professional skills, language skills who loves hiking, swimming, fitness, travelling and photography. ⛰ 🏊‍♀️ 🏋️‍♀️ 📷"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/XinHong2021",
  linkedin: "https://www.linkedin.com/in/xinhindyhong/",
  gmail: "hindyhong327@gmail.com",
  Instagram: "https://instagram.com/hindy.hong?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSION TO LEARN THE CUTTING-EDGE TECHNOLOGIES in MACHINE LEARNING, AI, WEB",
  skills: [
    emoji(
      "⚡ Building engaging, innovative and informative data visualizations using Tableau or Python or R language"
    ),
    emoji("⚡ Pratical machine learning knowledge with experience in various kaggle competitions"),
    emoji(
      "⚡ Current learning Cloud Computing Services"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R language",
      fontAwesomeClassname: "fab r-project"
    },
    {
      skillName: "Machine learning",
      fontAwesomeClassname: "fab brain-circuit"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fab chart-column"
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: "fab table"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab js"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fab database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab leaf"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas chart-candlestick"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Melbourne",
      logo: require("./assets/images/unimelbLogo.png"),
      subHeader: "Master of Information Technology in Artificial Intelligence",
      duration: "March 2023 - December 2024",
      desc: "Current Score: 79.5",
      descBullets: [
        "Courses: Statistical Machine Learning (87), Algorithms and Complexity (80)",
        "Studied alongside self-learning and doing personal projects during the whole degree"
      ]
    },
    {
      schoolName: "Monash University",
      logo: require("./assets/images/monashLogo.png"),
      subHeader: "Bachelor of Commerce in Business Analytics",
      duration: "March 2021 - December 2022",
      desc: "Overall Score: 81.6 High Distinction ",
      descBullets: [
        "Awarded prize for the highest mark (94) in the Predictive Analytics and Machine Learning course",
        "Math",
        "Data Analytics",
        "Professional Presentation Skills",
        "Marketing"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Query in SQL", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Data Scientist Intern",
      company: "Melbourne Data Analytics Platform (MDAP)",
      companylogo: require("./assets/images/unimelbLogo.png"),
      date: "July 2023 – November 2023",
      desc: "Embedded in two data intensive research projects: predicting future AU savanna, modelling AU a healthy diet to replace meat",
      descBullets: [
        "Savanna project: Extracted coordinates in Python (Xarray) and modelled a bayes model (PyMC) to study savanna patterns; participated and held fortnightly paper-reading seminars",
        "Health diet project: Applied interactions into data visualization in Python (IPyWidgets & Matplotlib), improving 50% efficiency"
      ]
    },
    {
      role: "Data Operation Analyst Intern",
      company: "ByteDance (Parent company of TikTok)",
      companylogo: require("./assets/images/ByteDance.png"),
      date: "May 2017 – May 2018",
      desc: "Assisted operation team in the international music department to do data analyst",
      descBullets: [
        "Extracted millions of data using SQL and processed in Excel to help stakeholders solve business problems",
        "Generated a dashboard using Tableau to analyze artists and their songs’ consumption to emphasize the importance of having portraits in APP, persuading external collaborators to upload portraits",
        "Justified the definitions of lyric coverage rate in documented Hive SQL codes which was used to evaluate weekly performance, to ensure hot songs including lyrics and avoid 15% cost of productivity"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "NIO (Electric vehicle company)",
      companylogo: require("./assets/images/NIOLogo.png"),
      date: "November 2021 – February 2022",
      desc: "Help supervisors to assess service performance through users' scores in user satisfaction department",
      descBullets: [
        "Cleaned millions of sales data and generated weekly reports (in pandas, NumPy) to detect unusual events",
        "Designed questionnaires, analyzed 17,000 observations and presented users’ feedbacks in PPTs",
        "Implemented auto mail-sending mechanism in Python to report daily sales performance and constructed sales dashboards using Tableau, reducing 30% liaising time with stakeholders"
      ]
    }
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
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
