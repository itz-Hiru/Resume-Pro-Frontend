import TEMPLATE_ONE_IMAGE from "../assets/Template-01.png";
import TEMPLATE_TWO_IMAGE from "../assets/Template-02.png";
import TEMPLATE_THREE_IMAGE from "../assets/Template-03.png";

export const resumeTemplates = [
    {
        id: "01",
        thumbnailImage: TEMPLATE_ONE_IMAGE,
        colorPaletteCode: "themeOne",
    },
    {
        id: "02",
        thumbnailImage: TEMPLATE_TWO_IMAGE,
        colorPaletteCode: "themeTwo",
    },
    {
        id: "03",
        thumbnailImage: TEMPLATE_THREE_IMAGE,
        colorPaletteCode: "themeThree",
    },
];

export const themeColorPalette = {
    themeOne: [
        ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

        ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
        ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8519D1", "#4B4B5C"],
        ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
        ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
        ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3718"],

        ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
        ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
        ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
        ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
        ["#EFFCFF", "#C8F0FF", "#99E0FF", "#00E0FF", "#2B3A42"],

        ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
        ["#E3F2FD", "#90CAF9", "#A8D2F4", "#1E88E5", "#0D47A1"],
    ],
};

export const DUMMY_RESUME_DATA = {
    profileInfo: {
        profileImg: null,
        previewUrl: "",
        fullName: "Alex Carter",
        designation: "Full Stack Developer",
        summary:
            "Innovative and detail-oriented Full Stack Developer with over 10 years of experience designing and developing scalable web applications using modern JavaScript frameworks and cloud technologies. Passionate about clean code, efficient architecture, and delivering value through technology.",
    },
    contactInfo: {
        email: "alex.carter@example.com",
        phone: "+1 (555) 123-4567",
        location: "1234 Elm Street, San Francisco, CA, USA",
        linkedin: "https://linkedin.com/in/alexcarter",
        github: "https://github.com/alexcarter",
        website: "https://alexcarter.dev",
    },
    workExperience: [
        {
            company: "TechNova Inc.",
            role: "Senior Full Stack Developer",
            startDate: "2018-06",
            endDate: "2025-04",
            description:
                "Led a team of developers in building cloud-native applications using React, Node.js, and AWS. Designed scalable APIs and integrated third-party services to enhance product features. Mentored junior developers and conducted code reviews.",
        },
        {
            company: "CodeCrafters LLC",
            role: "Frontend Engineer",
            startDate: "2014-03",
            endDate: "2018-05",
            description:
                "Implemented dynamic user interfaces using React and Redux. Collaborated closely with UX designers to create responsive and accessible web applications. Optimized frontend performance and contributed to component libraries.",
        },
        {
            company: "DevSolutions",
            role: "Software Engineer",
            startDate: "2010-01",
            endDate: "2014-02",
            description:
                "Developed and maintained backend services using Java and Spring Boot. Participated in Agile development cycles and delivered software solutions for enterprise clients in the finance and healthcare sectors.",
        },
    ],
    education: [
        {
            degree: "Master of Science in Computer Science",
            institution: "Stanford University",
            startDate: "2008-08",
            endDate: "2010-06",
        },
        {
            degree: "Bachelor of Engineering in Information Technology",
            institution: "University of California, Berkeley",
            startDate: "2004-08",
            endDate: "2008-05",
        },
    ],
    skills: [
        { name: "JavaScript", progress: 100 },
        { name: "TypeScript", progress: 95 },
        { name: "React.js", progress: 100 },
        { name: "Node.js", progress: 95 },
        { name: "MongoDB", progress: 90 },
        { name: "Docker & Kubernetes", progress: 80 },
        { name: "AWS", progress: 85 },
        { name: "CI/CD", progress: 90 },
    ],
    projects: [
        {
            title: "TaskFlow - Productivity App",
            description:
                "A collaborative task management app built with MERN stack, supporting real-time updates and drag-and-drop functionality. Integrated with Google Calendar and Slack APIs.",
            github: "https://github.com/alexcarter/taskflow",
            liveDemo: "https://taskflow.app",
        },
        {
            title: "CodeTrack - Developer Portfolio CMS",
            description:
                "An open-source portfolio builder for developers to showcase projects, skills, and blogs. Features custom theming, markdown support, and dynamic content management.",
            github: "https://github.com/alexcarter/codetrack",
        },
        {
            title: "FoodieFinder - Restaurant Discovery App",
            description:
                "A mobile-friendly app to find restaurants nearby using Yelp and Google Maps APIs. Built using React Native and Firebase.",
            liveDemo: "https://foodiefinder.app",
        },
    ],
    certifications: [
        {
            title: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            year: "2022",
        },
        {
            title: "Certified Kubernetes Application Developer (CKAD)",
            issuer: "Cloud Native Computing Foundation",
            year: "2021",
        },
    ],
    languages: [
        { name: "English", progress: 100 },
        { name: "Spanish", progress: 70 },
        { name: "French", progress: 40 },
    ],
    interests: ["Open-Source Contribution", "Tech Blogging", "Cycling", "Traveling"],
};
