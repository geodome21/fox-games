const games = [
    { name: "Celeste", url: "games/celeste/index.html" },
    { name: "Example Game 2", url: "games/game2/index.html" }
];

const list = document.getElementById("gameList");
const search = document.getElementById("search");
const themeToggle = document.getElementById("themeToggle");

function renderGames(filter = "") {
    if (!list) return;
    list.innerHTML = "";
    const filtered = games.filter(g => g.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(game => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = game.name;
        a.href = game.url;
        a.rel = "noopener";
        a.target = "_self";
        li.appendChild(a);
        list.appendChild(li);
    });
}

if (search) {
    search.addEventListener('input', () => renderGames(search.value));
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => document.body.classList.toggle('dark'));
}

renderGames();
