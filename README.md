# Activity Tracker App 📝

A simple Vue.js application that allows users to track their daily activities. Users can add, complete, and remove activities. The frontend is built with Vue 3 + Pinia. The backend is made using **Hono**, **Bun**, and **Drizzle ORM**, but at this stage, the frontend primarily uses `localStorage` for state persistence.

---

## 🌟 Features

- ✅ Add new activity items
- 🔁 Toggle completion status of an activity
- ❌ Remove an activity from the list
- ♻️ Persist activities between page reloads using `localStorage`
- 🚀 Backend setup with Hono and Bun (optional, for future expansion)

---

## 🛠 Tech Stack

### Frontend
- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vite](https://vitejs.dev/) (if used)
- `localStorage` for persistence

### Backend (Optional at this stage)
- [Bun](https://bun.sh/) – modern JavaScript runtime
- [Hono](https://hono.dev/) – fast web framework for Bun
- [Drizzle ORM](https://orm.drizzle.team/) – type-safe and SQL-focused ORM for SQLite
- SQLite database

---

## 📦 Project Setup

### Clone the repo

```bash

