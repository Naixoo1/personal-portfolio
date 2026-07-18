import type { Metadata } from "next";
import { ContactForm } from "@/components/organisms/ContactForm";
import { siteConfig, socialLinks } from "@/lib/data";
import { Mail, MapPin, Clock, Code, Briefcase, Camera, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share your project ideas, hackathon invitations, or design competition details.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Code,
  linkedin: Briefcase,
  instagram: Camera,
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Let&apos;s build{" "}
            <span className="gradient-text">together</span>.
          </h1>
          <p className="text-lg text-foreground-muted max-w-xl mx-auto">
            Share your project ideas, hackathon invites, or collaboration details.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-surface-border bg-surface p-8">
              <ContactForm variant="full" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Direct Channels */}
            <div className="rounded-2xl border border-surface-border bg-surface p-8 space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-foreground-muted hover:text-accent
                    transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center
                    justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">{siteConfig.email}</span>
                </a>

                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon] || Mail;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground-muted hover:text-accent
                        transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center
                        justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{link.name}</span>
                        <span className="text-xs text-foreground-subtle">
                          {link.name === "GitHub"
                            ? "Explore open-source work"
                            : link.name === "LinkedIn"
                              ? "View professional profile"
                              : link.name === "Instagram"
                                ? "Follow creative updates"
                                : "Follow updates"}
                        </span>
                      </div>
                    </a>
                  );
                })}

                <a
                  href="/resume.pdf"
                  className="flex items-center gap-3 text-foreground-muted hover:text-accent
                    transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center
                    justify-center group-hover:bg-accent/20 transition-colors">
                    <FileText className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">Download Resume</span>
                </a>
              </div>
            </div>

            {/* Current Availability */}
            <div className="rounded-2xl border border-surface-border bg-surface p-8 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Current Availability
              </h3>

              <div className="flex items-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full ${
                    siteConfig.available
                      ? "bg-success animate-pulse"
                      : "bg-foreground-subtle"
                  }`}
                />
                <span className="text-sm text-foreground-muted">
                  {siteConfig.available
                    ? "Accepting new engagements"
                    : "Currently engaged"}
                </span>
              </div>

              <div className="space-y-2 text-sm text-foreground-muted">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-foreground-subtle" />
                  {siteConfig.location}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-foreground-subtle" />
                  {siteConfig.timezone}
                </p>
              </div>

              <p className="text-sm text-foreground-subtle">
                Typical response: within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
