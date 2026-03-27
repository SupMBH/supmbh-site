import { useFadeIn } from '../hooks/useScrolled';

/**
 * Section wrapper that fades in when it enters the viewport.
 */
export default function FadeSection({ children, className = '', id, style }) {
  const ref = useFadeIn();

  return (
    <section ref={ref} className={`fade-in ${className}`} id={id} style={style}>
      {children}
    </section>
  );
}
