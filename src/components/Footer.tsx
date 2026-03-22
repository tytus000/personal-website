import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 pb-12 text-muted text-sm text-center">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.name} ·{" "}
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-white no-underline"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-white no-underline"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
