import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { sections } from './data/sections';

export default function App() {
  const enabled = sections.filter((s) => s.enabled);
  const navItems = enabled.filter((s) => !s.hideInNav).map(({ id, label }) => ({ id, label }));

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="bg-decor" aria-hidden="true" />
      <div className="bg-orb bg-orb--a" aria-hidden="true" />
      <div className="bg-orb bg-orb--b" aria-hidden="true" />
      <Nav items={navItems} />
      <main id="main">
        {enabled.map(({ id, component: Component }) => (
          <Component key={id} />
        ))}
      </main>
      <Footer />
    </>
  );
}
