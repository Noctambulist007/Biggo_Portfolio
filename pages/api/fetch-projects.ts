import { siteConfig } from '@/src/configs/config';

// Static projects data to avoid using GitHub API
const staticProjects = [
  {
    id: '1',
    title: 'Skin Lesion Detector',
    des: "This project's main feature is to detect skin lesions among seven types. The machine learning model identifies the type, and the app receives the response via API.",
    category: 'flutter',
    repo: 'https://github.com/Biggo111/skin-lesion-detector',
    link: 'https://github.com/Biggo111/skin-lesion-detector',
    topics: ['Flutter', 'Machine Learning', 'FastAPI', 'Healthcare', 'AI']
  },
  {
    id: '2',
    title: 'Machine Learning Basics',
    des: 'This repository contains several machine learning projects, with a focus on healthcare and data analysis, including Diabetes Prediction System, Cardiovascular Disease Prediction System, Linear Regression Exercises, and Experimenting Principal Component Analysis (PCA).',
    category: 'python',
    repo: 'https://github.com/Biggo111/machine-learning-basics',
    link: 'https://github.com/Biggo111/machine-learning-basics',
    topics: ['Python', 'Machine Learning', 'Data Analysis', 'Healthcare', 'Pandas', 'NumPy', 'Scikit-learn']
  },
  {
    id: '3',
    title: 'Social Feed App',
    des: 'Demonstrates clean architecture with a focus on REST API (mock), dependency injection, and state management using Riverpod. Distinction between UI and business logic, modular code.',
    category: 'flutter',
    repo: 'https://github.com/Biggo111/social-feed-app',
    link: 'https://github.com/Biggo111/social-feed-app',
    topics: ['Flutter', 'Riverpod', 'Clean Architecture', 'REST API', 'Mobile']
  }
];

// In-memory cache for static data
let cache: {
  data: any;
  timestamp: number;
} = { data: staticProjects, timestamp: Date.now() };

// Cache expiration time (in milliseconds)
const CACHE_EXPIRATION = 10 * 60 * 1000; // 10 minutes

export default async function handler(
  req: { query: { search?: string } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: (arg0: any) => void;
    };
  }
) {
  const { search } = req.query;

  try {
    // Always serve from the static data
    sendFilteredProjects(staticProjects, search, res);
  } catch (error) {
    console.error('Error handling projects:', error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
}

function sendFilteredProjects(
  projects: any[],
  search: string | undefined,
  res: any
) {
  const filteredProjects = search
    ? projects.filter(
        (project: { category: string; title: string; topics: string[] }) =>
          project.category.toLowerCase().includes(search.toLowerCase()) ||
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.topics.some((topic) =>
            topic.toLowerCase().includes(search.toLowerCase())
          )
      )
    : projects;

  res.status(200).json(filteredProjects);
}
