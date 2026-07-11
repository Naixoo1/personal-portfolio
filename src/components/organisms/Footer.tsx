import Link from "next/link";
import { Globe, ExternalLink, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Globe,
  linkedin: ExternalLink,
  twitter: Globe,
};

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="gradient-text">AF</span>
            </Link>
            <p className="text-sm text-foreground-muted leading-relaxed max-w-xs">
              Precision engineering for intelligent systems.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-surface border border-surface-border
                      flex items-center justify-center text-foreground-muted
                      hover:text-accent hover:border-accent/30 hover:bg-accent-soft
                      transition-all duration-200"
                    aria-label={link.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Explore
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Case Studies", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground-muted hover:text-foreground
                    transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-foreground-muted
                  hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <p className="text-sm text-foreground-muted">
                {siteConfig.location}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm text-accent
                  hover:text-accent-hover font-medium transition-colors mt-2"
              >
                Start a conversation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-surface-border space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground-subtle">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/legal"
                className="text-xs text-foreground-subtle hover:text-foreground-muted transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal"
                className="text-xs text-foreground-subtle hover:text-foreground-muted transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
          <p className="text-xs text-foreground-subtle text-center sm:text-left">
            All project metrics represent verified production data from client engagements.
          </p>
        </div>
      </div>
    </footer>
  );
}
