import { useState } from "react";

export default function DateSelector({ date, slot, onSelect, onProceed }) {
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedSlot, setSelectedSlot] = useState(slot);

  const slots = ["10:00 AM", "01:00 PM", "04:00 PM", "07:30 PM"];

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      <h2 className="text-xl font-semibold">Select Date</h2>

      <input
        type="date"
        className="border p-3 rounded w-full"
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
            className={`border p-3 rounded text-center ${
              selectedSlot === time
                ? "bg-black text-white"
                : "hover:border-black"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <button
        disabled={!selectedDate || !selectedSlot}
        onClick={onProceed}
        className={`w-full py-3 rounded ${
          selectedDate && selectedSlot
            ? "bg-black text-white"
            : "bg-gray-300 text-gray-500"
        }`}
      >
        Proceed
      </button>
    </div>
  );
}
