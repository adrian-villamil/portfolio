/// <reference types="vite/client" />

interface Experience {
  id: number;
  jobPosition: string;
  companyName: string;
  dates: string;
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

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface EmailData {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: {
    from_name: string;
    from_email: string;
    to_name: string;
    message: string;
  }
}

interface SubmitStatus {
  isSuccess: boolean;
  isError: boolean;
  message: string;
}