import { useState, useEffect } from "react";

export default function BookingForm({ value, onChange }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    onChange(form);
  }, [form]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="
        border p-6 space-y-4
        rounded-[var(--radius)]
        border-[var(--color-primary)]
        bg-[var(--color-bg)]
        text-[var(--color-text)]
      "
    >
      <h2 className="text-lg font-semibold text-[var(--color-primary)]">
        Your Details
      </h2>

  {/* Full Name */}
<input
  name="name"
  placeholder="Full Name"
  onChange={handleChange}
  autoComplete="name"  // ✅ use proper autocomplete
  className="p-3 w-full border transition rounded-[var(--radius)] bg-[var(--color-secondary)] text-[var(--color-text)] placeholder-gray-400 border-[var(--color-primary)] focus:outline-none focus:border-[var(--color-hover)] focus:ring-2 focus:ring-[var(--color-hover)]/40"
/>

{/* Phone */}
<input
  name="phone"
  placeholder="Mobile Number"
  onChange={handleChange}
  autoComplete="tel"   // ✅ phone autocomplete
  className="p-3 w-full border transition rounded-[var(--radius)] bg-[var(--color-secondary)] text-[var(--color-text)] placeholder-gray-400 border-[var(--color-primary)] focus:outline-none focus:border-[var(--color-hover)] focus:ring-2 focus:ring-[var(--color-hover)]/40"
/>

{/* Email */}
<input
  name="email"
  placeholder="Email Address"
  onChange={handleChange}
  autoComplete="email" // ✅ email autocomplete
  className="p-3 w-full border transition rounded-[var(--radius)] bg-[var(--color-secondary)] text-[var(--color-text)] placeholder-gray-400 border-[var(--color-primary)] focus:outline-none focus:border-[var(--color-hover)] focus:ring-2 focus:ring-[var(--color-hover)]/40"
/>

    </div>
  );
}
