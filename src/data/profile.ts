import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Naga Sandeep Metla',
  initials: 'NM',
  headline: 'Senior AI Engineer',
  location: 'McKinney, Texas',
  email: 'Nagasandeepmetla09@outlook.com',
  pitch:
    'I build production generative AI on Azure: RAG pipelines, document intelligence, and AI agents, on top of nine years of enterprise integration work.',
  summary: [
    'Senior AI and software engineer with 9+ years of experience building production AI solutions and enterprise systems in Python, C#, Java, and .NET.',
    'At Corcentric I built a RAG pipeline (LangChain, Azure OpenAI, vector embeddings in Azure AI Foundry) that drafts XSLT from client requirements, and an invoice extraction tool on Azure Document Intelligence. My day-to-day spans generative AI application development, LLM orchestration, prompt engineering, and knowledge-grounded agentic solutions.',
    'Before AI, I spent years in enterprise integration: BizTalk Server, EDI/B2B (retail and HIPAA), Kafka, NiFi, Camel, and Smooks. I am now moving that platform to Azure as .NET microservices with React front ends, deployed through Docker and CI/CD and secured with Microsoft Entra ID.',
  ],
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nagasandeepmetla', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:nagasandeepmetla09@outlook.com', icon: 'email' },
    // Add your GitHub when ready:
    // { label: 'GitHub', url: 'https://github.com/<username>', icon: 'github' },
  ],
  photo: '', // e.g. 'photo.jpg' placed in /public
  resumeUrl: '', // e.g. 'resume.pdf' placed in /public
  stats: [
    { value: '9+', label: 'Years of experience' },
    { value: '2', label: 'Azure AI certifications' },
    { value: '13', label: 'EDI transaction sets delivered' },
    { value: '4', label: 'Languages: Python, C#, Java, JS' },
  ],
};
