export default function TimeSlots({ slots, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => onSelect(slot)}
          className="border p-2 rounded hover:bg-black hover:text-white"
        >
          {slot}
        </button>
      ))}
    </div>
  );
}
