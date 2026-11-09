import type { Project } from '../types';

// Case studies drawn from professional work. `slug` is reserved for future per-project pages.
// TODO: add measurable impact (e.g. "cut mapping time by X%", "N invoices/month") where you can.
export const projects: Project[] = [
  {
    slug: 'rag-xslt-mapping-assistant',
    title: 'RAG-Powered XSLT Mapping Assistant',
    tagline: 'Turns client integration requirements into draft XSLT in the canonical format.',
    category: 'Generative AI',
    featured: true,
    problem:
      'Onboarding a new client meant reading their EDI and integration requirements and hand-writing XSLT maps into the canonical format, which was slow, repetitive work for experienced engineers.',
    approach: [
      'Indexed existing canonical mappings, specs, and reference material as vector embeddings in Azure AI Foundry.',
      'Built a LangChain retrieval pipeline that grounds Azure OpenAI on the most relevant mappings for each new requirement.',
      'Prompted the model to produce XSLT that follows the team’s canonical conventions, ready for engineer review.',
    ],
    impact: [
      'Cuts manual mapping work; engineers review and refine a draft instead of starting from scratch.',
      'Gives consistent output that follows the canonical format across clients.',
    ],
    stack: ['Python', 'LangChain', 'Azure OpenAI', 'Azure AI Foundry', 'Vector Embeddings', 'XSLT', 'Prompt Engineering'],
  },
  {
    slug: 'invoice-extraction',
    title: 'Intelligent Invoice Extraction',
    tagline: 'Unstructured invoices in, validated structured data out.',
    category: 'AI / Document Processing',
    featured: true,
    problem:
      'Invoices arrive in many layouts and formats, and downstream integrations need clean, validated fields before they can process them.',
    approach: [
      'Used Azure Document Intelligence to extract header and line-item fields from unstructured invoices.',
      'Added validation rules so only consistent, complete data moves downstream.',
      'Mapped results into the integration platform’s structured format for downstream consumers.',
    ],
    impact: [
      'Replaces manual keying with automated, validated extraction.',
      'Feeds downstream integrations directly with structured invoice data.',
    ],
    stack: ['Azure Document Intelligence', 'Python', 'C#', '.NET', 'NLP', 'REST APIs'],
  },
  {
    slug: 'biztalk-to-azure-modernization',
    title: 'BizTalk → Azure Microservices Modernization',
    tagline: 'Rebuilding a sunsetting integration platform as cloud-native services.',
    category: 'Modernization',
    featured: true,
    problem:
      'The integration platform ran on BizTalk Server, which is being sunset. Large orchestrations carried years of trading-partner logic that had to keep running throughout the move.',
    approach: [
      'Decomposed large BizTalk orchestrations into microservices, mostly .NET with Java and Python where they fit better.',
      'Introduced Kafka for async messaging, NiFi for data flows, and Camel for integration routes, alongside Azure Integration Services (Logic Apps, API Management).',
      'Replaced BizTalk maps with Smooks and XSLT conversions (EDI → canonical → custom).',
      'Secured APIs with Microsoft Entra ID and RBAC; shipped through Docker and CI/CD pipelines.',
    ],
    impact: [
      'Moves the platform off end-of-life technology without interrupting trading-partner flows.',
      'Gives smaller, independently deployable services in place of monolithic orchestrations.',
    ],
    stack: ['.NET', 'C#', 'Java', 'Python', 'Azure', 'Kafka', 'NiFi', 'Camel', 'Smooks', 'Docker', 'CI/CD', 'Entra ID'],
  },
  {
    slug: 'nifi-smooks-nar',
    title: 'Custom NiFi Processors & Smooks NAR',
    tagline: 'Bringing Smooks transformations natively into Apache NiFi flows.',
    category: 'Integration',
    featured: true,
    problem:
      'EDI and canonical transformations built in Smooks needed to run inside NiFi data flows without extra services or hops.',
    approach: [
      'Developed custom NiFi processors in Java and packaged them as NAR files.',
      'Built a Smooks NAR that executes Smooks transformations directly within a NiFi flow.',
    ],
    impact: ['Runs EDI transformations inside the data flow itself, simplifying the pipeline.'],
    stack: ['Java', 'Apache NiFi', 'NAR', 'Smooks', 'EDI'],
  },
  {
    slug: 'buyer-supplier-portals',
    title: 'Buyer & Supplier Portals',
    tagline: 'React front ends on top of the new microservices platform.',
    category: 'Full Stack',
    featured: true,
    problem: 'Buyers and suppliers needed modern web portals backed by the new microservices instead of legacy systems.',
    approach: [
      'Developed the React front end for both portals.',
      'Connected the portals to .NET microservices through REST APIs secured with Entra ID and role-based access.',
    ],
    impact: ['Gives buyers and suppliers a modern, API-driven experience on the new platform.'],
    stack: ['React', 'JavaScript', '.NET', 'REST APIs', 'Microsoft Entra ID', 'RBAC'],
  },
];
