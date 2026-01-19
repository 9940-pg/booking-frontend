const BASE_URL = "http://localhost:5000/api";

export async function getService(serviceKey) {
  const res = await fetch(`${BASE_URL}/services/${serviceKey}`);
  if (!res.ok) throw new Error("Service not found");
  return res.json();
}

export async function getAvailableSlots(serviceId, date) {
  const res = await fetch(
    `${BASE_URL}/availability?serviceId=${serviceId}&date=${date}`
  );
  const data = await res.json();
  return data.availableSlots;
}

export async function createBooking(payload) {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}
