import React, { useState } from 'react';

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
          src="https://raw.githubusercontent.com/ninjazx1199-blip/junk-car-site/main/hero-top-dollar.jpg"
          alt="Top Dollar For Junk Cars tow truck ad"
          className="w-full rounded-3xl shadow-2xl border border-yellow-500/20"
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-8">
        <section className="max-w-5xl mx-auto px-4 pb-14">
        <div className="bg-[#111111] rounded-[32px] border border-yellow-500/10 p-4 md:p-6 shadow-2xl">
          <img
            src="https://raw.githubusercontent.com/ninjazx1199-blip/junk-car-site/main/promo-top-dollar.jpg"
            alt="Top Dollar For Junk Cars promo graphic"
            className="w-full rounded-3xl"
          />
        </div>
      </section>
        <div className="bg-gradient-to-br from-[#151515] to
