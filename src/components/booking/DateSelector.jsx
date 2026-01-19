export default function DateSelector({ value, onChange }) {
  return (
    <input
      type="date"
      className="border p-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
