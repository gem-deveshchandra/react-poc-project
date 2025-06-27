# HR Dashboard POC – React 

A modern, responsive **HR Dashboard** built with **React 18** on the frontend and a basic **Node.js + Express** setup on the backend. This POC showcases dynamic UI components, charts, and data visualizations designed for internal HR operations.

---

## Key Features

### Dashboard & Analytics
- **KPI Widgets** for quick HR metrics
- **Charts** (Recharts):
  - Employee Count by Role
  - Employees by Location (Map View)
  - New Hires vs. Terminations
  - Candidate Funnel by Quarter

### Employee Management
- Full **Employee Directory Table** with:
  - Column-level search
  - Filterable + sortable grid
  - Excel export support
- Detailed **Employee Profile Page** with:
  - Personal info
  - Meeting & interview cards
  - Calendar block slots
- **Demographics Page** for charts on employee training and skills:
- Training Progress by Department
- Program-wise Training Completion
- Certificate Distribution
- Top Skills Gained
### Calendar & Meetings
- Scrollable meeting cards
- Interactive calendar with **slot blocking**
- Interview listings and hired candidates view

### Authentication
- Simple login form (username/password)
- **Protected Routes** using Context API
- Session persistence via `sessionStorage`

---

## Tech Stack

### Frontend
- React 18 (Vite)
- Redux Toolkit
- React Router DOM v6
- Material UI (v5) + Tailwind CSS
- Recharts for data visualization
- Lucide Icons for UI icons

### Backend
- Node.js + Express
- REST API serving dummy HR data
- Modular route structure (`/routes`)
- CORS-enabled, lightweight JSON backend

---

## Folder Structure

```
hr-dashboard/
├── frontend/ # React + Vite frontend
│ ├── components/ # Reusable UI components
│ ├── pages/ # Dashboard, Profile, Employee pages
│ ├── redux/ # Redux slices and store setup
│ └── routes/ # Route protection and layout

├── backend/ # Node.js + Express backend
│ ├── routes/ # API endpoints (charts, data, employees)
│ ├── data/ # Static dummy JSON data files
│ └── app.js # Express app entry point
```

---

## Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/gem-deveshchandra/react-poc-project.git
cd react-poc-project
```

---

### 2️⃣ Start the Backend

```bash
cd backend
npm install
node app.js
```

> Backend runs at: [http://localhost:5000](http://localhost:5000)

---

### 3️⃣ Start the Frontend

```bash
cd front-end
npm install
npm run dev
```

> Frontend runs at: [http://localhost:5173](http://localhost:5173)

---
