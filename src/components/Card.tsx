import type { CSSProperties, ReactNode } from 'react';
import { tokens } from '../theme/tokens';
import './Card.css';

type CardProps = {
  title: string;
  href: string;
  date: string;
  children?: ReactNode;
};

const Card = ({ title, href, date, children }: CardProps) => {
  const style = { '--card-radius': tokens.radii.md } as CSSProperties;

  return (
    <article className="card" style={style}>
      <div className="card-header">
        <a className="card-title" href={href}>
          {title}
        </a>
        <span className="card-date">{date}</span>
      </div>
      <div className="card-body">{children}</div>
    </article>
  );
};

export default Card;
