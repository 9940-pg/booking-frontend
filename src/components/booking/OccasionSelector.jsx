const occasions = [
  { name: "Birthday", price: 500 },
  { name: "Anniversary", price: 700 },
  { name: "Proposal", price: 1000 },
  { name: "Friends Hangout", price: 300 },
  { name: "Surprise", price: 800 },
];


export default function OccasionSelector({ value, onChange }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Select Occasion</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {occasions.map((item) => (
          <button
            key={item.name}
            onClick={() => onChange(item)} // pass entire object now
            className={`border p-4 rounded text-center ${
              value?.name === item.name
                ? "bg-black text-white"
                : "hover:border-black"
            }`}
          >
            <p>{item.name}</p>
            <p className="text-sm text-gray-500">₹{item.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

