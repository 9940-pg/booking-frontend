export default function BookingSummary({
  serviceData,
  date,
  selectedSlot,
  formData,
  occasion,
  buttonLabel = "Proceed",
  onProceed,
}) {
  const isFormReady =
    date &&
    selectedSlot &&
    formData?.name &&
    formData?.phone &&
    formData?.email;

  const isOccasionReady = occasion;

  const canProceed =
    buttonLabel === "Proceed" ? isFormReady : isOccasionReady;

  const servicePrice = serviceData?.price || 1999;
  const occasionPrice = occasion?.price || 0;
  const totalPrice = servicePrice + occasionPrice;

  return (
    <div
      className="border rounded p-5 sticky top-6 space-y-4"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <h3 className="font-semibold text-lg">Booking Summary</h3>

      <p><strong>Date:</strong> {date || "-"}</p>
      <p><strong>Time:</strong> {selectedSlot || "-"}</p>

      {formData?.name && <p><strong>Name:</strong> {formData.name}</p>}
      {formData?.phone && <p><strong>Phone:</strong> {formData.phone}</p>}
      {formData?.email && <p><strong>Email:</strong> {formData.email}</p>}

      {occasion && (
        <p>
          <strong>Occasion:</strong> {occasion.name} - ₹{occasion.price}
        </p>
      )}

      <hr />

      <p className="text-lg font-semibold">
        Total: ₹{totalPrice}
      </p>

      <button
        disabled={!canProceed}
        onClick={onProceed}
        style={{
          backgroundColor: canProceed
            ? "var(--color-primary)"
            : "var(--color-hover)",
          color: canProceed ? "var(--color-secondary)" : "var(--color-text)",
        }}
        className="w-full py-3 rounded text-lg"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
