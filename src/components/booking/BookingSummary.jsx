import { useState } from "react";

export default function BookingSummary({
  serviceData,
  occasion,
  cake,
  addons = [],
  buttonLabel = "Next",
  onProceed,
}) {
  const [open, setOpen] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const basePrice = serviceData?.price || 1799;
  const decoration = occasion?.price || 0;

  const cakePrice = cake ? cake.price * (cake.qty || 1) : 0;
  const addonsPrice = addons.reduce((sum, a) => sum + a.price, 0);

  const total = basePrice + decoration + cakePrice + addonsPrice;
  const advance = 750;
  const balance = total - advance;

  const handleProceed = () => {
    if (onProceed) onProceed();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <div className="sticky top-6">
      <div className="bg-[var(--color-bg)] rounded-[var(--radius)] shadow-md border border-[var(--color-primary)] overflow-hidden">

        {/* HEADER */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-5 py-4 border-b border-[var(--color-primary)]"
        >
          <h3 className="font-semibold text-lg text-[var(--color-primary)]">Booking Summary</h3>
          <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>▾</span>
        </button>

        {/* BODY */}
        <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[600px]" : "max-h-0"}`}>
          <div className="px-5 py-4 space-y-3 text-sm">

            <Row label="Base Price" value={`₹${basePrice}`} valueColor="var(--color-primary)" />
            {decoration > 0 && <Row label="Decoration" value={`₹${decoration}`} valueColor="var(--color-primary)" />}
            {cake && <Row label="Cake" value={`₹${cakePrice}`} valueColor="var(--color-primary)" />}
            {addons.length > 0 && <Row label="Add-ons" value={`₹${addonsPrice}`} valueColor="var(--color-primary)" />}

            {/* Date & Time */}
            {serviceData?.date && (
              <Row label="Date" value={serviceData.date} valueColor="var(--color-primary)" />
            )}
            {serviceData?.time && (
              <Row label="Time" value={serviceData.time} valueColor="var(--color-primary)" />
            )}

            <hr className="border-[var(--color-primary)]" />
            <Row label="Advance amount payable" value={`- ₹${advance}`} sub="Including ₹50 convenience fee" valueColor="var(--color-primary)" />
            <hr className="border-[var(--color-primary)]" />
            <Row label="Balance Amount" value={`₹${balance}`} sub="To be paid at venue" valueColor="var(--color-primary)" />

          </div>

          {/* BUTTON */}
          <div className="p-4 border-t border-[var(--color-primary)]">
            <button
              onClick={handleProceed}
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-hover)] text-[var(--color-bg)] py-3 rounded-[var(--radius)] font-semibold transition"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[var(--color-primary)]/100 rounded-[var(--radius)] text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeInOut">
          Successfully placed order!
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2.5s ease forwards;
        }
      `}</style>
    </div>
  );
}

function Row({ label, value, sub, valueColor }) {
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-[var(--color-text)]">{label}</span>
        <span className="font-semibold" style={{ color: valueColor || "var(--color-text)" }}>
          {value}
        </span>
      </div>
      {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}
