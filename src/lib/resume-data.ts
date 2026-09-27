export const profile = {
  name: "Vikas Poshettiwar",
  firstName: "Vikas",
  lastName: "Poshettiwar",
  role: "Computer Science student interested in AI & ML",
  tagline:
    "I'm a third-year Computer Science student who enjoys making ideas work — especially with machine learning and computer vision.",
  degree: "B.Tech – Computer Science & Engineering (AI & ML)",
  institute: "Mahatma Gandhi Institute of Technology",
  year: "3rd Year",
  graduation: "Expected Graduation: 2028",
  phone: "7675010666",
  linkedin: "linkedin.com/in/vikas-poshettiwar",
  linkedinUrl: "https://linkedin.com/in/vikas-poshettiwar",
  github: "github.com/vikasposhettiwar-jpg",
  githubUrl: "https://github.com/vikasposhettiwar-jpg",
};

export const objective =
  "I'm interested in how AI and machine learning can solve practical problems. I want to keep learning, put my skills to work on real projects, and grow into a thoughtful software and AI/ML professional.";

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Python", "C++"] },
  {
    title: "AI & Machine Learning",
    items: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Scikit-learn"],
  },
  {
    title: "Data & Analysis",
    items: ["Data Analysis", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Web Development",
    items: ["Django", "HTML", "CSS", "JavaScript"],
  },
  { title: "Vision Tooling", items: ["OpenCV", "Image processing", "Real-time capture"] },
];

export const expertiseCards = [
  {
    icon: "brain" as const,
    title: "Machine Learning",
    blurb:
      "I like working with data to find patterns and build useful predictions, as in my crop yield project.",
    tags: ["Scikit-learn", "Pandas", "NumPy"],
    featured: true,
  },
  {
    icon: "eye" as const,
    title: "Computer Vision",
    blurb:
      "I'm drawn to projects where a camera can become an input, like controlling slides with hand gestures.",
    tags: ["OpenCV", "Real-time video", "Gesture logic"],
    featured: false,
  },
  {
    icon: "code" as const,
    title: "Web Development",
    blurb:
      "I also build web applications with Django, HTML, CSS and JavaScript, connecting the pieces people see to the code behind them.",
    tags: ["Django", "JavaScript", "HTML / CSS"],
    featured: false,
  },
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  image: string;
};

export const projects: Project[] = [
  {
    title: "Crop Yield Prediction",
    category: "Machine Learning",
    summary:
      "I built a machine-learning model to predict crop yield using environmental and agricultural data.",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    image: "crop",
  },
  {
    title: "Hand Gesture Control",
    category: "Computer Vision",
    summary:
      "I made a computer-vision application that lets you control presentation slides with hand gestures instead of a clicker.",
    stack: ["Python", "OpenCV", "NumPy"],
    image: "gesture",
  },
  {
    title: "Web Development Application",
    category: "Full Stack",
    summary:
      "I built a web application using Python and Django alongside HTML, CSS and JavaScript.",
    stack: ["Django", "Python", "HTML / CSS", "JavaScript"],
    image: "web",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Start with the problem",
    blurb:
      "I try to understand what needs solving before deciding which tools or data to use.",
  },
  {
    step: "02",
    title: "Try, test, improve",
    blurb:
      "I start with something simple, see what works, and make changes as I learn.",
  },
  {
    step: "03",
    title: "Make it usable",
    blurb:
      "A project matters more when someone else can understand it and use it.",
  },
];

export const certifications = [
  {
    title: "Programming Essentials in Python",
    issuer: "Python fundamentals and Django",
    detail: "Covered Python fundamentals and Django web development.",
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x",
    detail: "Explored practical ways to use AI tools in a Be10x workshop.",
  },
];

export const softSkills = [
  "Communication",
  "Teamwork",
  "Leadership",
  "Problem Solving",
  "Adaptability",
  "Time Management",
];

export const languages = ["English", "Telugu", "Hindi", "Kannada"];

export const interests = ["Cricket", "Exploring new technologies", "AI & Machine Learning"];
