import Header from "@/components/Header";
import DottedLeader from "@/components/DottedLeader";
import Footer from "@/components/Footer";
import { bio, roles } from "@/data/content";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <Header />

      {/* Bio */}
      <section className="mb-10">
        {bio.map((paragraph, i) => (
          <p key={i} className={i < bio.length - 1 ? "mb-5" : ""}>
            {paragraph}
          </p>
        ))}
      </section>

      {/* Roles */}
      <hr className="border-border mb-8" />
      <section className="mb-10">
        <h2 className="text-sm font-bold tracking-[0.15em] text-white mb-4">
          ROLES
        </h2>
        <div className="space-y-1">
          {roles.map((role) => (
            <DottedLeader
              key={role.label}
              label={role.label}
              value={role.value}
              href={role.href}
              isInternal={role.isInternal}
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <hr className="border-border mb-8" />
      <section>
        <h2 className="text-sm font-bold tracking-[0.15em] text-white mb-4">
          CONTACT
        </h2>
        <DottedLeader
          label="GET IN TOUCH"
          value="Contact"
          href="/contact"
          isInternal
        />
      </section>

      <Footer />
    </main>
  );
}
