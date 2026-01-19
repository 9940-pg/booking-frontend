const BASE_URL = "http://localhost:5000/api";

export async function getService(serviceKey) {
  const res = await fetch(`${BASE_URL}/services/${serviceKey}`);
  return res.json();
}

export async function getAvailableSlots(service, date) {
  const res = await fetch(
    `${BASE_URL}/slots?service=${service}&date=${date}`
  );
  return res.json();
}

export async function createBooking(payload) {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return res.json();
}
