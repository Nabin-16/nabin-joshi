export function RobotArm() {
  return (
    <svg className="arm" viewBox="0 0 220 220" aria-hidden="true">
      <circle cx="55" cy="175" r="7" fill="currentColor" />
      <path
        d="M55 175 L105 85 L178 125"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="105"
        cy="85"
        r="5"
        fill="var(--bg)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="178"
        cy="125"
        r="5"
        fill="var(--bg)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M178 125 l18 -8 M178 125 l15 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M35 190 H195"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 5"
      />
    </svg>
  );
}
