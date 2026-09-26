import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <main id="main" className="section-pad mx-auto w-full max-w-3xl">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-navy uppercase">
        Terms of Use
      </h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-muted">
        <p>
          This website describes residential roofing services offered by{" "}
          {site.name}. Estimates, schedules, and project scopes are confirmed in
          writing after an inspection.
        </p>
        <p>
          Photos and service descriptions are for general information. Actual
          work, materials, and pricing depend on the condition of your roof and
          the proposal you approve.
        </p>
        <p>
          Contact {site.phone} or{" "}
          <a href={site.emailHref} className="text-copper">
            {site.email}
          </a>{" "}
          before relying on any listing details for a job.
        </p>
      </div>
    </main>
  );
}
