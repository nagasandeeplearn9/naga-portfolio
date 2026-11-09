import { profile } from '../data/profile';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </p>
        <SocialLinks className="footer__links" />
      </div>
    </footer>
  );
}
