import BlogSection from '@/src/components/sections/BlogSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Blog',
    path: '/blog'
  });
}

export interface Blog {
  guid: string;
  title: string;
  link: string;
  contentSnippet: string;
  categories: string[];
  source: string;
  thumbnail?: string;
  pubDate: string;
}

export const biggosBlogs: Blog[] = [
  {
    guid: '1',
    title: 'Retinal Optical Coherence Tomography (OCT) Image Classification for Glaucoma Detection',
    link: '/blog/retinal-oct-image-classification',
    contentSnippet: 'Plan to develop a deep learning model for Retinal OCT image analysis using CNN, leveraging transfer learning and robust techniques like dropout and batch normalization.',
    categories: ['Research', 'AI/ML', 'Healthcare', 'Deep Learning'],
    source: 'Research Project',
    pubDate: 'October 14, 2024'
  },
  {
    guid: '2',
    title: 'Multi-Model Attentional Fusion Ensemble for Accurate Skin Cancer Classification',
    link: '/blog/multi-model-fusion-skin-cancer',
    contentSnippet: 'An ensemble combining ResNet50V2, MobileNetV2, and EfficientNetV2 with attention mechanism to improve skin cancer classification accuracy.',
    categories: ['Research', 'AI/ML', 'Healthcare', 'Deep Learning'],
    source: 'IEEE ACCESS',
    pubDate: 'October 14, 2024'
  },
  {
    guid: '3',
    title: 'Performance Analysis of Machine Learning Algorithms in Chronic Kidney Disease Prediction',
    link: '/blog/ml-algorithms-ckd-prediction',
    contentSnippet: 'Analyzed eight machine learning models, including Random Forest, SVM, and Logistic Regression, for Chronic Kidney Disease (CKD) diagnosis.',
    categories: ['Research', 'AI/ML', 'Healthcare', 'Machine Learning'],
    source: 'IEEE IEMCON 2022',
    pubDate: 'October 14, 2024'
  },
  {
    guid: '4',
    title: 'Diabetes Prediction',
    link: '/blog/diabetes-prediction',
    contentSnippet: 'This project focuses on using machine learning algorithms to predict diabetes based on various health parameters.',
    categories: ['AI/ML', 'Healthcare', 'Project'],
    source: 'Personal Project',
    pubDate: 'October 14, 2024'
  },
  {
    guid: '5',
    title: 'Correlational analysis',
    link: '/blog/correlational-analysis',
    contentSnippet: 'Exploring correlational analysis techniques for medical data to identify patterns and relationships between different health factors.',
    categories: ['AI/ML', 'Data Analysis', 'Healthcare'],
    source: 'Research',
    pubDate: 'October 14, 2024'
  },
  {
    guid: '6',
    title: 'Skin Lesion Detector',
    link: '/blog/skin-lesion-detector',
    contentSnippet: 'This project\'s main feature is to detect skin lesions among seven types. The machine learning model identifies the type, and the app receives the response via API.',
    categories: ['Flutter', 'AI/ML', 'Healthcare', 'Project'],
    source: 'Project',
    pubDate: 'May 27, 2024'
  },
  {
    guid: '7',
    title: 'Social Feed',
    link: '/blog/social-feed',
    contentSnippet: 'Demonstrates clean architecture with a focus on REST API (mock), dependency injection, and state management using Riverpod.',
    categories: ['Flutter', 'Mobile Development', 'Project'],
    source: 'Project',
    pubDate: 'May 27, 2024'
  },
  {
    guid: '8',
    title: 'CKD(Chronic Kidney Disease) Prediction',
    link: '/blog/ckd-prediction',
    contentSnippet: 'Using machine learning to predict chronic kidney disease based on various health parameters and lab results.',
    categories: ['AI/ML', 'Healthcare', 'Project'],
    source: 'Project',
    pubDate: 'May 27, 2024'
  }
];

const BlogPage = () => <BlogSection staticBlogs={biggosBlogs} />;

export default BlogPage;
