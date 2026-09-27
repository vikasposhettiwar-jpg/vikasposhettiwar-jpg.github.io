export const profile = {
  name: "Vikas Poshettiwar",
  firstName: "Vikas",
  lastName: "Poshettiwar",
  role: "AI / ML Engineer in the making",
  tagline:
    "Third-year Computer Science student building machine-learning and computer-vision systems that do something useful in the real world.",
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
  "To build a successful career in Artificial Intelligence and Machine Learning by applying technical knowledge, developing innovative solutions, and continuously learning new technologies. Aim to contribute to real-world projects while growing as a skilled software and AI/ML professional.";

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
      "Turning raw environmental and agricultural data into trained models that predict, rank and explain outcomes.",
    tags: ["Scikit-learn", "Pandas", "NumPy"],
    featured: true,
  },
  {
    icon: "eye" as const,
    title: "Computer Vision",
    blurb:
      "Detecting hands, shapes and motion with OpenCV, then wiring those signals into interactive applications.",
    tags: ["OpenCV", "Real-time video", "Gesture logic"],
    featured: false,
  },
  {
    icon: "code" as const,
    title: "Web Development",
    blurb:
      "Building full applications end to end — Django on the back, clean HTML, CSS and JavaScript up front.",
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
      "An ML model that predicts agricultural yield from environmental and crop data, so farmers and planners can read a season before it happens.",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    image: "crop",
  },
  {
    title: "Hand Gesture Control",
    category: "Computer Vision",
    summary:
      "A computer-vision application that drives presentation slides through hand gestures — camera in, no clicker needed.",
    stack: ["Python", "OpenCV", "NumPy"],
    image: "gesture",
  },
  {
    title: "Web Development Application",
    category: "Full Stack",
    summary:
      "A web application built from scratch with Django behind the scenes and a responsive HTML, CSS and JavaScript front end.",
    stack: ["Django", "Python", "HTML / CSS", "JavaScript"],
    image: "web",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Understand the data",
    blurb:
      "Collect it, clean it, and look at it long enough to know what questions it can actually answer.",
  },
  {
    step: "02",
    title: "Build and test",
    blurb:
      "Train a simple model first, measure it honestly, then keep only the complexity that earns its place.",
  },
  {
    step: "03",
    title: "Ship and explain",
    blurb:
      "Wrap the result in an interface someone can use, and be able to defend every design choice behind it.",
  },
];

export const certifications = [
  {
    title: "Programming Essentials in Python",
    issuer: "Python fundamentals and Django",
    detail: "Coursework covering core Python programming and Django web development.",
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x",
    detail: "Hands-on workshop exploring practical AI tooling and workflows.",
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
