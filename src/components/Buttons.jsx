const base = 'group inline-flex items-center gap-2 rounded-[10px] border px-[18px] py-3 text-[15px] font-semibold transition-[transform,box-shadow,background-color] hover:-translate-y-px';
const styles = {
  primary: 'border-accent bg-accent text-white shadow-[0_10px_24px_-12px_#1f4fe0] hover:bg-accent-hover',
  dark: 'border-night bg-night text-white hover:bg-night-2',
  outline: 'border-line bg-surface text-ink hover:border-accent hover:text-accent',
  ghostDark: 'border-white/25 bg-transparent text-white hover:border-white/60',
};

export function Button({ variant = 'primary', className = '', href, children, ...rest }) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    const external = /^https?:/.test(href);
    return <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>{children}</a>;
  }
  return <button type="button" className={cls} {...rest}>{children}</button>;
}

export function IconLink({ href, label, children, dark }) {
  const external = /^https?:/.test(href);
  return (
    <a href={href} aria-label={label} title={label} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`grid h-11 w-11 place-items-center rounded-[10px] border transition-[color,border-color,transform] hover:-translate-y-0.5 ${dark ? 'border-white/20 text-white hover:border-white/60' : 'border-line bg-surface text-ink hover:border-accent hover:text-accent'}`}>
      {children}
    </a>
  );
}
