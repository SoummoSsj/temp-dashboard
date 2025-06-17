# Temp Dashboard Project

## Setup

- **Backend:**  
  1. Copy `backend/.env.example` to `.env` and set `TOKEN_SECRET`.  
  2. Install dependencies: `npm install`.  
  3. Run with `node app.js` (or `npm start`).  
  4. API: `GET /temperature` returns JSON `{ "temperature": <value> }` (15–45°C). Uses JWT if `Authorization` header is provided.  

- **Frontend:**  
  1. In `frontend/`, install dependencies: `npm install`.  
  2. Start dev server: `npm start`.  
  3. The app will open at `http://localhost:3001` (or similar) and display the live chart.

- **Testing:**  
  - Ensure backend is running on `http://localhost:3000`.  
  - Run k6 tests:  
    - `k6 run performance-tests/rate-limit-test.js`  
    - `k6 run performance-tests/scalability-test.js`  

## Design Decisions

- **Rate Limiting:** Used `express-rate-limit` (100 req/sec limit). Exceeding limit returns `429 Too Many Requests`:contentReference[oaicite:8]{index=8}.  
- **Authentication:** Added optional JWT check with `jsonwebtoken`. Tokens are signed with a secret (see `.env`):contentReference[oaicite:9]{index=9}.  
- **Logging:** Used Winston for structured JSON logs (timestamped) and Morgan for HTTP logs.  
- **Charting:** Chose Chart.js with `react-chartjs-2` for a flexible, responsive graph. Chart.js is responsive by default (`responsive: true`):contentReference[oaicite:10]{index=10}.  
- **Scalability:** Frontend is a static bundle (can be served via CDN). Backend can be clustered or load-balanced.  

## Performance Test Evidence

- **Rate Limit Test:** k6 output will show many 429 responses once requests exceed 100/sec, verifying the limiter works.  
- **Scalability Test:** k6 reports (logs) illustrate system behavior under 1000 concurrent users. Ideally, median response times remain acceptable.

*(No actual screenshots included here, but running the k6 scripts will generate detailed statistics in the console or Grafana.)*
.