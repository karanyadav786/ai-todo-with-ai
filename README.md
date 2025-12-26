# AI Todo List

An AI-powered Todo List application that helps users create, organize, and plan tasks using natural language.

This project uses a local Large Language Model (LLM) to generate tasks intelligently while keeping all data private and cost-free.

---

## Live Demo

**Frontend (Deployed on Netlify)**  
https://694b145257fa5019da56abdd--ai-todo-with-ai.netlify.app/

**Note:**  
The deployed version demonstrates the UI and logic.  
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
- Backend: Node.js (server.js)  
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

--- 

# Example Prompt: 

Create a 30-day study plan. I want to read Chapter 1 to Chapter 30. Assign exactly one chapter per day. Format the output strictly like this: Day 1: Chapter 1 Day 2: Chapter 2 Day 3: Chapter 3 ... Day 30: Chapter 30 Do not add any explanation or extra text.

## AI Output

```text
TODO: Day 1: Chapter 1
TODO: Day 2: Chapter 2
TODO: Day 3: Chapter 3
TODO: Day 4: Chapter 4
TODO: Day 5: Chapter 5
TODO: Day 6: Chapter 6
TODO: Day 7: Chapter 7
TODO: Day 8: Chapter 8
TODO: Day 9: Chapter 9
TODO: Day 10: Chapter 10
TODO: Day 11: Chapter 11
TODO: Day 12: Chapter 12
TODO: Day 13: Chapter 13
TODO: Day 14: Chapter 14
TODO: Day 15: Chapter 15
TODO: Day 16: Chapter 16
TODO: Day 17: Chapter 17
TODO: Day 18: Chapter 18
TODO: Day 19: Chapter 19
TODO: Day 20: Chapter 20
TODO: Day 21: Chapter 21
TODO: Day 22: Chapter 22
TODO: Day 23: Chapter 23
TODO: Day 24: Chapter 24
TODO: Day 25: Chapter 25
TODO: Day 26: Chapter 26
TODO: Day 27: Chapter 27
TODO: Day 28: Chapter 28
TODO: Day 29: Chapter 29
TODO: Day 30: Chapter 30




---


