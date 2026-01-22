import { useState } from "react";

import DateSelector from "./DateSelector";
import BookingForm from "./BookingForm";
import BookingSummary from "./BookingSummary";
import OccasionSelector from "./OccasionSelector";

export default function BookingApp({ serviceData }) {
  const [step, setStep] = useState("select");

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [occasion, setOccasion] = useState("");

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">

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

      {/* STEP 2 — USER INFO */}
      {step === "form" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Overview bar */}
            <div
              className="border rounded p-4"
              style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
            >
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Time:</strong> {slot}</p>
            </div>

            <BookingForm
              value={userInfo}
              onChange={(data) => setUserInfo(data)}
            />
          </div>

          {/* RIGHT */}
          <div>
            <BookingSummary
              serviceData={serviceData}
              date={date}
              selectedSlot={slot}
              formData={userInfo}
              onProceed={() => setStep("occasion")}
            />
          </div>
        </div>
      )}

      {/* STEP 3 — OCCASION */}
      {step === "occasion" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2">
            <OccasionSelector
              value={occasion}
              onChange={setOccasion} // now it will be {name, price}
            />
          </div>

          {/* RIGHT */}
          <div>
            <BookingSummary
              serviceData={serviceData}
              date={date}
              selectedSlot={slot}
              formData={userInfo}
              occasion={occasion}
              buttonLabel="Next"
              onProceed={() => alert("Final step reached or submit form")}
            />
          </div>
        </div>
      )}

    </div>
  );
}
