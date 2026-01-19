import { useEffect, useState } from "react";
import {
  getService,
  getAvailableSlots,
  createBooking
} from "../../api/bookingApi";


import DateSelector from "./DateSelector";
import TimeSlots from "./TimeSlots";
import BookingForm from "./BookingForm";

export default function BookingApp({ service }) {
  const [serviceData, setServiceData] = useState(null);
  const [step, setStep] = useState("date");

  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getService(service).then(setServiceData);
  }, [service]);

  useEffect(() => {
    if (date && serviceData) {
      getAvailableSlots(serviceData.id, date).then((slots) => {
        setSlots(slots);
        setStep("slot");
      });
    }
  }, [date, serviceData]);


  if (!serviceData) {
    return <p className="text-center mt-10">Loading service...</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-2">
        {serviceData.name}
      </h2>

      <p className="text-gray-600 mb-6">
        {serviceData.duration} mins · ₹{serviceData.price}
      </p>

      {step === "date" && (
        <DateSelector value={date} onChange={setDate} />
      )}

   {step === "slot" && (
  <TimeSlots
    slots={slots}
    onSelect={(slot) => {
      setSelectedSlot(slot);
      setStep("details");
    }}
  />
)}



{step === "details" && (
  <BookingForm
    onSubmit={async (userData) => {
      try {
        setError("");
        await createBooking({
          serviceId: serviceData.id,
          date,
          time: selectedSlot,
          ...userData,
        });
        setStep("success");
      } catch (err) {
        setError(err.message);
      }
    }}
  />
)}

{error && (
  <p className="text-red-600 mt-3 text-center">
    {error}
  </p>
)}


   {step === "success" && (
  <div className="text-center space-y-3">
    <h3 className="text-xl font-semibold text-green-600">
      Booking Confirmed
    </h3>
    <p className="text-gray-600">
      You will receive confirmation shortly.
    </p>
  </div>
)}
    </div>
  );
}
