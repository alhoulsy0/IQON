export type KnowledgeEntry = {
    keywords: string[];
    response: string;
    link?: {
        text: string;
        url: string;
    };
    category: "Product" | "Service" | "Project" | "General";
};

export const knowledgeBase: KnowledgeEntry[] = [
    // --- Products ---
    {
        keywords: ["aurora", "faheem", "generative", "test plan", "automation"],
        response: "The **AURORA™ Platform** (powered by the Faheem Engine) is our flagship Generative AI solution. It automates software testing by generating test cases, data, and scripts 10x faster than traditional methods.",
        link: { text: "View AURORA™", url: "/products/aurora" },
        category: "Product"
    },
    {
        keywords: ["risk lens", "qertex assessment", "audit", "compliance", "tmmi", "iso", "qiyas"],
        response: "**Qertex Assessment™** (formerly Risk Lens) is your AI Compliance Consultant. It instantly assesses your organization against global standards like TMMi, ISO 9001/27001, and Qiyas, providing a strategic gap analysis.",
        link: { text: "Try Assessment", url: "/products/risk-lens" },
        category: "Product"
    },

    // --- Services ---
    {
        keywords: ["staffing", "hiring", "recruit", "talent", "outsource"],
        response: "**Technical Staffing** is our elite recruitment service. We deploy vetted professionals from our global talent hubs in Jordan and Bahrain to seamlessly integrate with your teams.",
        link: { text: "Hire Talent", url: "/services/staffing" },
        category: "Service"
    },
    {
        keywords: ["ai", "artificial intelligence", "cyber", "security", "machine learning"],
        response: "Our **AI & Cyber** division builds sovereign AI models and cognitive architectures while securing them with military-grade defense strategies.",
        link: { text: "AI Services", url: "/services/ai" },
        category: "Service"
    },
    {
        keywords: ["academy", "training", "course", "learn"],
        response: "**Qertex Academy** offers specialized training in Software Quality, AI Engineering, and Performance Testing to upskill your workforce.",
        link: { text: "View Courses", url: "/services/academy" },
        category: "Service"
    },
    {
        keywords: ["quality", "qa", "testing", "assurance"],
        response: "We provide comprehensive **Software Quality Assurance**, from functional testing to specialized performance and security auditing.",
        link: { text: "Quality Services", url: "/services/assurance" },
        category: "Service"
    },

    // --- Projects ---
    {
        keywords: ["vat", "tax", "revenue", "sap"],
        response: "We spearheaded the QA for the **SAP Tax & Revenue Management** system, ensuring 100% accuracy for VAT implementation across the GCC.",
        link: { text: "View Case Study", url: "/projects" },
        category: "Project"
    },
    {
        keywords: ["excise", "customs"],
        response: "Our team delivered an audit-ready **Global Excise Tax System**, validating complex tax engines for high-stakes governmental environments.",
        link: { text: "View Case Study", url: "/projects" },
        category: "Project"
    },
    {
        keywords: ["dmtt", "pillar two", "minimum tax"],
        response: "We managed the QA for **Domestic Minimum Top-up Tax (DMTT)** frameworks, ensuring compliance with evolving international tax standards.",
        link: { text: "View Case Study", url: "/projects" },
        category: "Project"
    },
    {
        keywords: ["cit", "corporate income", "finance"],
        response: "We engineered the QA architecture for a multi-regional **Corporate Income Tax (CIT)** rollout, focusing on data reconciliation and reporting integrity.",
        link: { text: "View Case Study", url: "/projects" },
        category: "Project"
    },
    {
        keywords: ["mobile", "lg", "android", "ios", "app"],
        response: "In partnership with **LG Electronics**, we provided elite localization and performance testing for mobile networks and apps across the MENA region.",
        link: { text: "View Case Study", url: "/projects" },
        category: "Project"
    },

    // --- General/Contact ---
    {
        keywords: ["contact", "email", "phone", "reach", "hire"],
        response: "You can reach us directly at **info@qertex.com** or use our contact form to start a project.",
        link: { text: "Contact Us", url: "/contact" },
        category: "General"
    },
    {
        keywords: ["hello", "hi", "hey", "start"],
        response: "Hello! I'm the Qertex AI Assistant. Ask me about our **Products**, **Services**, or **Projects**!",
        category: "General"
    }
];

export const findResponse = (query: string): KnowledgeEntry | null => {
    const lowerQuery = query.toLowerCase();

    // Find the first entry where match logic is true
    return knowledgeBase.find(entry =>
        entry.keywords.some(keyword => lowerQuery.includes(keyword))
    ) || null;
};
