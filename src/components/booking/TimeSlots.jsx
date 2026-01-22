export default function TimeSlots({ slots, onSelect, selectedSlot }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => onSelect(slot)}
          style={{
            backgroundColor:
              selectedSlot === slot ? "var(--color-primary)" : "var(--color-bg)",
            color:
              selectedSlot === slot ? "var(--color-secondary)" : "var(--color-text)",
            borderColor: "var(--color-text)",
          }}
          className="border p-2 rounded hover:bg-hover"
        >
          {slot}
        </button>
      ))}
    </div>
  );
}
