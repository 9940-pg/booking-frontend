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
      className="border rounded p-6 space-y-4"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <h2 className="text-lg font-semibold">Your Details</h2>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        style={{
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-text)",
          borderColor: "var(--color-text)",
        }}
        className="p-3 rounded w-full"
      />

      <input
        name="phone"
        placeholder="Mobile Number"
        onChange={handleChange}
        style={{
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-text)",
          borderColor: "var(--color-text)",
        }}
        className="p-3 rounded w-full"
      />

      <input
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        style={{
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-text)",
          borderColor: "var(--color-text)",
        }}
        className="p-3 rounded w-full"
      />
    </div>
  );
}
