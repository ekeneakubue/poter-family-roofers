import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function icon(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function RoofMark(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
      <rect width="40" height="40" rx="8" className="fill-copper" />
      <path
        d="M8 22.5 20 11l12 11.5"
        className="stroke-white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21.5v8h16v-8"
        className="stroke-white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 29.5v-5h5v5"
        className="stroke-white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M6.5 4.5h3l1.4 3.4-1.8 1.1a13 13 0 0 0 6.9 6.9l1.1-1.8 3.4 1.4v3A2 2 0 0 1 18.5 20 14 14 0 0 1 4 5.5a2 2 0 0 1 2.5-1Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 3.5 19 6v6.2c0 4.4-2.9 7.6-7 8.8-4.1-1.2-7-4.4-7-8.8V6l7-2.5Z" />
      <path d="m8.8 12 2.2 2.2 4.4-4.6" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="m12 3.2 2.4 5.1 5.6.7-4.1 3.8 1.1 5.5L12 15.7 7 18.3l1.1-5.5-4.1-3.8 5.6-.7L12 3.2Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M14.5 9H17V6h-2.5C12.6 6 11 7.7 11 9.8V11H9v3h2v7h3v-7h2.3l.7-3H14v-1.1c0-.6.3-.9.5-.9Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M21.6 12.23c0-.74-.07-1.45-.19-2.13H12v4.03h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.99-4.3 2.99-7.42Z"
      />
      <path
        fill="currentColor"
        d="M12 22c2.7 0 4.97-.9 6.63-2.35l-3.23-2.5c-.9.6-2.05.96-3.4.96-2.61 0-4.82-1.76-5.61-4.13H3.06v2.58A10 10 0 0 0 12 22Z"
        opacity=".85"
      />
      <path
        fill="currentColor"
        d="M6.39 13.98A6 6 0 0 1 6.07 12c0-.69.12-1.35.32-1.98V7.44H3.06A10 10 0 0 0 2 12c0 1.61.39 3.13 1.06 4.56l3.33-2.58Z"
        opacity=".7"
      />
      <path
        fill="currentColor"
        d="M12 5.89c1.47 0 2.79.5 3.82 1.5l2.86-2.86C16.96 2.89 14.7 2 12 2A10 10 0 0 0 3.06 7.44l3.33 2.58C7.18 7.65 9.39 5.89 12 5.89Z"
        opacity=".55"
      />
    </svg>
  );
}

const servicePaths: Record<string, string> = {
  "Roof Repair": "M3 13 12 4l9 9M6 11.5V20h12v-8.5M10 20v-5h4v5",
  "Roof Replacement": "M3 12 12 4l9 8M5 11v9h14v-9M9 20v-4h6v4M8 8.5l4-3.5 4 3.5",
  "Storm Damage Repair":
    "M7 15a5 5 0 0 1 1-9.9A6 6 0 0 1 19 9h.5a3.5 3.5 0 1 1 0 7H7Zm5 1-1.5 5h2L11 23",
  "Emergency Roof Repair":
    "M12 3.5 19 20H5L12 3.5ZM12 10v4.5M12 17.2h.01",
  "Leak Detection & Repair":
    "M12 3.8c3.2 3.5 5.2 6.3 5.2 8.8A5.2 5.2 0 1 1 6.8 12.6c0-2.5 2-5.3 5.2-8.8Z",
  "Shingle Replacement":
    "M4 10h5v4H4zm5.5 0h5v4h-5zM15 10h5v4h-5zM6.5 14.5h5v4h-5zm5.5 0h5v4h-5z",
  "Flat Roof Repair": "M3 8h18v4H3zm2 4v8h14v-8M8 16h8",
  "Roof Inspection":
    "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm6.5-1.5 3 3M9 11.5 10.8 13l3.7-4",
  "Gutter Repair": "M4 8h16v3H4zm1 3v5l2 3h10l2-3v-5M8 19v2m8-2v2",
  "Skylight Repair":
    "M8 5h8l3 5-7 9-7-9 3-5Zm0 5h8M9.5 8h5",
  "Soffit & Fascia": "M3 10 12 4l9 6v10H3V10Zm3 10v-5h5v5m1-10h8",
  "Flashing Repair": "M4 16 12 5l8 11H4Zm4-2h8M7 19h10",
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={servicePaths[name] ?? servicePaths["Roof Repair"]} />
    </svg>
  );
}

const reasonPaths = [
  "M16 18v-1.2A3.8 3.8 0 0 0 12.2 13H7.8A3.8 3.8 0 0 0 4 16.8V18m12.5-8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm5.2 8.5v-.9A3 3 0 0 0 18 14.8h-1M18.2 7.6a2.4 2.4 0 1 1-3.2 3.3",
  "M8.5 16.5 6 20h12l-3-4.5M4 10.5 12 4l8 6.5V20H4v-9.5Zm5 2.5 2.2 2.2L15.5 10",
  "M13 3.5 6.5 13H12l-.8 7.5L18 11h-5l0-7.5Z",
  "M5 12h14M5 7h9M5 17h7M16 15l3 3 3-5",
  "M12 3.5 19 6v6.2c0 4.4-2.9 7.6-7 8.8-4.1-1.2-7-4.4-7-8.8V6l7-2.5Zm-3.2 8.5 2.2 2.2 4.4-4.6",
  "M12 20s-7-4.2-7-9.2C5 7.6 8 5 12 5s7 2.6 7 5.8C19 15.8 12 20 12 20Z",
  "M4 19V8.5L12 4l8 4.5V19M8 19v-6h8v6",
];

export function ReasonIcon({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={reasonPaths[index] ?? reasonPaths[0]} />
    </svg>
  );
}

const materialPaths = [
  "M4 8h5v5H4zm5.5 0h5v5h-5zM15 8h5v5h-5zM6.5 13.5h5V19h-5zm5.5 0h5V19h-5z",
  "M4 18 8 6h3l4 12M6.2 14h6.6M14 18l3-8h3l3 8",
  "M3 16 12 6l9 10M5 16v3h14v-3M8 11.5h8",
  "M3 7h18v5H3zm2 5v8h14v-8",
  "M12 3.5c3.4 3.8 5.5 6.8 5.5 9.4A5.5 5.5 0 1 1 6.5 12.9c0-2.6 2.1-5.6 5.5-9.4ZM8 20h8",
  "M4 14h3l2-5 3 10 2-6 2 4h4M4 7h16",
];

export function MaterialIcon({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={materialPaths[index] ?? materialPaths[0]} />
    </svg>
  );
}
