
# 🌡️ Real-Time Temperature Dashboard

This is a full-stack web application that displays live, random temperature data on a real-time graph. It includes:

- ✅ A Node.js + Express backend API with rate limiting and optional JWT authentication
- ✅ A React frontend using Chart.js to visualize temperature changes every second
- ✅ Full deployment to Render — both frontend and backend served from a **single link**

> 🔗 **Live App**: [https://temperature-api-3rg8.onrender.com](https://temperature-api-3rg8.onrender.com)

---

## 📂 Project Structure

```
temp-dashboard/
├── backend/               # Node.js + Express server
│   ├── build/             # React production build (served statically)
│   ├── routes/            # API route for /temperature
│   ├── middleware/        # JWT auth (optional)
│   ├── app.js             # Express app entry
│   └── ...
├── frontend/              # React source code
│   ├── src/
│   ├── public/
│   └── ...
├── performance-tests/     # k6 scripts for testing
└── README.md
```

---

## 🔧 Backend API

### 📍 Endpoint

```
GET /temperature
```

### 📦 Response Format

```json
{
  "temperature": 28.47
}
```

### ⛔ Rate Limiting

- 100 requests per second per IP
- Exceeding this returns:
```json
{
  "message": "Too many requests, please try again later."
}
```

### 🔐 (Optional) JWT Auth

You can enable token checking via the `Authorization: Bearer <token>` header. The token is verified using `process.env.TOKEN_SECRET`.

---

## 🎨 Frontend

- Built with **React + Chart.js**
- Fetches new temperature data every second
- Renders a live-updating line chart
- Fully responsive on mobile and desktop

---

## 🚀 Deployment (Unified)

Both frontend and backend are served from a single Render app:
- React app is built (`npm run build`) and copied into `backend/build`
- Express server serves static files from there

> 🔗 Live URL: [https://temperature-api-3rg8.onrender.com](https://temperature-api-3rg8.onrender.com)

---

## 🧪 Performance Tests

### ✅ 1. Rate Limit Test (200 requests/sec)

Run:
```bash
k6 run performance-tests/rate-limit-test.js
```

🔍 Expected: ~50% of requests fail with 429 due to rate limit.

### ✅ 2. Scalability Test (1,000 users)

Run:
```bash
k6 run performance-tests/scalability-test.js
```

🔍 Expected: Many requests get limited (429), but server remains live and responsive.

---

## ⚙️ Local Setup Instructions

### ✅ Prerequisites
- Node.js (v18+)
- npm
- Git
- k6 (for load testing)

---

### 🔄 Clone & Install

```bash
git clone https://github.com/SoummoSsj/temp-dashboard.git
cd temp-dashboard

# Backend setup
cd backend
npm install

# (Optional) Add a `.env` file
echo "TOKEN_SECRET=yoursecret" > .env

# Start the server
node app.js
```

```bash
# Frontend (for local development)
cd ../frontend
npm install
npm start
```

---

### 🛠 Build React for Production

```bash
cd frontend
npm run build
mv build ../backend/
```

Then redeploy the backend to Render.

---

## 💡 Design Decisions

- **Single-link deployment** by serving React build from Express
- Rate limiting ensures backend can't be spammed
- k6 used to simulate high load and validate API stability
- JWT support included for future extension (e.g. auth-protected API)

---

## 👥 Collaborators for Review

GitHub repo shared with:
- `hr@gizantech.com`
- `admin@gizantech.com`

---

## 📹 Submission Demo

> 🎥 A video has been created showing:
> - Real-time graph working
> - Backend API returning temperature data
> - Rate limiter kicking in
> - Scalability tests using k6

---

## 📌 Author

**Soummo Ssj**  
[GitHub Profile](https://github.com/SoummoSsj)

---

## ✅ Evaluation Checklist

| Requirement                         | Status |
|-------------------------------------|--------|
| GET API for mock temperature        | ✅ Done |
| Rate limiting (100 req/sec)         | ✅ Done |
| Real-time graph (React + Chart.js)  | ✅ Done |
| Unified frontend/backend deployment | ✅ Done |
| Performance tests via k6            | ✅ Done |
| Clean, modular code                 | ✅ Done |
| README & Submission video           | ✅ Done |

---

Thanks for reviewing the project! 🎉
