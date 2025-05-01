import TEMPLATE_ONE_IMAGE from "../assets/hero-image.png";
import TEMPLATE_TWO_IMAGE from "../assets/hero-image.png";
import TEMPLATE_THREE_IMAGE from "../assets/hero-image.png";

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
        fullName: "John Doe",
        designation: "Software Engineer",
        summary: "Passionate and results-driven developer with 10+ years of experience building full stack web applications."
    },
    contactInfo: {
        email: "johndoe@example.com",
        phone: "0123456789",
        location: "216, Anywhere, Any city, Any Country",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/john-doe",
        website: "https://johndoe.com"
    },
    workExperience: [
        {
            company: "ABC Pvt.ltd",
            role: "Senior software engineer",
            startDate: "2000-01",
            endDate: "2005-05",
            description: "Worked as a senior software engineer in ABC Pvt.ltd and build solutions for great problems.",
        },
        {
            company: "ABC Pvt.ltd",
            role: "Senior software engineer",
            startDate: "2005-05",
            endDate: "2010-05",
            description: "Worked as a senior software engineer in ABC Pvt.ltd and build solutions for great problems.",
        },
        {
            company: "ABC Pvt.ltd",
            role: "Senior software engineer",
            startDate: "2010-05",
            endDate: "2025-04",
            description: "Worked as a senior software engineer in ABC Pvt.ltd and build solutions for great problems.",
        },
    ],
    education: [
        {
            degree: "ABC Degree",
            institution: "ABC University",
            startDate: "2000-01",
            endDate: "2004-02",
        },
        {
            degree: "ABC Degree",
            institution: "ABC University",
            startDate: "2000-01",
            endDate: "2004-02",
        },
        {
            degree: "ABC Degree",
            institution: "ABC University",
            startDate: "2000-01",
            endDate: "2004-02",
        },
    ],
    skills: [
        { name: "Javascript", progress: 100 },
        { name: "Javascript", progress: 100 },
        { name: "Javascript", progress: 100 },
        { name: "Javascript", progress: 100 },
        { name: "Javascript", progress: 100 },
        { name: "Javascript", progress: 100 },
    ],
    projects: [
        {
            title: "Project 01",
            description: "Dummy description of Project 01 Dummy description of Project 01 Dummy description of Project 01",
            github: "https://project01.com",
        },
        {
            title: "Project 02",
            description: "Dummy description of Project 02 Dummy description of Project 02 Dummy description of Project 02",
            liveDemo: "https://project02.com",
        },
        {
            title: "Project 03",
            description: "Dummy description of Project 03 Dummy description of Project 03 Dummy description of Project 03",
            github: "https://project03.com",
            liveDemo: "https://project03.com",
        },
    ],
    certifications: [
        {
            title: "Certification 01",
            issuer: "ABC Tech",
            year: "2000",
        },
        {
            title: "Certification 02",
            issuer: "ABC Tech",
            year: "2010",
        },
        {
            title: "Certification 03",
            issuer: "ABC Tech",
            year: "2020",
        },
    ],
    languages: [
        { name: "Sinhala", progress: 100 },
        { name: "English", progress: 80 },
        { name: "Tamil", progress: 50 },
    ],
    interests: ["Interest", "Interest", "Interest", "Interest"],
}