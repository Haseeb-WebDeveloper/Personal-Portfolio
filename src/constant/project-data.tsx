
const projectData = [
    {
      title: "AI SEO Landing Page",
      description: "This is a landing page I created for a SaaS company using AI to enhance SEO for businesses, featuring a clean design that showcases their innovative solutions.",
      duration: "5 weeks",
      category: "SaaS Product",
      tools: ["Next.js", "Tailwind", "React", "Framer Motion", "GSAP", "Figma"],
      live: "https://ai-seo-tool.netlify.app/",
      code: "https://github.com/Haseeb-WebDeveloper/AI-SEO-SaaS-Landing-Page",
      media: {
        large: "/ai-seo-laptop-mockup.webp",
          // medium: "/ai-seo-laptop-mockup.webp",
          // small: "/ai-seo-laptop-mockup.webp",
      }
    },
    {
      title: "Wasif Ali Khan",
      description: "This is a portfolio website I designed for a WordPress developer, highlighting their skills and projects in a professional, visually engaging layout that emphasizes their expertise and unique style.",
      duration: "1 weeks",
      category: "Portfolio",
      tools: ["React.js", "Tailwind", "Framer Motion", "GSAP", "Aceternity UI", "Figma"],
      live: "https://wasif-khan.netlify.app/",
      code: "https://github.com/Haseeb-WebDeveloper/Portfolio-Website-For-Client",
      media: {
          large: "/wasif-laptop-mockup.webp",
          // medium: "/wasif-pad-mockup.webp",
          // small: "/wasif-mobile-mockup.webp",
      }
    },
    {
      title: "Sentriq AI",
      description: "This is a landing page I created for a SaaS company using AI to enhance SEO for businesses, featuring a clean design that showcases their innovative solutions.",
      duration: "1 week",
      category: "Landing Page",
      tools: ["Next.js", "Tailwind", "Aceternity UI", "Wordpress"],
      live: "https://sentriq-ai.netlify.app/",
      code: "https://github.com/Haseeb-WebDeveloper/Sentriq-website-for-cybersecurity-application",
      media: {
          large: "/sentriq.png",
          // medium: "/fuzzie-laptop-mockup.webp",
          // small: "/fuzzie-laptop-mockup.webp",
      }
    },
    {
      title: "Gaming Master Hub",
      description: "This is a bloging website I created, featuring an engaging design and easy navigation, tailored for sharing game reviews, news, and insights with a vibrant community of gamers.",
      duration: "6 Days",
      category: "Blog Website",
      tools: ["Wordpress", "Elementor", "Figma"],
      live: "https://gamingmasterhub.online/",
      // code: "https://www.google.com",
      media: {
          large: "/gaming-master-hub-laptop-mockup.webp",
          // medium: "/gaming-master-hub-laptop-mockup.webp",
          // small: "/gaming-master-hub-laptop-mockup.webp",
      }
    },
    {
      title: "Mitra Bani",
      description: "This is a portfolio website I created for a WordPress developer, highlighting their skills and projects in a professional, visually engaging layout that emphasizes their expertise and unique style.",
      duration: "6 Days",
      category: "Portfolio",
      tools: ["Wordpress", "Elementor", "Figma"],
      live: "https://mbportfolio.pro/",
      // code: "https://www.google.com",
      media: {
          large: "/mitra-laptop-mockup.webp",
          // medium: "/mitra-bani-laptop-mockup.webp",
          // small: "/mitra-bani-laptop-mockup.webp",
      }
    },
  ];
  
  export default projectData;

  export type Project = {
    id: number
    title: string
    description: string
    image: string
    tools: string[]
    live?: string
    code?: string
  }


 export const recentProjects: Project[] = [
    {
      id: 1,
      title: "AI Assignment Manager",
      description: "A web-based software that helps students manage their assignments and submit them to their teachers. AI is used to grade assignments and provide feedback.",
      image: "/ai-assignment-manager.jpeg",
      tools: ["Nextjs", "TypeScript", "Tailwind", "Node", "Express", "MongoDB", "JWT"],
      live: "https://ai-grading.netlify.app/",
      code: "https://github.com/Haseeb-WebDeveloper/ai-assigement-checker-full-stack-application"
    },
    {
      id: 2,
      title: "Askify Q&A Platform",
      description: "A platform for asking questions and receiving answers from the community, featuring a sleek chat interface powered by AI with real-time responses.",
      image: "/askify.jpeg",
      tools: ["Next.js", "TypeScript", "Tailwind", "shadcn", "Node", "Express", "MongoDB", "Supabase"],
      // live: "https://askify-q-a-platform.netlify.app/",
      code: "https://github.com/Haseeb-WebDeveloper/ask"
    },
    {
      id: 3,
      title: "Fuzzie Automation",
      description: "An automation web-based software developed to streamline tasks across Google Drive, Slack, Notion, and Discord, simplifying workflow management.",
      image: "/fuzzie.jpeg",
      tools: ["Next.js", "TypeScript", "Tailwind", "shadcn", "Node", "Express", "MongoDB", "Clerk"],
      code: "https://github.com/Haseeb-WebDeveloper/Fuzzie-Production"
    }
  ]


  export const toolProjects: Project[] = [
    {
      id: 1,
      title: "Gitignore File Generator",
      description: "A tool that helps developers generate gitignore files for their project. It support 570+ languages and frameworks.",
      image: "/gitignore-generator.jpeg",
      tools: ["Nextjs", "TypeScript", "Tailwind", "shadcn", "Node", "Express"],
      live: "https://gitignore-generator.netlify.app/",
      code: "https://github.com/Haseeb-WebDeveloper/gitignore-generator"
    },
    {
      id: 2,
      title: "Json Data Formatter",
      description: "A tool that format JSON data, featuring syntax validation, tree view visualization, copy to clipboard, file download, and custom indentation.",
      image: "/json-formatter.jpeg",
      tools: ["Next.js", "TypeScript", "Tailwind", "shadcn", "Node", "Express"],
      live: "https://jsonformatteronline.site/"
    },
    {
      id: 3,
      title: "URL Shortener",
      description: "A tool that helps developers shorten long URLs into shorter ones, making them easier to share and manage.",
      image: "/url-shortener.jpeg",
      tools: ["Next.js", "TypeScript", "Tailwind", "shadcn", "Node", "Express"],
      code: "https://github.com/Haseeb-WebDeveloper/Next.js-url-shortener-website",
      live: "https://shortener.haseebkhan.online/"
    }
  ]