import { addons } from "../data/addons";

const groupedAddons = {
  "": addons.filter(a =>
    [
      "fog",
      "photoclippings16",
      "coldfire2",
      "coldfire4",
      "candlepath",
      "partyprops",
      "lednumbers",
      "hbdletters",
    ].includes(a.id)
  ),
  "Roses": addons.filter(a =>
    ["singlerose", "rosebouquet"].includes(a.id)
  ),
  "Photography": addons.filter(a =>
    ["photo20", "photo50", "photo75", "photo100"].includes(a.id)
  ),
};

export default function AddonSelector({ value = [], onChange }) {

  const toggleAddon = (addon) => {
    const exists = value.find(a => a.id === addon.id);

    if (exists) {
      onChange(value.filter(a => a.id !== addon.id));
    } else {
      onChange([...value, addon]);
    }
  };

  return (
    <div className="lg:col-span-2 space-y-10">

      <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
        Extra Decorations
      </h2>

      {Object.entries(groupedAddons).map(([category, items]) => (
        <div key={category}>

          {/* Optional category heading */}
          {category && (
            <h3 className="text-lg font-semibold mb-6 text-[var(--color-primary)]">
              {category}
            </h3>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((addon) => {
              const selected = value.some(a => a.id === addon.id);

              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon)}
                  className={`
                    cursor-pointer rounded-xl p-3 transition
                    hover:ring-2 hover:ring-[var(--color-primary)]/100
                    hover:scale-[1.02]
                    ${selected
                      ? "ring-2 ring-[var(--color-primary)] bg-[var(--color-primary)]/20 shadow-sm"
                      : ""
                    }
                  `}
                >
                  <div className="relative">
                    <img
                      src={addon.img}
                      alt={addon.name}
                      className="w-full h-40 object-cover rounded-full"
                    />
                  </div>

                  <div className="text-center mt-3 space-y-1">
                    <p className="font-medium text-[var(--color-text)]">{addon.name}</p>
                    <p className="text-sm text-[var(--color-text)] font-semibold">
                      ₹ {addon.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
