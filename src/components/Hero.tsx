import { profile } from '../data/profile';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { SocialLinks } from './SocialLinks';

export function Hero() {
  const [first, ...rest] = profile.name.split(' ');
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="container hero__grid">
        <Reveal>
          <p className="hero__status">
            <span className="hero__dot" aria-hidden="true" />
            Building production GenAI on Azure
          </p>
          <h1 className="hero__name">
            {first} <span className="gradient-text">{rest.join(' ')}</span>
          </h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__pitch">{profile.pitch}</p>
          <div className="hero__meta">
            <span>
              <Icon name="pin" /> {profile.location}
            </span>
            <span>
              <Icon name="briefcase" /> 9+ years · Python · C# · Java · .NET
            </span>
          </div>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View projects <Icon name="arrow" />
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn" download>
                <Icon name="download" /> Resume
              </a>
            )}
            <SocialLinks className="hero__socials" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="terminal" role="img" aria-label="Code sketch of a retrieval-augmented generation pipeline">
            <div className="terminal__bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>rag_pipeline.py</span>
            </div>
            <div className="terminal__body" aria-hidden="true">
              <span className="t-c"># requirements → grounded XSLT draft</span>
              {'\n'}
              <span className="t-k">retriever</span> = vector_store.<span className="t-f">as_retriever</span>(k=<span className="t-s">5</span>)
              {'\n'}
              <span className="t-k">llm</span> = <span className="t-f">AzureChatOpenAI</span>(deployment=<span className="t-s">"gpt"</span>)
              {'\n\n'}
              <span className="t-k">chain</span> = (
              {'\n'}  {'{'}<span className="t-s">"context"</span>: retriever,
              {'\n'}   <span className="t-s">"spec"</span>: <span className="t-f">RunnablePassthrough</span>(){'}'}
              {'\n'}  | canonical_prompt
              {'\n'}  | llm
              {'\n'}  | <span className="t-f">XsltParser</span>()
              {'\n'})
              {'\n\n'}
              <span className="t-k">draft</span> = chain.<span className="t-f">invoke</span>(client_spec)
              {'\n'}
              <span className="t-c">✓ draft ready for engineer review</span> <span className="t-cursor" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
