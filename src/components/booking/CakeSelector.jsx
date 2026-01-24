import { useState } from "react";
import { cakes } from "../data/cakes";

export default function CakeSelector({ value, onChange }) {
  const [tab, setTab] = useState("premium");
  const [egglessOnly, setEgglessOnly] = useState(false);

  const filtered = cakes.filter(
    (cake) => cake.type === tab && (!egglessOnly || cake.eggless)
  );

  const updateQty = (cake, qty) => {
    if (qty < 1) return;
    onChange({ ...cake, qty });
  };

  return (
    <div className="lg:col-span-2 space-y-6">

      {/* Tabs + Eggless Toggle */}
      <div className="flex items-center justify-between  pb-2">
        <div className="flex gap-6 font-semibold">
          <button
            onClick={() => setTab("premium")}
            className={`pb-2 border-b-2 ${
              tab === "premium"
                ? "text-[var(--color-primary)] border-[var(--color-primary)]"
                : "text-[var(--color-text)] border-transparent"
            }`}
          >
            Premium Cakes
          </button>
          <button
            onClick={() => setTab("standard")}
            className={`pb-2 border-b-2 ${
              tab === "standard"
                ? "text-[var(--color-primary)] border-[var(--color-primary)]"
                : "text-[var(--color-text)] border-transparent"
            }`}
          >
            Standard Cakes
          </button>
        </div>

        {/* Eggless Toggle */}
        <div className="flex items-center gap-3">
          <span className="font-medium text-[var(--color-text)]">Eggless</span>
          <button
            onClick={() => setEgglessOnly(!egglessOnly)}
            className={`w-12 h-6 rounded-full relative transition ${
              egglessOnly ? "bg-[var(--color-primary)]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-[var(--color-bg)] rounded-full transition ${
                egglessOnly ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Cakes Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((cake) => {
          const selected = value?.id === cake.id;
          const qty = selected ? value.qty || 1 : 1;

          return (
            <div
              key={cake.id}
              onClick={() => onChange({ ...cake, qty: 1 })}
              className={`cursor-pointer rounded-[6px] p-3 transition
                hover:ring-2 hover:ring-[var(--color-hover)]
                ${selected ? "ring-2 ring-[var(--color-primary)] bg-[var(--color-primary)]/20 shadow" : "bg-[var(--color-bg)]"}
              `}
            >
              <div className="relative">
                <img
                  src={cake.img}
                  alt={cake.name}
                  className="w-full h-40 object-cover rounded-full"
                />

                {cake.eggless && (
                  <span className="absolute bottom-2 left-2 bg-green-600 text-[var(--color-bg)] text-xs px-2 py-1 rounded-full">
                    Eggless
                  </span>
                )}
              </div>

              <div className="text-center mt-3 space-y-1">
                <p className="font-medium text-[var(--color-text)]">{cake.name}</p>
                <p className="text-sm text-[var(--color-text)]">
                  ₹ {cake.price} ({cake.weight})
                </p>

                {/* Quantity selector only when selected */}
                {selected && (
                  <div className="flex justify-center items-center gap-3 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQty(cake, qty - 1);
                      }}
                      className="w-7 h-7 rounded-[6px] bg-[var(--color-secondary)] border border-[var(--color-primary)]"
                    >
                      –
                    </button>
                    <span className="text-[var(--color-text)]">{qty}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQty(cake, qty + 1);
                      }}
                      className="w-7 h-7 rounded-[6px] bg-[var(--color-secondary)] border border-[var(--color-primary)]"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
