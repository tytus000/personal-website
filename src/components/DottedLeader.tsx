import Link from "next/link";

interface DottedLeaderProps {
  label: string;
  value: string;
  href?: string;
  isInternal?: boolean;
}

export default function DottedLeader({
  label,
  value,
  href,
  isInternal,
}: DottedLeaderProps) {
  return (
    <div className="flex items-baseline gap-1 leading-relaxed">
      <span className="whitespace-nowrap">{label}</span>
      <span className="flex-1 overflow-hidden text-muted tracking-[0.3em] leading-none translate-y-[-2px]">
        {" . ".repeat(60)}
      </span>
      {href ? (
        isInternal ? (
          <Link
            href={href}
            className="whitespace-nowrap text-foreground underline underline-offset-3"
          >
            {value}
          </Link>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-foreground underline underline-offset-3"
          >
            {value}
          </a>
        )
      ) : (
        <span className="whitespace-nowrap">{value}</span>
      )}
    </div>
  );
}
