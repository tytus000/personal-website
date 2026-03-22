export const siteConfig = {
  name: "Krzysztof Plutecki",
  title: "KRZYSZTOF PLUTECKI",
  role: "Digital Transformation & AI",
  email: "hello@plutecki.dev",
  location: "Poland",
  social: {
    linkedin: "https://linkedin.com/in/plutecki",
    github: "https://github.com/plutecki",
  },
};

export const bio = [
  "Hey, I'm Krzysztof. I've been building, designing, and transforming how organizations work with technology since the early days of the web. Currently focused on AI implementation and digital transformation — helping companies adopt intelligent systems that drive real business outcomes.",
  "I specialize in AI strategy, LLM-powered solutions, and enterprise architecture. My areas of interest are AI agents, automation, cloud infrastructure, and building systems that fundamentally change how teams operate.",
];

export interface Role {
  label: string;
  value: string;
  href?: string;
  isInternal?: boolean;
}

export const roles: Role[] = [
  {
    label: "AI SOLUTIONS ARCHITECT",
    value: "Enterprise AI",
    href: "https://linkedin.com/in/plutecki",
  },
  {
    label: "BUILDER",
    value: "AI Systems",
  },
  {
    label: "STRATEGIST",
    value: "Digital Transformation",
  },
  {
    label: "DEVELOPER",
    value: "Full-Stack",
    href: "https://github.com/plutecki",
  },
  {
    label: "PRINCIPLES",
    value: "Principles",
    href: "/principles",
    isInternal: true,
  },
];

export interface Principle {
  text: string;
}

export const principles: Principle[] = [
  {
    text: "Unmitigated daily discipline in all things. It's the one thing that will make or break your life.",
  },
  {
    text: "Ship fast, iterate faster. Perfect is the enemy of done.",
  },
  {
    text: "Your habits make you. Stick to simple rules. Days with 0 output are the killers.",
  },
  {
    text: "Build systems, not goals. Systems compound; goals are one-time events.",
  },
  {
    text: "Never give up. Never ever. Stay in the game.",
  },
  {
    text: "All the real benefits in life come from compound interest. Understand compounding.",
  },
  {
    text: "Knowledge is the compound interest of curiosity.",
  },
  {
    text: "Be endlessly curious. Hang out on the edges.",
  },
  {
    text: "Conduct yourself with quiet confidence.",
  },
  {
    text: "Be an infinite learner. Reading (learning) is the ultimate meta-skill. Think about spending on books as an investment.",
  },
  {
    text: "Understand 80/20 rule.",
  },
  {
    text: "Over-prepare. Never be late. If you are on time, you are late.",
  },
  {
    text: "Underpromise, overdeliver.",
  },
  {
    text: "Everything has been done before. The scenes change, but the behaviors and outcomes don't.",
  },
  {
    text: "Understand multi-discipline learning.",
  },
  {
    text: "Small details build the big picture. Think in first principles.",
  },
  {
    text: "Love and focus on family.",
  },
  {
    text: "Make room for error. Be comfortable being wrong.",
  },
  {
    text: '\u201CThe best view comes after the hardest climb.\u201D',
  },
  {
    text: "Encourage intellectual debate.",
  },
  {
    text: "Have strong opinions, loosely held. Train yourself in mental models.",
  },
];

export const navLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/plutecki" },
  { label: "GitHub", href: "https://github.com/plutecki" },
  { label: "Principles", href: "/principles" },
  { label: "Contact", href: "/contact" },
];
