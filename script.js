const games = [
    { name: "Celeste", url: "games/celeste/index.html" },
    { name: "Slow roads", url: "games/Slow roads/index.html" }
    { name: "Hollow knight", url: "games/Hollow knight/index.html" },
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
