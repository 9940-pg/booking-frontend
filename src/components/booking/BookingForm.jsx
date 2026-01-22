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
    <div className="border rounded p-6 space-y-4">
      <h2 className="text-lg font-semibold">Your Details</h2>

      <input
        name="name"
        placeholder="Full Name"
        className="border p-3 rounded w-full"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Mobile Number"
        className="border p-3 rounded w-full"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email Address"
        className="border p-3 rounded w-full"
        onChange={handleChange}
      />
    </div>
  );
}
