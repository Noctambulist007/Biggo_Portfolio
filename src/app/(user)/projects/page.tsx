import ProjectsSection from '@/src/components/sections/ProjectsSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Projects',
    path: '/projects'
  });
}

export interface Project {
  id: string;
  title: string;
  des: string;
  category: string;
  repo: string;
  link: string;
  topics: string[];
}

export const biggosProjects: Project[] = [
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

const ProjectsPage = () => <ProjectsSection staticProjects={biggosProjects} />;

export default ProjectsPage;
