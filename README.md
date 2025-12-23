# AI Todo List 🧠✅

An AI-powered Todo List application that helps users create, organize, and plan tasks using natural language.  
The project uses a **local Large Language Model (LLM)** for privacy-first, cost-free AI task generation.

---

## 🌐 Live Demo

🔗 **Frontend (Deployed on Netlify):**  
https://694b145257fa5019da56abdd--ai-todo-with-ai.netlify.app/

> ⚠️ Note:  
> The deployed version demonstrates the UI and logic.  
> AI features work when the backend is run locally using Ollama.

---

## 🚀 Features

- Add and delete todo items
- Generate tasks using AI prompts
- Create multi-day, weekly, or long-term plans
- Modern, responsive card-based UI
- No database, no authentication
- Local AI inference for privacy and zero API cost

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **AI / LLM:** Ollama (Local LLM)  
- **Model:** `gemma3:4b`

---

## 📂 Project Structure

ai-todo-with-ai/
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
└── README.md


---

## ⚙️ Run Locally

### 1️⃣ Install dependencies
```bash
npm install
  
### 2️⃣ Start the AI backend

Make sure Ollama is installed and running.

### 3️⃣ Open the frontend

Open index.html in your browser.


🤖 AI Integration Details

This project uses a local AI model via Ollama instead of cloud-based APIs.

How it works

User enters a natural language prompt

Backend sends the prompt to the local LLM

AI converts the request into structured todo items

Todos are automatically added to the UI

Why local AI?

No API keys required

No usage cost

Full data privacy

Works offline

🌐 Deployment

Frontend: Deployed on Netlify
🔗 https://694b145257fa5019da56abdd--ai-todo-with-ai.netlify.app/

Backend (AI): Runs locally using Node.js and Ollama

AI is intentionally kept local to demonstrate a privacy-first architecture.

## 📌 Use Cases

Daily task management

Workout or study schedules

Long-term planning (days, weeks, months)

AI-assisted productivity workflows