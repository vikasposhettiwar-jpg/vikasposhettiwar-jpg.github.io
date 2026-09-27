type DecorProps = {
  className?: string;
};

export function Squiggle({ className = "" }: DecorProps) {
  return (
    <svg
      viewBox="0 0 220 24"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M2 16C24 4 44 4 66 16s44 12 66 0 44-12 66 0 20 6 20 6"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LoopSquiggle({ className = "" }: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M4 44c14-30 30-34 34-18 4 17-12 24-16 12C16 22 40 6 62 10c20 4 26 22 18 30-6 6-18 4-16-6 3-14 24-18 46-8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DotField({ className = "" }: DecorProps) {
  return <span aria-hidden="true" className={`dots-primary block ${className}`} />;
}

export function RingShape({ className = "" }: DecorProps) {
  return (
    <span
      aria-hidden="true"
      className={`block rounded-full border-[3px] border-current ${className}`}
    />
  );
}

export function TriangleShape({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 60 54" aria-hidden="true" className={className} fill="currentColor">
      <path d="M30 2 58 50H2z" />
    </svg>
  );
}

export function StarBurst({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} fill="currentColor">
      <path d="M24 0c1.8 12.4 9.6 20.2 24 24-14.4 3.8-22.2 11.6-24 24-1.8-12.4-9.6-20.2-24-24 14.4-3.8 22.2-11.6 24-24Z" />
    </svg>
  );
}
