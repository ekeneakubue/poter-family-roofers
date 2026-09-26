"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-copper/30 bg-cream p-8">
        <p className="font-display text-2xl tracking-wide text-navy uppercase">
          Request received
        </p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Thank you. A Porter Family Roofers team member will follow up shortly.
          If this is an active leak, call us now so we can move you to the
          front of the list.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-2xl border border-line bg-cream p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-normal text-ink outline-none focus:border-copper"
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Phone
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-normal text-ink outline-none focus:border-copper"
          />
        </label>
      </div>
      <label className="block text-sm font-semibold text-navy">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-normal text-ink outline-none focus:border-copper"
        />
      </label>
      <label className="block text-sm font-semibold text-navy">
        Service needed
        <select
          name="service"
          defaultValue="Roof Repair"
          className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-normal text-ink outline-none focus:border-copper"
        >
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold text-navy">
        Tell us about the roof
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-sm font-normal text-ink outline-none focus:border-copper"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-copper px-6 py-3.5 text-sm font-semibold tracking-[0.12em] text-white uppercase hover:bg-copper-hover"
      >
        Send Estimate Request
      </button>
    </form>
  );
}
