const body = document.body;

body.innerHTML = `
<div id="cont">
<label>Введи полученную фразу:</label>
<input id="answer-input">
<button id="btn">Отправить ответ</button>
<div id="answer"></div>
</div>
<iframe src="https://scratch.mit.edu/projects/534588677/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
`

const input = document.getElementById('answer-input');
const btn = document.getElementById('btn');
const answer = document.getElementById('answer');

btn.addEventListener('click', () => {
    let answ = input.value;
    if (answ.toLowerCase() === 'красная звезда укажет путь к времени') {
        answer.innerHTML = `
<p>Ответ верный. Условие следующей задачи:</p>
<p id="good">Ты нашел пасхалку Джеймса Холлидэя!!!</p>
<p>Теперь все ресурсы игры могут принадлежать тебе. Но для этого нужно еще кое-что сделать...<br>
Собери красные звезды с поля. Чтобы сделать это, закрась их <span id="color">ЖЕЛТЫМ</span> цветом.<br>
После отнеси их в Центр переработки энергии. Там подскажут, что делать дальше.</p>
`;
    } else {
        answer.innerHTML = `<p>Ответ неверный. Проверь свою запись и повтори попытку.</p>`;
    }
});
