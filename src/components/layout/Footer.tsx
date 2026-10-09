import Link from "next/link";
import SageLogo from "@/components/ui/SageLogo";
import { founders } from "@/lib/founders";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Watch the demo", href: "/demo" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ for members", href: "/#faq" },
    { label: "FAQ for creators", href: "/become-a-coach/faq" },
    { label: "Launch on Sage", href: "/become-a-coach" },
    { label: "How coaches monetize", href: "/become-a-coach/monetize" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/support" },
    { label: "Book a call", href: "/book" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "GDPR", href: "/privacy#gdpr" },
    { label: "Creator Agreement", href: "/creator-agreement" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="md:col-span-2">
            <SageLogo variant="light" size="md" />
            <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-xs">
              Sage Academy — track what you eat and what you burn, and work with
              a real coach in the same app. By Friday Technologies SRL.
            </p>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-wider text-white/35">
              Founders
            </p>
            <div className="mt-3 flex flex-wrap gap-x-7 gap-y-3">
              {founders.map((f) => (
                <a
                  key={f.name}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5"
                >
                  <img
                    src={f.photo}
                    alt={f.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15 transition group-hover:ring-white/40"
                  />
                  <span className="text-sm text-white/55 transition group-hover:text-white">
                    {f.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-semibold text-sm text-white mb-4">{category}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={`${category}-${l.label}`}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">
            © 2026 Friday Technologies SRL. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-white/35 hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-white/35 hover:text-white/70 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-xs text-white/35 hover:text-white/70 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
