const games = [
    { name: "Celeste", url: "games/Celeste/index.html" },
    { name: "Example Game 2", url: "games/game2/index.html" }
];

const list = document.getElementById("gameList");
const search = document.getElementById("search");
const themeToggle = document.getElementById("themeToggle");

function renderGames(filter="") {
    list.innerHTML = "";
    games
        .filter(g => g.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(game => {
            const li = document.createElement("li");
            li.textContent = game.name;
            li.onclick = () => window.location = game.url;
            list.appendChild(li);
        });
}

search.oninput = () => renderGames(search.value);

themeToggle.onclick = () =>
    document.body.classList.toggle("dark");

renderGames();
