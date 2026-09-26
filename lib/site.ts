/**
 * Public Richmond listings. Confirm phone, address, hours, and email
 * with the business before putting this site into production.
 */
export const site = {
  name: "Porter Family Roofers LLC",
  shortName: "Porter Family Roofers",
  phone: "(470) 664-6500",
  phoneHref: "tel:+14706646500",
  email: "info@porterfamilyroofers.com",
  emailHref: "mailto:info@porterfamilyroofers.com",
  address: {
    line1: "18 S Thompson St",
    city: "Richmond",
    state: "VA",
    zip: "23221",
  },
  addressLine: "18 S Thompson St, Richmond, VA 23221",
  mapsEmbed:
    "https://maps.google.com/maps?q=18+S+Thompson+St,+Richmond,+VA+23221&z=15&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=18+S+Thompson+St,+Richmond,+VA+23221",
  reviewsLink:
    "https://www.google.com/search?q=Porter+Family+Roofers+LLC+Richmond+VA+reviews",
  hours: [
    { label: "Monday – Saturday", value: "7:30 AM – 7:00 PM" },
    { label: "Sunday", value: "Emergency calls only" },
    { label: "Emergency repair", value: "Available 24/7" },
  ],
  serviceRadius: "About 55 miles around Richmond",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Our Work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Roof Repair",
    description: "Fix leaks, worn shingles, and everyday wear before they become bigger problems.",
  },
  {
    title: "Roof Replacement",
    description: "Full tear-off and install when repair is no longer the smarter option.",
  },
  {
    title: "Storm Damage Repair",
    description: "Wind, hail, and fallen-limb damage assessed and restored quickly.",
  },
  {
    title: "Emergency Roof Repair",
    description: "Same-day and after-hours help when water is already coming in.",
  },
  {
    title: "Leak Detection & Repair",
    description: "We find the source, not just the stain, and seal it the right way.",
  },
  {
    title: "Shingle Replacement",
    description: "Missing, cracked, or curling shingles replaced to match your roof.",
  },
  {
    title: "Flat Roof Repair",
    description: "Ponding water, seams, and membrane issues on low-slope roofs.",
  },
  {
    title: "Roof Inspection",
    description: "A clear report on condition, risks, and what actually needs work.",
  },
  {
    title: "Gutter Repair",
    description: "Sagging lines, leaks, and poor drainage that put your fascia at risk.",
  },
  {
    title: "Skylight Repair",
    description: "Failed seals, flashing, and leaks around existing skylights.",
  },
  {
    title: "Soffit & Fascia",
    description: "Rot, pests, and ventilation issues along the roof edge.",
  },
  {
    title: "Flashing Repair",
    description: "Valleys, chimneys, and wall flashing — the spots leaks love most.",
  },
] as const;

export const reasons = [
  {
    title: "Experienced roofing team",
    description: "Residential roofs across Richmond, not a rotating crew of strangers.",
  },
  {
    title: "Quality workmanship",
    description: "Clean installs, tight flashing, and details that last through Virginia weather.",
  },
  {
    title: "Fast response",
    description: "Same-day or next-day repair when your home cannot wait.",
  },
  {
    title: "Transparent communication",
    description: "Plain-language findings, photos, and a proposal you can actually follow.",
  },
  {
    title: "Licensed, bonded, insured",
    description: "The coverage homeowners should always ask for before anyone climbs on the roof.",
  },
  {
    title: "Customer-focused service",
    description: "We treat your home like it is ours — property protected, mess contained.",
  },
  {
    title: "Residential roofing expertise",
    description: "Shingles, flat roofs, leaks, and storm work for houses, not high-rises.",
  },
] as const;

export const emergencies = [
  "Active roof leaks",
  "Storm damage",
  "Missing shingles",
  "Fallen branches",
  "Wind damage",
  "Water intrusion",
] as const;

export const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Tell us about your roofing problem.",
  },
  {
    number: "02",
    title: "Roof Inspection",
    description: "We assess the condition of your roof.",
  },
  {
    number: "03",
    title: "Get Your Estimate",
    description: "Receive a clear project proposal.",
  },
  {
    number: "04",
    title: "We Fix Your Roof",
    description: "Our team completes the work.",
  },
] as const;

export const reviews = [
  {
    name: "Melissa H.",
    location: "The Fan, Richmond",
    text: "They found the leak the first visit and had us dry the same day. Honest about what needed repair versus a full replacement.",
  },
  {
    name: "James R.",
    location: "Midlothian",
    text: "Storm took a section of shingles off the back of the house. Porter Family showed up fast, walked us through the photos, and the roof looks new.",
  },
  {
    name: "Andrea P.",
    location: "Henrico",
    text: "Clear estimate, no surprise add-ons, and they treated the property carefully. This is who we will call next time.",
  },
  {
    name: "David L.",
    location: "Glen Allen",
    text: "We needed flashing around the chimney before the next rain. They explained the cause, fixed it the next morning, and the stain never came back.",
  },
  {
    name: "Karen S.",
    location: "Mechanicsville",
    text: "The crew was respectful of the yard and finished the shingle replacement on schedule. The written estimate matched the final bill.",
  },
  {
    name: "Robert T.",
    location: "Short Pump",
    text: "Called after wind pulled shingles off the garage. Same-day tarp, then a clean repair. I would use Porter Family again.",
  },
] as const;

export const projects = [
  {
    title: "Full shingle replacement",
    location: "The Fan",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Storm damage restore",
    location: "Midlothian",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Leak repair & flashing",
    location: "Henrico",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Architectural shingles",
    location: "Glen Allen",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const materials = [
  {
    title: "Asphalt shingles",
    description: "Reliable, cost-smart protection for most Richmond homes.",
  },
  {
    title: "Architectural shingles",
    description: "Thicker profile, stronger curb appeal, longer service life.",
  },
  {
    title: "Metal roofing",
    description: "Stand up to wind, heat, and decades of weather.",
  },
  {
    title: "Flat roofing",
    description: "Membranes and coatings built for low-slope drainage.",
  },
  {
    title: "Waterproofing",
    description: "Underlayment and sealing where water tries to get in.",
  },
  {
    title: "Ventilation",
    description: "Attic airflow that protects shingles and lowers heat.",
  },
] as const;

export const faqs = [
  {
    question: "How much does roof repair cost?",
    answer:
      "Most repairs depend on the source of the leak, the number of damaged shingles, and access. After a free inspection we give you a written range — small leak repairs are often a few hundred dollars, while larger storm work is scoped before we start.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "A typical Richmond home can be torn off and replaced in one to three days, weather permitting. We confirm the schedule after we measure the roof and check the forecast.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Inspections and written estimates are free for residential roofs in our service area. There is no obligation to book the work.",
  },
  {
    question: "Do you repair storm damage?",
    answer:
      "Yes. We handle wind, hail, fallen branches, and missing shingles. We document the damage so you have a clear record if you are working with insurance.",
  },
  {
    question: "How do I know if I need a new roof?",
    answer:
      "Widespread granule loss, curling shingles, repeated leaks, sagging decks, or a roof older than its rated life are common signs. We will tell you if a targeted repair is still the better spend.",
  },
  {
    question: "Do you offer emergency roofing?",
    answer:
      "Yes. If water is coming in, shingles are missing, or a storm just hit, call us. We prioritize active leaks and can often be there the same day.",
  },
  {
    question: "How long does a roof normally last?",
    answer:
      "Asphalt shingles on a well-ventilated Richmond roof often last 15–25 years. Architectural and metal systems can last longer. Storms, trees, and poor flashing can shorten that timeline.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Porter Family Roofers LLC is licensed, bonded, and insured. We can provide proof of coverage before work begins.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Richmond and typically work about 55 miles out — including Henrico, Chesterfield, Midlothian, Glen Allen, Mechanicsville, Short Pump, Bon Air, and nearby neighborhoods.",
  },
] as const;

export const serviceAreas = [
  "Richmond",
  "Henrico",
  "Chesterfield",
  "Midlothian",
  "Glen Allen",
  "Mechanicsville",
  "Short Pump",
  "Bon Air",
] as const;
