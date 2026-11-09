import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';

interface NavProps {
  items: { id: string; label: string }[];
}

export function Nav({ items }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(items.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? 'is-scrolled' : ''}`}>
      <nav className="container nav__inner" aria-label="Primary">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">{profile.initials}</span>
          <span>{profile.name.split(' ')[0]}</span>
        </a>

        <ul id="nav-menu" className={`nav__links ${open ? 'is-open' : ''}`}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav__link ${active === item.id ? 'is-active' : ''}`}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn nav__toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  );
}
