import React, { useState } from 'react';
import heroImage from './hero-top-dollar.jpg';
import promoImage from './promo-top-dollar.jpg';

export default function App() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    year: '',
    make: '',
    model: '',
    mileage: '',
    location: '',
    condition: '',
    details: '',
    photo1: '',
    photo2: '',
    photo3: '',
    botField: ''
  });

  const [status, setStatus] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('form-name', 'junk-car-quote');

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });

      if (response.ok) {
        setStatus('success');
        setForm({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          year: '',
          make: '',
          model: '',
          mileage: '',
          location: '',
          condition: '',
          details: '',
          photo1: '',
          photo2: '',
          photo3: '',
          botField: ''
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <header className="bg-white text-[#101828] shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-extrabold tracking-tight">TOP DOLLAR FOR JUNK CARS</h1>
          <p className="text-lg text-gray-500">Fast offers. Easy pickup. Local Minnesota service.</p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-6">
        <img
          src={heroImage}
          alt="Top Dollar For Junk Cars tow truck ad"
          className="w-full rounded-3xl shadow-2xl border border-yellow-500/20"
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-gradient-to-br from-[#151515] to-[#202020] rounded-[32px] shadow-2xl overflow-hidden border border-yellow-500/10">
          <div className="px-6 py-8 md:px-10">
            <div className="inline-block rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-yellow-300 font-semibold text-sm md:text-base">
              Minnesota junk car pickup • 60-mile service radius from Watertown
            </div>

            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Sell Your Junk Car Fast. Call or Text 612-408-JUNK.
            </h2>

            <p className="mt-5 text-xl md:text-2xl text-gray-300 leading-relaxed">
              Top Dollar For Junk Cars buys junk cars, dead cars, damaged cars, non-running vehicles,
              and unwanted vehicles across your local Minnesota service area. Pickup available in most cases.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <a
                href="#quote-form"
                className="block text-center bg-[#f2a300] hover:bg-[#ffb300] text-black font-extrabold text-2xl rounded-2xl px-6 py-5 shadow-lg"
              >
                Get My Cash Offer
              </a>

              <a
                href="tel:6124085865"
                className="block text-center bg-white/90 hover:bg-white text-[#111827] font-extrabold text-2xl rounded-2xl px-6 py-5 shadow-lg"
              >
                Call 612-408-JUNK
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quote-form" className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-white rounded-[32px] shadow-2xl p-6 md:p-10 text-[#111827]">
          <h3 className="text-3xl md:text-4xl font-extrabold">Get Your Junk Car Offer</h3>
          <p className="mt-3 text-lg text-gray-600">
            Fill this out and we’ll review your vehicle info fast.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                required
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email (optional)"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <input
                name="year"
                value={form.year}
                onChange={handleChange}
                placeholder="Year"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
              />
              <input
                name="make"
                value={form.make}
                onChange={handleChange}
                placeholder="Make"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
              />
              <input
                name="model"
                value={form.model}
                onChange={handleChange}
                placeholder="Model"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <input
                name="mileage"
                value={form.mileage}
                onChange={handleChange}
                placeholder="Mileage"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
              />
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Vehicle location"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
              />
              <input
                name="condition"
                value={form.condition}
                onChange={handleChange}
                placeholder="Running / not running / damage"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
              />
            </div>

            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Tell us about the vehicle"
              rows="5"
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
            />

            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-5">
              <h4 className="text-2xl font-bold">Vehicle photo links</h4>
              <p className="mt-2 text-gray-600 text-lg">
                Paste up to 3 photo links from Google Photos, iCloud, Dropbox, or any shareable image link.
              </p>

              <div className="mt-5 grid gap-4">
                <input
                  name="photo1"
                  value={form.photo1}
                  onChange={handleChange}
                  placeholder="Photo link 1"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                />
                <input
                  name="photo2"
                  value={form.photo2}
                  onChange={handleChange}
                  placeholder="Photo link 2"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                />
                <input
                  name="photo3"
                  value={form.photo3}
                  onChange={handleChange}
                  placeholder="Photo link 3"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                />
              </div>
            </div>

            <input
              type="text"
              name="botField"
              value={form.botField}
              onChange={handleChange}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <button
              type="submit"
              className="w-full rounded-3xl bg-[#f2a300] hover:bg-[#ffb300] text-black font-extrabold text-2xl px-6 py-5 shadow-lg"
            >
              Request My Offer
            </button>

            {status === 'success' && (
              <div className="rounded-3xl bg-green-100 text-green-800 px-5 py-4 text-xl font-semibold">
                Thanks. Your quote request was sent. Expect a call or text soon.
              </div>
            )}

            {status === 'error' && (
              <div className="rounded-3xl bg-red-100 text-red-800 px-5 py-4 text-xl font-semibold">
                There was a problem sending the form. Call or text 612-408-JUNK instead.
              </div>
            )}

            <p className="text-gray-500 text-base">
              By submitting this form, you agree to be contacted by phone or text about your vehicle.
            </p>
          </form>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-14">
        <div className="bg-[#111111] rounded-[32px] border border-yellow-500/10 p-4 md:p-6 shadow-2xl">
          <img
            src={promoImage}
            alt="Top Dollar For Junk Cars promo graphic"
            className="w-full rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
}
