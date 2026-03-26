import { useEffect, useMemo, useState } from "react";

const testimonials = [
  {
    name: "Local seller",
    city: "Watertown",
    quote: "Fast response, easy pickup process, and way less hassle than trying to sell the car myself.",
  },
  {
    name: "Twin Cities customer",
    city: "Minneapolis",
    quote: "I sent the vehicle info and got a reply fast. The process was simple and straightforward.",
  },
  {
    name: "West metro seller",
    city: "Waconia",
    quote: "Good communication and clear next steps. It was easy to move an unwanted vehicle.",
  },
];

export default function JunkCarSellerWebsite() {
  const serviceCities = [
    "Watertown",
    "Waconia",
    "Delano",
    "Mound",
    "Buffalo",
    "Mayer",
    "Loretto",
    "Maple Plain",
    "Plymouth",
    "Minnetonka",
    "Chaska",
    "Chanhassen",
    "Victoria",
    "Hutchinson",
    "Glencoe",
    "St. Bonifacius",
    "Howard Lake",
    "Rockford",
    "Monticello",
    "Shakopee",
    "St. Cloud",
    "Minneapolis",
    "St. Paul",
  ];

  const cityPages = [
    {
      city: "Watertown",
      slug: "watertown-mn-junk-car-buyer",
      title: "Cash for Junk Cars in Watertown, MN",
      hero: "Sell your junk car fast in Watertown.",
      text: "Top Dollar For Junk Cars buys dead cars, junk cars, damaged vehicles, and non-running vehicles in Watertown, Minnesota. Call, text, or send your vehicle information for a fast local response.",
      seoTitle: "Watertown MN Junk Car Buyer | Cash for Junk Cars",
      seoDescription: "Sell your junk car fast in Watertown, Minnesota. We buy dead cars, damaged vehicles, and unwanted cars with quick local response.",
      faqTitle: "Questions about selling a junk car in Watertown",
    },
    {
      city: "Waconia",
      slug: "waconia-mn-junk-car-buyer",
      title: "Sell Your Junk Car Fast in Waconia, MN",
      hero: "Waconia junk car pickup made simple.",
      text: "If you have a junk car in Waconia, Top Dollar For Junk Cars makes it easy to get a fast offer. We buy unwanted, damaged, dead, and older vehicles across your local service area.",
      seoTitle: "Waconia MN Junk Car Buyer | Sell Your Junk Car Fast",
      seoDescription: "Need to sell a junk car in Waconia, Minnesota? Get a fast offer for dead cars, damaged vehicles, and unwanted cars.",
      faqTitle: "Questions about selling a junk car in Waconia",
    },
    {
      city: "Delano",
      slug: "delano-mn-junk-car-buyer",
      title: "Delano Junk Car Buyer",
      hero: "Cash offers for junk cars in Delano.",
      text: "We buy many junk cars, scrap cars, and non-running vehicles in Delano and surrounding areas. If your vehicle is sitting, damaged, or not worth fixing, we can help.",
      seoTitle: "Delano MN Junk Car Buyer | Cash for Scrap Cars",
      seoDescription: "Sell your junk car in Delano, Minnesota. We buy scrap cars, non-running vehicles, and damaged cars.",
      faqTitle: "Questions about selling a junk car in Delano",
    },
    {
      city: "Buffalo",
      slug: "buffalo-mn-junk-car-buyer",
      title: "Cash for Junk Cars in Buffalo, MN",
      hero: "Turn your Buffalo junk car into cash.",
      text: "Have an old, wrecked, or dead vehicle in Buffalo? Top Dollar For Junk Cars buys many vehicles in as-is condition and makes the process simple.",
      seoTitle: "Buffalo MN Junk Car Buyer | Cash for Junk Cars",
      seoDescription: "Need cash for a junk car in Buffalo, Minnesota? We buy old, wrecked, dead, and unwanted vehicles.",
      faqTitle: "Questions about selling a junk car in Buffalo",
    },
    {
      city: "Chaska",
      slug: "chaska-mn-junk-car-buyer",
      title: "Chaska Junk Car Pickup",
      hero: "Fast junk car pickup in Chaska.",
      text: "For junk car pickup in Chaska, sellers can call, text, or fill out the form to get the process started fast. We buy many non-running and damaged vehicles.",
      seoTitle: "Chaska MN Junk Car Buyer | Junk Car Pickup",
      seoDescription: "Looking for a junk car buyer in Chaska, Minnesota? We buy non-running, damaged, and unwanted vehicles.",
      faqTitle: "Questions about selling a junk car in Chaska",
    },
    {
      city: "Minneapolis",
      slug: "minneapolis-mn-junk-car-buyer",
      title: "Minneapolis Junk Car Buyer",
      hero: "Sell your junk car fast in Minneapolis.",
      text: "Top Dollar For Junk Cars buys many damaged, dead, and unwanted vehicles in Minneapolis within your service range. Get a fast response and straightforward process.",
      seoTitle: "Minneapolis MN Junk Car Buyer | Cash for Junk Cars",
      seoDescription: "Sell your junk car in Minneapolis, Minnesota. We buy dead cars, damaged vehicles, and unwanted cars.",
      faqTitle: "Questions about selling a junk car in Minneapolis",
    },
    {
      city: "St. Paul",
      slug: "st-paul-mn-junk-car-buyer",
      title: "St. Paul Cash for Junk Cars",
      hero: "Need to sell a junk car in St. Paul?",
      text: "We buy many junk cars and non-running vehicles in St. Paul for cash. Send your vehicle details and we will let you know the next steps fast.",
      seoTitle: "St. Paul MN Junk Car Buyer | Cash for Junk Cars",
      seoDescription: "Get cash for your junk car in St. Paul, Minnesota. We buy non-running, damaged, and unwanted vehicles.",
      faqTitle: "Questions about selling a junk car in St. Paul",
    },
  ];

  const currentPath = typeof window !== "undefined" ? window.location.pathname.replace(/^\//, "") : "";
  const activeCityPage = useMemo(() => cityPages.find((page) => page.slug === currentPath) || null, [currentPath]);
  const seoPage = activeCityPage || {
    seoTitle: "Top Dollar For Junk Cars | Minnesota Junk Car Buyer",
    seoDescription:
      "Sell your junk car fast in Minnesota. Top Dollar For Junk Cars buys dead cars, damaged vehicles, and unwanted vehicles up to 60 miles from Watertown, MN.",
    faqTitle: "Questions sellers usually ask",
  };

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = seoPage.seoTitle;

    const ensureMeta = (name, content, attribute = "name") => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    ensureMeta("description", seoPage.seoDescription);
    ensureMeta("og:title", seoPage.seoTitle, "property");
    ensureMeta("og:description", seoPage.seoDescription, "property");
    ensureMeta("twitter:title", seoPage.seoTitle);
    ensureMeta("twitter:description", seoPage.seoDescription);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const currentUrl = typeof window !== "undefined" ? window.location.href : "https://example.com";
    canonical.setAttribute("href", currentUrl);

    let schemaTag = document.getElementById("local-business-schema");
    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.id = "local-business-schema";
      schemaTag.type = "application/ld+json";
      document.head.appendChild(schemaTag);
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Top Dollar For Junk Cars",
      description: seoPage.seoDescription,
      telephone: "612-408-5865",
      email: "amtowingllc2018@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "417 Franklin Avenue Northwest",
        addressLocality: "Watertown",
        addressRegion: "MN",
        postalCode: "55388",
        addressCountry: "US",
      },
      areaServed: serviceCities.map((city) => ({
        "@type": "City",
        name: city,
      })),
      url: currentUrl,
      serviceType: "Junk car buying and pickup",
    };

    schemaTag.textContent = JSON.stringify(schema);
  }, [seoPage, serviceCities]);

  const steps = [
    {
      title: "Tell us about your car",
      text: "Enter the year, make, model, condition, and where the vehicle is located.",
      icon: "1",
    },
    {
      title: "Get a fast offer",
      text: "We review your info and contact you quickly with a cash offer or a few follow-up questions.",
      icon: "2",
    },
    {
      title: "Schedule pickup",
      text: "If the numbers work, we line up pickup and finish the deal fast.",
      icon: "3",
    },
  ];

  const benefits = [
    "Cash for junk cars, dead cars, damaged cars, and unwanted vehicles",
    "Call or text for fast quotes",
    "Pickup available in most cases",
    "No need to fix the vehicle first",
    "Cars, SUVs, vans, trucks, and many scrap vehicles",
    "Focused on local mobile leads that convert",
  ];

  const baseFaqs = [
    {
      q: "Do you buy dead or non-running cars?",
      a: "Yes. We buy many vehicles that do not run, have damage, are missing parts, or have been sitting for a long time.",
    },
    {
      q: "Do I need the title?",
      a: "Title rules can vary depending on the vehicle and situation. Send your details and we can tell you what is needed.",
    },
    {
      q: "How fast can you pick it up in Minnesota?",
      a: "In most cases, pickup can be scheduled quickly depending on your location, vehicle access, and current schedule.",
    },
    {
      q: "What vehicles do you buy?",
      a: "We buy many junk cars, scrap cars, damaged vehicles, older cars, unwanted vehicles, and many trucks, vans, and SUVs too.",
    },
  ];

  const cityFaqs = {
    Watertown: [
      {
        q: "Do you buy junk cars in Watertown that have been sitting for a long time?",
        a: "Yes. We buy many older vehicles in Watertown even if they have been sitting, are not running, or need to be removed as-is.",
      },
      {
        q: "How fast can I get junk car pickup in Watertown?",
        a: "Pickup timing depends on access, location, and current scheduling, but local Watertown requests are often some of the quickest to review.",
      },
    ],
    Waconia: [
      {
        q: "Do you buy damaged cars in Waconia?",
        a: "Yes. We buy many damaged, wrecked, and unwanted vehicles in Waconia if the numbers make sense.",
      },
      {
        q: "Can I text my Waconia vehicle info instead of calling?",
        a: "Yes. You can call, text, or use the quote form to send your Waconia junk car details.",
      },
    ],
    Delano: [
      {
        q: "Do you buy scrap cars in Delano?",
        a: "Yes. We buy many scrap cars, older vehicles, and non-running vehicles in Delano and nearby areas.",
      },
      {
        q: "What details do you need for a Delano quote?",
        a: "The best starting details are year, make, model, condition, location, and whether the vehicle has a title.",
      },
    ],
    Buffalo: [
      {
        q: "Do you buy wrecked vehicles in Buffalo?",
        a: "Yes. We buy many wrecked and damaged vehicles in Buffalo depending on condition, parts value, and access.",
      },
      {
        q: "Can you buy my Buffalo junk car if it does not run?",
        a: "Yes. Many non-running vehicles can still qualify for an offer in Buffalo.",
      },
    ],
    Chaska: [
      {
        q: "Do you offer junk car pickup in Chaska?",
        a: "Yes. We serve Chaska within the local service area and can review pickup options based on your vehicle and location.",
      },
      {
        q: "What kinds of vehicles do you buy in Chaska?",
        a: "We buy many junk cars, damaged vehicles, dead cars, older cars, trucks, vans, and SUVs in Chaska.",
      },
    ],
    Minneapolis: [
      {
        q: "Do you buy junk cars in Minneapolis city limits?",
        a: "Yes. We review many junk car leads in Minneapolis that fall inside the service range from Watertown.",
      },
      {
        q: "Can I send photo links for my Minneapolis vehicle?",
        a: "Yes. The form includes photo link fields so you can send images that help speed up the quote process.",
      },
    ],
    "St. Paul": [
      {
        q: "Do you buy non-running cars in St. Paul?",
        a: "Yes. We buy many non-running and unwanted vehicles in St. Paul when the vehicle details fit our buying area and pricing.",
      },
      {
        q: "How do I start selling my junk car in St. Paul?",
        a: "Call, text, or submit the quote form with your year, make, model, condition, and location to get started.",
      },
    ],
  };

  const faqs = activeCityPage ? [...baseFaqs, ...(cityFaqs[activeCityPage.city] || [])] : baseFaqs;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    year: "",
    make: "",
    model: "",
    mileage: "",
    location: "",
    condition: "Runs and drives",
    details: "",
    photo1: "",
    photo2: "",
    photo3: "",
    botField: "",
  });
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const encode = (data) => new URLSearchParams(data).toString();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.firstName || !formData.phone || !formData.location || !formData.year || !formData.make || !formData.model) {
      setSubmitState("error");
      setShowThankYou(false);
      setSubmitMessage("Please fill out your name, phone, vehicle year, make, model, and location.");
      return;
    }

    setSubmitState("loading");
    setSubmitMessage("");
    setShowThankYou(false);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "junk-car-quote",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitState("success");
      setSubmitMessage("Thanks. Your quote request was sent. Expect a call or text soon.");
      setShowThankYou(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        year: "",
        make: "",
        model: "",
        mileage: "",
        location: "",
        condition: "Runs and drives",
        details: "",
        photo1: "",
        photo2: "",
        photo3: "",
        botField: "",
      });
    } catch (error) {
      setSubmitState("error");
      setShowThankYou(false);
      setSubmitMessage("There was a problem sending the form. Call or text 612-408-JUNK instead.");
    }
  };

  const citySection = (page) => (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">City page</div>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{page.title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{page.text}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Suggested URL</div>
            <div className="mt-3 text-lg font-black tracking-tight">/{page.slug}</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-2">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">SEO preview</div>
            <div className="mt-3 text-lg font-black tracking-tight text-slate-900">{page.seoTitle}</div>
            <div className="mt-2 leading-7 text-slate-600">{page.seoDescription}</div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div>
              <div className="text-xl font-black tracking-tight">TOP DOLLAR FOR JUNK CARS</div>
              <div className="text-sm text-slate-500">Fast offers. Easy pickup. Local Minnesota service.</div>
            </div>
            <div className="hidden gap-3 sm:flex">
              <a href="tel:6124085865" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">Call 612-408-JUNK</a>
              <a href="#quote" className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:opacity-90">Get My Offer</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_35%),linear-gradient(180deg,#111827_0%,#0f172a_35%,#ffffff_100%)]">
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 shadow-sm">
                {activeCityPage ? `${activeCityPage.city} junk car buyer page` : "Minnesota junk car pickup • 60-mile service radius from Watertown"}
              </div>
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {activeCityPage ? activeCityPage.hero : "Sell Your Junk Car Fast. Call or Text 612-408-JUNK."}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {activeCityPage ? activeCityPage.text : "Top Dollar For Junk Cars buys junk cars, dead cars, damaged cars, non-running vehicles, and unwanted vehicles across your local Minnesota service area. Pickup available in most cases."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#quote" className="rounded-2xl bg-amber-500 px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5">Get My Cash Offer</a>
                <a href="tel:6124085865" className="rounded-2xl border border-slate-600 bg-white/95 px-6 py-4 text-center text-base font-semibold text-slate-900 transition hover:bg-white">Call 612-408-JUNK</a>
                <a href="sms:6124085865" className="rounded-2xl border border-slate-600 bg-white/95 px-6 py-4 text-center text-base font-semibold text-slate-900 transition hover:bg-white">Text Now</a>
              </div>
              <div className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 text-sm font-semibold text-white shadow-sm">No title needed in many situations</div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 text-sm font-semibold text-white shadow-sm">Running or not • Any condition</div>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm">
                  <div className="text-2xl font-black text-amber-300">Fast</div>
                  <div className="mt-1 text-sm text-slate-300">Fast quotes and pickup scheduling</div>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm">
                  <div className="text-2xl font-black text-amber-300">Easy</div>
                  <div className="mt-1 text-sm text-slate-300">Call, text, or send your vehicle details</div>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm">
                  <div className="text-2xl font-black text-amber-300">Local</div>
                  <div className="mt-1 text-sm text-slate-300">Serving a 60-mile radius from Watertown</div>
                </div>
              </div>
            </div>

            <div id="quote" className="lg:pl-8">
              <div className="mb-4 rounded-3xl border border-amber-300/30 bg-slate-900 p-4 text-white shadow-xl">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Fast local response</div>
                <div className="mt-2 text-2xl font-black">Top Dollar For Junk Cars</div>
                <div className="mt-2 text-slate-300">Call or text 612-408-JUNK • Email amtowingllc2018@gmail.com</div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300 sm:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-black tracking-tight">Get Your Fast Quote</h2>
                  <p className="mt-2 text-slate-600">Serving customers up to 60 miles from 417 Franklin Avenue Northwest, Watertown, Minnesota 55388.</p>
                </div>

                {showThankYou ? (
                  <div className="mb-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Quote request received</div>
                    <h3 className="mt-3 text-2xl font-black tracking-tight text-emerald-900">Thank you. We got your vehicle details.</h3>
                    <p className="mt-3 leading-7 text-emerald-800">We will review the information and reach out by phone or text. If your vehicle photos are ready, keep those share links handy in case we ask for more details.</p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a href="tel:6124085865" className="rounded-2xl bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90">Call 612-408-JUNK</a>
                      <button type="button" onClick={() => setShowThankYou(false)} className="rounded-2xl border border-emerald-300 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100">Submit another vehicle</button>
                    </div>
                  </div>
                ) : null}

                <form name="junk-car-quote" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${showThankYou ? "mt-6" : ""}`}>
                  <input type="hidden" name="form-name" value="junk-car-quote" />
                  <div className="hidden">
                    <label>
                      Don’t fill this out if you’re human.
                      <input name="botField" value={formData.botField} onChange={handleChange} />
                    </label>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">First Name</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="John" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Smith" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="612-408-5865" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="name@example.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Year</label>
                    <input name="year" value={formData.year} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="2008" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Make</label>
                    <input name="make" value={formData.make} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Ford" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Model</label>
                    <input name="model" value={formData.model} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Focus" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Mileage</label>
                    <input name="mileage" value={formData.mileage} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="185,000" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">Vehicle Location</label>
                    <input name="location" value={formData.location} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="City, State or ZIP within 60 miles of Watertown, MN" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">Condition</label>
                    <select name="condition" value={formData.condition} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500">
                      <option>Runs and drives</option>
                      <option>Does not run</option>
                      <option>Damaged</option>
                      <option>Missing parts</option>
                      <option>Salvage / junk</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">Tell us about the vehicle</label>
                    <textarea name="details" value={formData.details} onChange={handleChange} rows={4} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Describe damage, title status, missing parts, if it starts, and anything else that helps us make an offer." />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <label className="mb-2 block text-sm font-semibold">Vehicle photo links</label>
                      <p className="mb-3 text-sm leading-6 text-slate-600">Paste up to 3 photo links from Google Photos, iCloud, Dropbox, or any shareable image link.</p>
                      <div className="grid gap-3">
                        <input name="photo1" value={formData.photo1} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Photo link 1" />
                        <input name="photo2" value={formData.photo2} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Photo link 2" />
                        <input name="photo3" value={formData.photo3} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Photo link 3" />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" disabled={submitState === "loading"} className="w-full rounded-2xl bg-amber-500 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">
                      {submitState === "loading" ? "Sending..." : "Request My Offer"}
                    </button>
                  </div>
                </form>

                {submitMessage ? <div className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium ${submitState === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>{submitMessage}</div> : null}

                <p className="mt-4 text-xs leading-5 text-slate-500">By submitting this form, you agree to be contacted by phone or text about your vehicle.</p>
              </div>
            </div>
          </div>
        </section>

        {activeCityPage ? (
          citySection(activeCityPage)
        ) : (
          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">City landing pages</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Separate local pages for your biggest target cities</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">These pages are structured so you can publish a dedicated landing page URL for each city instead of stacking all city content on one page.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {cityPages.map((item) => (
                  <a key={item.slug} href={`/${item.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">{item.city}</div>
                    <h3 className="mt-3 text-xl font-black tracking-tight">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                    <div className="mt-4 text-sm font-semibold text-slate-900">Open page: /{item.slug}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Service area</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">We buy junk cars across your local Minnesota market</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Based out of Watertown, Minnesota, Top Dollar For Junk Cars serves sellers up to 60 miles from 417 Franklin Avenue Northwest, Watertown, Minnesota 55388.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {serviceCities.map((city) => (
                  <div key={city} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">{city}</div>
                ))}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Why sellers choose us</div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Simple process. Fast turnaround.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">People selling junk cars want speed, clarity, and a real local buyer. This page is built to get sellers in your Minnesota service area to call, text, or submit their vehicle details fast.</p>
                <div className="mt-8 grid gap-4">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">✓</div>
                      <div className="text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">How it works</div>
                <div className="grid gap-4">
                  {steps.map((step) => (
                    <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-lg font-black text-white">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-black tracking-tight">{step.title}</h3>
                          <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Service map</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Local coverage from Watertown, Minnesota</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Top Dollar For Junk Cars serves sellers up to 60 miles from 417 Franklin Avenue Northwest, Watertown, Minnesota 55388. This helps show local buyers and search engines the core service area.</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Base location</div>
                  <div className="mt-2 text-lg font-black tracking-tight">417 Franklin Avenue Northwest, Watertown, MN 55388</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Primary radius</div>
                  <div className="mt-2 text-lg font-black tracking-tight">Up to 60 miles</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Best next step</div>
                  <div className="mt-2 leading-7 text-slate-600">Call, text, or submit your vehicle details to confirm pickup availability for your exact location.</div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <iframe title="Top Dollar For Junk Cars service area map" src="https://www.google.com/maps?q=417%20Franklin%20Avenue%20Northwest%2C%20Watertown%2C%20MN%2055388&z=10&output=embed" className="h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Seller feedback</div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Why local sellers choose Top Dollar For Junk Cars</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={`${item.name}-${item.city}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-lg font-black tracking-tight">“{item.quote}”</div>
                  <div className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">{item.city}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Ready to sell?</div>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Turn that junk car into cash.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Whether it runs or not, this site makes it easy for sellers in your service area to send their info and get the process started.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href="#quote" className="rounded-2xl bg-amber-500 px-6 py-4 text-center text-base font-semibold text-slate-950 transition hover:opacity-90">Start My Quote</a>
                <a href="tel:6124085865" className="rounded-2xl border border-slate-700 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-slate-800">Call 612-408-JUNK</a>
                <a href="sms:6124085865" className="rounded-2xl border border-slate-700 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-slate-800">Text 612-408-JUNK</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Frequently asked questions</div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{seoPage.faqTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-black tracking-tight">{item.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="text-lg font-black tracking-tight">TOP DOLLAR FOR JUNK CARS</div>
            <p className="mt-3 max-w-sm leading-7 text-slate-600">Fast offers for junk cars, dead cars, scrap cars, damaged vehicles, and non-running vehicles.</p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Contact</div>
            <div className="mt-3 space-y-2 text-slate-700">
              <div>612-408-JUNK</div>
              <div>amtowingllc2018@gmail.com</div>
              <div>417 Franklin Avenue Northwest, Watertown, MN 55388</div>
              <div>Serving up to 60 miles from Watertown, Minnesota 55388</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Seller note</div>
            <p className="mt-3 leading-7 text-slate-600">Final offers can depend on vehicle condition, title status, location, parts value, catalytic converter status, and current scrap market conditions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
