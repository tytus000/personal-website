import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DottedLeader from "@/components/DottedLeader";
import { siteConfig } from "@/data/content";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <Header />
      <hr className="border-border mb-8" />

      <section>
        <h2 className="text-sm font-bold tracking-[0.15em] text-white mb-4">
          CONTACT
        </h2>

        <div className="space-y-1">
          <DottedLeader
            label="EMAIL"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <DottedLeader
            label="LINKEDIN"
            value="linkedin.com/in/plutecki"
            href={siteConfig.social.linkedin}
          />
          <DottedLeader
            label="GITHUB"
            value="github.com/plutecki"
            href={siteConfig.social.github}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
