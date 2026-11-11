import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SiteLink from '../components/SiteLink';

export const metadata: Metadata = {
  title: 'About Luke Payne | Software Engineer, Python, TypeScript and Applied AI',
  description: 'Python APIs, TypeScript applications and applied AI projects by Luke Payne.',
  alternates: { canonical: '/about/' },
};

export default function About() {
  return <div className="portfolio-shell"><Navigation /><main id="main-content" className="portfolio-content container py-12">
    <p className="eyebrow">Luke Payne / Software Engineer</p>
    <h1 className="text-5xl mt-6 max-w-3xl">Python, TypeScript and practical AI.</h1>
    <div className="max-w-3xl mt-8 space-y-6 text-lg leading-8 text-[var(--muted)]">
      <p>I build Python APIs and TypeScript applications. My professional background includes SaaS features, scientific software, data pipelines and C++ simulation.</p>
      <p>My applied AI work focuses on using models in products: retrieval, natural-language interfaces and structured tool use. I am interested in what the surrounding software needs to do so that a model’s output is useful and inspectable.</p>
      <p>The <SiteLink href="/projects/llm-tool-calling-lab/">LLM Tool Calling Lab</SiteLink> explores how an LLM can use specialized machine-learning models as tools. The <SiteLink href="/projects/nasa-cmr-agent/">Earth Science Metadata Agent</SiteLink> turns plain-language questions into searches of NASA’s public metadata. Both are independent prototypes with source and limitations available to inspect.</p>
      <p>I also explore learning and agent-system questions in <SiteLink href="/projects/bic/">BiC</SiteLink> and <SiteLink href="/projects/openclaw-evolutionary-lab/">OpenClaw</SiteLink>. These experiments are separate from my professional experience and do not establish general reasoning or production readiness.</p>
      <p>I’m based in Virginia and seeking fully remote software or applied AI engineering roles.</p>
    </div>
    <div className="actions"><SiteLink className="button" href="/projects/">Explore the work →</SiteLink><SiteLink className="text-link" href="/resume/">Resume</SiteLink><SiteLink className="text-link" href="/contact/">Get in touch</SiteLink></div>
  </main><Footer /></div>;
}
