# AI Todo List 🧠✅

An AI-powered Todo List application that helps users create, organize, and plan tasks intelligently using natural language.

The project combines a modern frontend with a **local AI model (LLM)** to provide privacy-first, cost-free AI task generation.

---

## 🌐 Live Demo

🔗 **Frontend (Deployed on Netlify):**  
https://694b145257fa5019da56abdd--ai-todo-with-ai.netlify.app/

> Note: The deployed version demonstrates the UI and logic.  
> AI functionality works when the backend is run locally.

---

## 🚀 Features

- ➕ Add and delete todo items
- 🤖 AI-generated tasks from natural language prompts
- 📋 Multi-task and schedule planning (days, weeks, months)
- 🎨 Modern, responsive, card-based UI
- 🔒 No database, no login, no user data storage
- 🖥️ Local AI inference (privacy-first)

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **AI / LLM:** Ollama (Local Large Language Model)  
- **Model Used:** `gemma3:4b` (configurable)

---

## 📂 Project Structure

ai-todo-with-ai/
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Run Locally

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Start the AI backend
Make sure Ollama is installed.

bash
Copy code
ollama run gemma3:4b
node server.js
3️⃣ Open the frontend
Open index.html in your browser.

🤖 AI Integration Details
This project uses a local AI model via Ollama instead of cloud APIs.

How it works:
User enters a natural language prompt

Backend sends the prompt to the local LLM

AI converts the request into structured todo items

Todos are automatically added to the UI

Why local AI?
✅ No API costs

✅ Full privacy

✅ Works offline

✅ No external dependencies

🌐 Deployment
Frontend: Deployed on Netlify
🔗 https://694b145257fa5019da56abdd--ai-todo-with-ai.netlify.app/

Backend (AI): Runs locally using Node.js and Ollama

AI features are intentionally kept local to demonstrate privacy-first architecture.

📌 Use Cases
Daily task management

Workout or study schedules

Long-term planning (days, weeks, months)

AI-assisted productivity workflows

