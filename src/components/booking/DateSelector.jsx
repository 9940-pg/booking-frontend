import { useState } from "react";

export default function DateSelector({ date, slot, onSelect, onProceed }) {
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedSlot, setSelectedSlot] = useState(slot);

  const slots = ["10:00 AM", "01:00 PM", "04:00 PM", "07:30 PM"];

  return (
    <div className="max-w-3xl mx-auto space-y-6" style={{ color: "var(--color-text)" }}>
      <h2 className="text-xl font-semibold">Select Date</h2>

      <input
        type="date"
        className="border p-3 rounded w-full"
        style={{
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-text)",
          borderColor: "var(--color-text)",
        }}
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e.target.value);
          setSelectedSlot("");
        }}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slots.map((time) => (
          <button
            key={time}
            onClick={() => {
              setSelectedSlot(time);
              onSelect(selectedDate, time);
            }}
            style={{
              backgroundColor:
                selectedSlot === time ? "var(--color-primary)" : "var(--color-bg)",
              color:
                selectedSlot === time ? "var(--color-secondary)" : "var(--color-text)",
              borderColor: "var(--color-text)",
            }}
            className="border p-3 rounded text-center hover:bg-hover"
          >
            {time}
          </button>
        ))}
      </div>

      <button
        disabled={!selectedDate || !selectedSlot}
        onClick={onProceed}
        style={{
          backgroundColor:
            selectedDate && selectedSlot
              ? "var(--color-primary)"
              : "var(--color-hover)",
          color:
            selectedDate && selectedSlot
              ? "var(--color-secondary)"
              : "var(--color-text)",
        }}
        className="w-full py-3 rounded text-lg"
      >
        Proceed
      </button>
    </div>
  );
}
