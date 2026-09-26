import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="section-pad mx-auto w-full max-w-3xl">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-navy uppercase">
        Privacy Policy
      </h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-muted">
        <p>
          {site.name} uses the contact information you send through this website
          to respond to estimate requests, schedule inspections, and follow up
          on roofing work.
        </p>
        <p>
          We do not sell your information. Form submissions stay with our team
          and any tools we use to manage jobs. Phone and email listed on this
          site are for customer communication only.
        </p>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={site.emailHref} className="text-copper">
            {site.email}
          </a>{" "}
          or {site.phone}.
        </p>
      </div>
    </main>
  );
}
