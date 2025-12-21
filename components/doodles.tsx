export function HandDrawnArrow({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 25 Q30 15 50 25 Q70 35 85 25" />
      <path d="M75 20 L85 25 L75 30" />
    </svg>
  )
}

export function HandDrawnStar({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={`fill-current ${className}`}
      {...props}
    >
      <path d="M25 5 L28 18 L42 18 L32 28 L35 42 L25 35 L15 42 L18 28 L8 18 L22 18 Z" />
    </svg>
  )
}

export function HandDrawnHeart({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={`fill-current ${className}`}
      {...props}
    >
      <path d="M25 40 C15 30 5 20 15 10 C20 5 25 10 25 15 C25 10 30 5 35 10 C45 20 35 30 25 40 Z" />
    </svg>
  )
}

export function HandDrawnCircle({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    >
      <path d="M20 50 Q30 20 50 25 Q70 30 80 50 Q75 70 50 75 Q25 80 20 50" />
    </svg>
  )
}

export function HandDrawnUnderline({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    >
      <path d="M10 15 Q50 5 100 12 Q150 18 190 10" />
    </svg>
  )
}

export function HandDrawnLightbulb({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 50 70"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M25 10 C35 10 40 20 35 30 L30 40 L20 40 L15 30 C10 20 15 10 25 10" />
      <path d="M20 45 L30 45" />
      <path d="M22 50 L28 50" />
      <path d="M23 55 L27 55" />
      <circle cx="25" cy="8" r="2" className="fill-current" />
    </svg>
  )
}

export function HandDrawnCode({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 10 L5 20 L15 30" />
      <path d="M45 10 L55 20 L45 30" />
      <path d="M35 8 L25 32" />
    </svg>
  )
}

export function HandDrawnBook({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 50 60"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 10 L10 50 L40 50 L40 10 L35 15 L30 10 L25 15 L20 10 L15 15 L10 10" />
      <path d="M15 20 L35 20" />
      <path d="M15 25 L35 25" />
      <path d="M15 30 L30 30" />
    </svg>
  )
}

export function HandDrawnCertificate({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 60 50"
      className={`fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="5" y="5" width="40" height="30" rx="2" />
      <path d="M15 15 L35 15" />
      <path d="M15 20 L35 20" />
      <path d="M15 25 L25 25" />
      <circle cx="45" cy="35" r="8" className="fill-current opacity-20" />
      <path d="M40 30 L50 40" />
      <path d="M50 30 L40 40" />
    </svg>
  )
}