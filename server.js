const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/ai", async (req, res) => {
    const userText = req.body.prompt;

    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               model: "llama3:latest",

                prompt: `
You are an intelligent task planner.

User may ask for:
- single tasks
- multiple tasks
- schedules
- plans (days, months, weeks)

Your job:
1. Understand the intent
2. Expand the plan fully if needed
3. Convert the FINAL result into TODO items

OUTPUT RULES:
- Each TODO on a new line
- Start each line with: TODO:
- Be specific and complete
- Do NOT explain anything

User request:
${userText}
`,

                stream: false
            })
        });

        const data = await response.json();

        console.log("AI RESPONSE:\n", data.response);

        res.json({ reply: data.response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ reply: "AI error" });
    }
});

app.listen(3000, () => {
    console.log("AI server running on http://localhost:3000");
});
