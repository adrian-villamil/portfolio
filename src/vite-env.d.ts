/// <reference types="vite/client" />

interface Experience {
  id: number;
  jobPosition: string;
  companyName: string;
  period: string;
  jobDescription: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  pills: React.ReactElement[];
  codeUrl: string;
  demoUrl: string;
}