import { profile } from '../data/profile';
import { Icon } from './Icon';

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      {profile.socials.map((s) => (
        <a
          key={s.label}
          className="icon-btn"
          href={s.url}
          aria-label={s.label}
          title={s.label}
          {...(s.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <Icon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
