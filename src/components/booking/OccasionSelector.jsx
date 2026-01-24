const occasions = [
  { name: "Birthday", price: 599, label: "Decor + Celebration", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/birthday.png" },
  { name: "Anniversary", price: 599, label: "Romantic Decor", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/anniversary.png" },
  { name: "Bride To Be", price: 699, label: "Special Setup", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/bridetobe.png" },
  { name: "Groom To Be", price: 699, label: "Special Setup", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/groomtobe.png" },
  { name: "Mom To Be", price: 649, label: "Cute Setup", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/momtobe.png" },
  { name: "Farewell", price: 549, label: "Group Decor", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/farewell.png" },
  { name: "Casual Date", price: 499, label: "Romantic Setup", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/casualdate.png" },
  { name: "Wedding Proposal", price: 799, label: "Grand Setup", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/weddingproposal.png" },
  { name: "Love Proposal", price: 799, label: "Romantic Decor", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/loveproposal.png" },
  { name: "Baby Shower", price: 649, label: "Cute Theme", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/babyshower.png" },
  { name: "Congratulations", price: 599, label: "Celebration Decor", icon: "https://bnbtplstorageaccount.blob.core.windows.net/addons/decoration/congratulations.png" },
];

export default function OccasionSelector({ value, onChange }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[var(--color-primary)]">
        Select Occasion
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {occasions.map((item) => {
          const selected = value?.name === item.name;

          return (
            <button
              key={item.name}
              onClick={() => onChange(item)}
              className={`
                p-4 rounded-xl text-center flex flex-col items-center transition-all duration-200
                ${selected
                  ? "bg-[var(--color-primary)]/20 text-[var(--color-text)] shadow-lg scale-105 ring-2 ring-[var(--color-primary)]"
                  : "bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-[var(--color-bg)]/100 hover:ring-2 hover:ring-[var(--color-primary)]/100 hover:scale-[1.02]"
                }
              `}
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-12 h-12 mb-2"
                />
              )}
              <p className="font-semibold">{item.name}</p>
              <p className="text-xs">{item.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
