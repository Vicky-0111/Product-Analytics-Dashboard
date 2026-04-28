# 📊 Product Analytics Dashboard

A production-grade, real-time analytics dashboard built for SaaS businesses 
to monitor user growth, revenue trends, and conversion metrics — all in one 
centralized, interactive interface.

---

## 🚀 Live Demo
> [Click to View Live](product-analytics-dashboard-qtyhn3sai-vicky-0111s-projects.vercel.app)

---

## 🎯 Why This Project?

Most analytics tools are either too complex or too simple.
This dashboard hits the sweet spot — clean UI, powerful filters,
and real business metrics that product teams actually care about.

---

## ✨ Features

- 📈 **User Growth Chart** — Area chart with monthly new users & churn tracking
- 💰 **Revenue Tracking** — MRR vs Target comparison with ARR run-rate
- 🔻 **Conversion Funnel** — Visitors → Sign-up → Activated → Paid → Retained
- 🍩 **Traffic Sources** — Donut pie chart (Organic, Referral, Paid, Direct)
- 🗃️ **Users Table** — Sort, search, filter by plan/status, paginate
- 🎛️ **Global Date Filter** — 1M / 3M / 6M / 12M updates all charts instantly
- 💀 **Skeleton Loaders** — Smooth loading states on every component
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| React 18         | Component-based UI               |
| Vite 5           | Lightning-fast build tool        |
| Tailwind CSS 3   | Utility-first dark theme styling |
| Recharts 2       | SVG data visualizations          |
| React Query 5    | Data fetching + smart caching    |
| Zustand 4        | Global state management          |
| React Router 6   | Client-side routing              |
| TanStack Table 8 | Sortable, filterable data tables |

---

## 📁 Project Structure

src/
├── components/
│   ├── layout/     # Sidebar, Header, Layout shell
│   ├── charts/     # UserGrowth, Revenue, Analytics charts
│   ├── tables/     # TanStack data table
│   └── ui/         # StatCard, FilterBar reusables
├── pages/          # Dashboard, Analytics, Revenue, Users
├── hooks/          # React Query custom hooks
├── store/          # Zustand global state
├── services/       # API service layer
└── data/           # Mock datasets

---

## ⚙️ Run Locally

bash
# Clone the repo
git clone https://github.com/yourusername/product-analytics-dashboard.git

# Go into the folder
cd product-analytics-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

Open **http://localhost:5173** in your browser.

---

## 👨‍💻 Author

**Vicky Kumar** — 20231CCS0111
Frontend Full Stack | 6th Semester | 2026

---

