
# 🎬 Final Project – Full Stack Movie App (React + Express)

This is a full-stack web application built with **React (Vite)** on the frontend and **Express.js** on the backend. The app allows users to interact with movie content (e.g., view, filter, favorite, etc.).

---

## 🚀 Tech Stack

- **Frontend:** React (Vite), JavaScript, HTML, CSS
- **Backend:** Node.js, Express
- **Package Manager:** npm
- **Dev Tools:** VS Code, Git, GitHub

---

## 🖥 Folder Structure

```
Final-Project/
├── client/             # React frontend (Vite)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       └── index.css
│
├── server/             # Express backend
│   ├── index.js
│   └── routes/         # (Optional) API routes
│
└── README.md           # Project documentation
```

---

## 🛠 Setup Instructions

### 📦 Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)
- (Optional) [VS Code](https://code.visualstudio.com/)

---

## ⚙️ Running the App Locally

> Open two terminals or terminal tabs: one for the backend, one for the frontend.

### 1. Clone the Repository

```bash
git clone https://github.com/pyroserpent/Final-Project.git
cd Final-Project
```

---

### 2. Start the Backend (Express)

In your first terminal tab, run:

```bash
cd server
npm install
node index.js
```

The backend will start on: [http://localhost:3001](http://localhost:3001)

---

### 3. Start the Frontend (React + Vite)

Open a new terminal tab, then run:

```bash
cd client
npm install
npm run dev
```

The frontend will start on: [http://localhost:5173](http://localhost:5173)

---

## 🌐 App Access

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:3001](http://localhost:3001)

> ⚠️ *Note:* Accessing the backend directly in a browser may show `Cannot GET /` — this is expected. The backend only serves API routes.


## 🧪 TODO / Future Improvements

- Add authentication & user sessions
- Connect to a database (e.g., MongoDB or PostgreSQL)
- Add API validation and error handling
- Deploy using Render / Vercel / Railway

---

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT License
