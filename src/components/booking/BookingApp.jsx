import { useState } from "react";

import DateSelector from "./DateSelector";
import BookingForm from "./BookingForm";
import BookingSummary from "./BookingSummary";
import OccasionSelector from "./OccasionSelector";
import CakeSelector from "./CakeSelector";
import AddonSelector from "./AddonSelector";

function getOccasionInputLabel(occasion) {
  if (!occasion) return "";

  const name = occasion.name.toLowerCase();

  if (name.includes("baby shower")) return "Enter Baby's Name";
  if (name.includes("birthday")) return "Enter Birthday Person's Name";
  if (name.includes("proposal")) return "Enter Partner's Name";
  if (name.includes("wedding")) return "Enter Couple's Names";
  if (name.includes("anniversary")) return "Enter Couple's Names";
  if (name.includes("mom to be")) return "Enter Mom-to-be's Name";
  if (name.includes("groom to be") || name.includes("bride to be")) return "Enter Honoree's Name";
  if (name.includes("farewell")) return "Enter Person's Name";
  if (name.includes("congratulations")) return "Enter Honoree's Name";
  if (name.includes("casual date")) return "Enter Partner's Name";

  return "Enter Name";
}

export default function BookingApp({ serviceData }) {
  const [step, setStep] = useState("select");

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const [occasion, setOccasion] = useState(null);
  const [specialName, setSpecialName] = useState("");

  const [cake, setCake] = useState(null);
  const [addons, setAddons] = useState([]);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 text-[var(--color-text)]">

      {/* STEP 1 — DATE & TIME */}
      {step === "select" && (
        <DateSelector
          date={date}
          slot={slot}
          onSelect={(d, s) => {
            setDate(d);
            setSlot(s);
          }}
          onProceed={() => setStep("form")}
        />
      )}

     
   {/* STEP 2 — USER DETAILS */}
{step === "form" && (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-6">
      {/* Date & Time Overview */}
      <div className="border rounded p-4 border-[var(--color-primary)]/30 space-y-1">
        <p>
          <strong className="text-[var(--color-primary)]">Date:</strong>{" "}
          <span className="text-[var(--color-text)]">{date}</span>
        </p>
        <p>
          <strong className="text-[var(--color-primary)]">Time:</strong>{" "}
          <span className="text-[var(--color-text)]">{slot}</span>
        </p>
      </div>

      <BookingForm
        value={userInfo}
        onChange={(data) => setUserInfo(data)}
      />
    </div>

    <BookingSummary
      serviceData={serviceData}
      date={date}
      selectedSlot={slot}
      formData={userInfo}
      onProceed={() => setStep("occasion")}
    />
  </div>
)}


      {/* STEP 3 — OCCASION + SPECIAL NAME */}
      {step === "occasion" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <OccasionSelector
              value={occasion}
              onChange={(item) => {
                setOccasion(item);
                setSpecialName(""); // reset when changing occasion
              }}
            />

            {/* Dynamic Special Name Field */}
          {occasion && (
  <div className="border rounded-[6px] p-4 space-y-2 border-[var(--color-primary)]/100 bg-[var(--color-bg)] shadow-sm">
    <label className="font-semibold text-sm text-[var(--color-primary)]">
      {getOccasionInputLabel(occasion)}
    </label>
    <input
      type="text"
      maxLength={8}
      value={specialName}
      onChange={(e) => setSpecialName(e.target.value)}
      placeholder={getOccasionInputLabel(occasion)}
      className="
        w-full border rounded-[6px] px-3 py-2
        bg-[var(--color-secondary)]
        text-[var(--color-text)]
        placeholder-gray-400
        border-[var(--color-primary)]
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--color-primary)]
        focus:border-[var(--color-primary)]
        transition
      "
    />
    <p className="text-xs text-gray-500">
      Maximum 8 characters allowed
    </p>
  </div>
)}

          </div>

          <BookingSummary
            serviceData={serviceData}
            date={date}
            selectedSlot={slot}
            formData={userInfo}
            occasion={occasion}
            specialName={specialName}
            buttonLabel="Next"
            onProceed={() => setStep("cake")}
          />
        </div>
      )}

      {/* STEP 4 — CAKE */}
      {step === "cake" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CakeSelector
              value={cake}
              onChange={setCake}
            />
          </div>

          <BookingSummary
            serviceData={serviceData}
            date={date}
            selectedSlot={slot}
            formData={userInfo}
            occasion={occasion}
            specialName={specialName}
            cake={cake}
            buttonLabel="Next"
            onProceed={() => setStep("addons")}
          />
        </div>
      )}

      {/* STEP 5 — ADDONS */}
      {step === "addons" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT — addons */}
          <div className="lg:col-span-2">
            <AddonSelector
              value={addons}
              onChange={setAddons}
            />
          </div>

          {/* RIGHT — summary */}
          <BookingSummary
            serviceData={serviceData}
            date={date}
            selectedSlot={slot}
            formData={userInfo}
            occasion={occasion}
            specialName={specialName}
            cake={cake}
            addons={addons}
            buttonLabel="Pay"
            onProceed={() => alert("Payment gateway will be added later")}
          />

        </div>
      )}

    </div>
  );
}
