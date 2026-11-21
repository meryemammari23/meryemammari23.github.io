import { useReveal } from '../hooks/useReveal';

export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={className} {...rest}>{children}</Tag>;
}

export function SectionHead({ eyebrow, title, children }) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="font-mono text-[13px] font-medium text-accent">{eyebrow}</p>
        <h2 className="mt-2 font-display text-[clamp(30px,4vw,42px)] font-bold">{title}</h2>
      </div>
      {children}
    </Reveal>
  );
}

export function Chip({ children, small }) {
  return (
    <span className={`rounded-full border border-line bg-bg ${small ? 'px-2.5 py-0.5 text-xs' : 'px-2.5 py-1 text-[13px]'} font-medium text-ink`}>
      {children}
    </span>
  );
}
