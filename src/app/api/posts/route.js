import { NextResponse } from "next/server";

export async function GET() {
  try {
    // You can replace this with actual data fetching logic
    // For now, we'll return the mock data that's already in your Posts component
    const posts = [
      {
        id: 1,
        title: "100+ Frontend Projects to Level Up",
        coverImage: "/img/frontendbg.png",
        description: "Boost your skills with these projects.",
        author: "CodeX Orbit",
        date: "Oct 31, 2024",
        category: "project",
        slug: "frontend-projects-level-up",
      },
      {
        id: 2,
        title: "Master Frontend with 100+ Projects",
        coverImage: "/img/frontendbg.png",
        description: "Practical coding challenges.",
        author: "CodeX Orbit",
        date: "Oct 31, 2024",
        category: "frontend",
        slug: "master-frontend-projects",
      },
      {
        id: 3,
        title: "Complete Guide to React.js Development",
        coverImage: "/img/frontendbg.png",
        description:
          "Master modern React development with hooks and best practices.",
        author: "CodeX Orbit",
        date: "Nov 15, 2024",
        category: "react",
        slug: "complete-react-guide",
      },
      {
        id: 4,
        title: "Building Scalable APIs with Node.js",
        coverImage: "/img/frontendbg.png",
        description: "Learn to create robust backend services.",
        author: "CodeX Orbit",
        date: "Nov 25, 2024",
        category: "backend",
        slug: "scalable-nodejs-apis",
      },
      {
        id: 5,
        title: "TypeScript for JavaScript Developers",
        coverImage: "/img/frontendbg.png",
        description: "Enhance your JS projects with static typing.",
        author: "CodeX Orbit",
        date: "Dec 05, 2024",
        category: "typescript",
        slug: "typescript-essentials",
      },
      {
        id: 6,
        title: "Next.js 14 Full Stack Development",
        coverImage: "/img/frontendbg.png",
        description: "Build modern web applications with Next.js.",
        author: "CodeX Orbit",
        date: "Dec 20, 2024",
        category: "nextjs",
        slug: "nextjs-full-stack",
      },
      {
        id: 7,
        title: "CSS Grid and Flexbox Mastery",
        coverImage: "/img/frontendbg.png",
        description: "Master modern CSS layouts.",
        author: "CodeX Orbit",
        date: "Jan 10, 2025",
        category: "css",
        slug: "css-layout-mastery",
      },
      {
        id: 8,
        title: "Web Performance Optimization",
        coverImage: "/img/frontendbg.png",
        description: "Optimize your web apps for speed.",
        author: "CodeX Orbit",
        date: "Jan 25, 2025",
        category: "performance",
        slug: "web-performance",
      },
      {
        id: 9,
        title: "Modern JavaScript Best Practices",
        coverImage: "/img/frontendbg.png",
        description: "Write clean and efficient JavaScript code.",
        author: "CodeX Orbit",
        date: "Feb 05, 2025",
        category: "javascript",
        slug: "js-best-practices",
      },
      {
        id: 10,
        title: "Frontend Testing Strategies",
        coverImage: "/img/frontendbg.png",
        description: "Comprehensive guide to testing frontend applications.",
        author: "CodeX Orbit",
        date: "Feb 20, 2025",
        category: "testing",
        slug: "frontend-testing",
      },
      {
        id: 11,
        title: "State Management with Redux Toolkit",
        coverImage: "/img/frontendbg.png",
        description: "Master modern state management in React.",
        author: "CodeX Orbit",
        date: "Mar 05, 2025",
        category: "react",
        slug: "redux-toolkit-guide",
      },
      {
        id: 12,
        title: "Building Responsive Web Design",
        coverImage: "/img/frontendbg.png",
        description: "Create websites that work on any device.",
        author: "CodeX Orbit",
        date: "Mar 20, 2025",
        category: "css",
        slug: "responsive-web-design",
      },
    ];

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
