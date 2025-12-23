# AI Todo List

An AI-powered Todo List application that helps users create, organize, and plan tasks using natural language.

This project uses a **local Large Language Model (LLM)** to generate tasks intelligently while keeping all data private and cost-free.

---

## Live Demo

**Frontend (Deployed on Netlify)**  
https://694b145257fa5019da56abdd--ai-todo-with-ai.netlify.app/

**Note**  
The deployed version demonstrates the user interface and application logic.  
AI features work only when the backend is run locally using Ollama.

---

## Features

- Add and delete todo items
- Generate tasks using AI prompts
- Create daily, weekly, or long-term plans
- Modern, responsive user interface
- No database and no authentication
- Privacy-first local AI inference

---

## Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js, Express  
- AI / LLM: Ollama (Local LLM)  
- Model: gemma3:4b  

---

## Project Structure

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

## Run Locally

### Install dependencies

```bash
npm install
Start the AI backend
Make sure Ollama is installed on your system.

bash
Copy code
ollama run gemma3:4b
node server.js
Open the frontend
Open index.html in your browser.

AI Integration Details
This project uses a local AI model via Ollama instead of cloud-based AI APIs.

# How it works
The user enters a natural language prompt

The backend sends the prompt to the local LLM

The AI converts the request into structured todo items

Generated todos are automatically added to the UI

# Why local AI
No API keys required

No usage cost

Full data privacy

Works offline

# Deployment
Frontend is deployed using Netlify

Backend (AI server) runs locally using Node.js and Ollama

Because Ollama runs locally, AI features are intentionally not enabled in the public deployment.

# Use Cases
Daily task management

Workout or study schedules

Long-term planning (days, weeks, months)

AI-assisted productivity workflows