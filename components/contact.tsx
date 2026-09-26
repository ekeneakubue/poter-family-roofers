import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section-pad scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
          11 — Contact
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-wide text-navy uppercase sm:text-4xl">
          Request your free roof estimate
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Call, write, or send the form. If water is coming in, start with the
          phone.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="rounded-2xl border border-line bg-white p-5 hover:border-copper/40"
              >
                <PhoneIcon className="h-5 w-5 text-copper" />
                <p className="mt-3 text-xs tracking-[0.16em] text-muted uppercase">
                  Phone
                </p>
                <p className="mt-1 font-semibold text-navy">{site.phone}</p>
              </a>
              <a
                href={site.emailHref}
                className="rounded-2xl border border-line bg-white p-5 hover:border-copper/40"
              >
                <MailIcon className="h-5 w-5 text-copper" />
                <p className="mt-3 text-xs tracking-[0.16em] text-muted uppercase">
                  Email
                </p>
                <p className="mt-1 font-semibold text-navy">{site.email}</p>
              </a>
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-line bg-white p-5 hover:border-copper/40"
              >
                <PinIcon className="h-5 w-5 text-copper" />
                <p className="mt-3 text-xs tracking-[0.16em] text-muted uppercase">
                  Address
                </p>
                <p className="mt-1 font-semibold text-navy">{site.addressLine}</p>
              </a>
              <div className="rounded-2xl border border-line bg-white p-5">
                <ClockIcon className="h-5 w-5 text-copper" />
                <p className="mt-3 text-xs tracking-[0.16em] text-muted uppercase">
                  Business hours
                </p>
                <ul className="mt-2 space-y-1 text-sm text-navy">
                  {site.hours.map((row) => (
                    <li key={row.label}>
                      <span className="text-muted">{row.label}:</span> {row.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map to Porter Family Roofers LLC in Richmond, Virginia"
                src={site.mapsEmbed}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
