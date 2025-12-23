// ================= TODO LOGIC =================
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (!text) return;
    addTodo(text);
    todoInput.value = "";
});

function addTodo(text) {
    const li = document.createElement("li");

    const left = document.createElement("div");
    left.className = "todo-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    checkbox.onchange = () => {
        li.classList.toggle("completed");
        updateStatus();
    };

    left.appendChild(checkbox);
    left.appendChild(span);

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete-btn";
    del.onclick = () => {
        li.remove();
        updateStatus();
    };

    li.appendChild(left);
    li.appendChild(del);
    todoList.appendChild(li);

    updateStatus();
}


// ================= CHAT + AI =================
const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");

sendBtn.addEventListener("click", async () => {
    const msg = chatInput.value.trim();
    if (!msg) return;

    addUserMsg(msg);
    chatInput.value = "";

    const aiReply = await callAI(msg);
    addBotMsg(aiReply);

    // MULTIPLE TODO HANDLING
    const lines = aiReply.split("\n");
    lines.forEach(line => {
        const match = line.match(/TODO:\s*(.+)/i);
        if (match && match[1]) {
            addTodo(match[1].trim());
        }
    });
});

function addUserMsg(text) {
    const div = document.createElement("div");
    div.className = "user-msg";
    div.textContent = text;
    chatBody.appendChild(div);
}

function addBotMsg(text) {
    const div = document.createElement("div");
    div.className = "bot-msg";
    div.textContent = text;
    chatBody.appendChild(div);
}

// ================= AI CALL =================
async function callAI(prompt) {
    const res = await fetch("http://localhost:3000/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    return data.reply;
}


function updateStatus() {
    const total = document.querySelectorAll("#todoList li").length;
    const completed = document.querySelectorAll("#todoList li.completed").length;
    document.getElementById("statusText").textContent =
        `Completed: ${completed} | Uncompleted: ${total - completed}`;
}

