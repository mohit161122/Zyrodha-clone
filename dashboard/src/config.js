// In development, the backend runs on localhost:3002.
// In production (Vercel), the backend is served from the same domain (relative URL).
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? ""           // same origin on Vercel — routes go through vercel.json
    : "http://localhost:3002";

export default API_BASE_URL;
