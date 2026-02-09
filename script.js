const greeting = document.getElementById('greeting');
const dateDisplay = document.getElementById('date-display');
const hour = new Date().getHours();

if (hour < 12) greeting.innerText = "Selamat Pagi, Juara! ☀️";
else if (hour < 18) greeting.innerText = "Selamat Siang, Semangat! 🚀";
else greeting.innerText = "Selamat Malam, Istirahat ya! 🌙";

dateDisplay.innerText = new Date().toLocaleDateString('id-ID', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
});

// 2. To-Do List Logic
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.onclick = () => {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${input.value}</span>
            <button onclick="this.parentElement.remove()" style="background: #ff7675; padding: 5px 10px;">Hapus</button>
        `;
        todoList.appendChild(li);
        input.value = "";
    }
};

// 3. Focus Timer (25 Menit)
let timeLeft = 25 * 60;
let timerId = null;
const timerDisplay = document.getElementById('timer');

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.getElementById('start-timer').onclick = function() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        this.innerText = "Start";
    } else {
        this.innerText = "Pause";
        timerId = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft <= 0) {
                clearInterval(timerId);
                alert("Waktu fokus habis! Istirahat yuk.");
            }
        }, 1000);
    }
};

document.getElementById('reset-timer').onclick = () => {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 25 * 60;
    updateTimer();
    document.getElementById('start-timer').innerText = "Start";
};
