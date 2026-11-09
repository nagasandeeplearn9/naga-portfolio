import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Generative AI',
    icon: 'ai',
    skills: [
      'Azure OpenAI Service',
      'Azure AI Foundry',
      'LangChain',
      'RAG Pipelines',
      'Vector Embeddings',
      'Azure AI Search',
      'Azure Document Intelligence',
      'AI Agents',
      'Prompt Engineering',
      'Responsible AI',
    ],
  },
  {
    title: 'Languages & Development',
    icon: 'code',
    skills: ['Python', 'C#', 'Java', '.NET', 'ASP.NET', 'React', 'JavaScript', 'REST APIs', 'Microservices', 'XSLT'],
  },
  {
    title: 'Cloud, DevOps & Security',
    icon: 'cloud',
    skills: [
      'Azure',
      'Docker',
      'CI/CD',
      'PowerShell',
      'Microsoft Entra ID',
      'Role-Based Access Control',
      'Azure Integration Services',
      'Logic Apps',
      'API Management',
    ],
  },
  {
    title: 'Data & Integration',
    icon: 'data',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'NoSQL',
      'Databricks',
      'Apache Kafka',
      'Apache NiFi (custom processors, NAR)',
      'Apache Camel',
      'Smooks',
      'BizTalk Server (2010–2020)',
      'EDI/B2B (Retail & HIPAA)',
    ],
  },
];
