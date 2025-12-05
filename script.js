const games = [
    { name: "Celeste", url: "games/celeste/index.html" },
    { name: "Slow roads", url: "games/Slow roads/index.html" },
    { name: "Hollow Knight", url: "games/Hollow knight/index.html" },
    { name: "Candy Crush", url: "games/Candy Crush/index.html" },
    { name: "Buckshot roulette", url: "games/buckshot roulette/index.html" },
    { name: "Ultrakill", url: "games/ultrakill/index.html" },
    { name: "Deltarune", url: "games/Deltarune/index.html" },
    { name: "Game 10", url: "games/game10/index.html" },
    { name: "Game 11", url: "games/game11/index.html" },
    { name: "Game 12", url: "games/game12/index.html" },
    { name: "Game 13", url: "games/game13/index.html" },
    { name: "Game 14", url: "games/game14/index.html" },
    { name: "Game 15", url: "games/game15/index.html" },
    { name: "Game 16", url: "games/game16/index.html" },
    { name: "Game 17", url: "games/game17/index.html" },
    { name: "Game 18", url: "games/game18/index.html" },
    { name: "Game 19", url: "games/game19/index.html" },
    { name: "Game 20", url: "games/game20/index.html" },
    { name: "Game 21", url: "games/game21/index.html" },
    { name: "Game 22", url: "games/game22/index.html" },
    { name: "Game 23", url: "games/game23/index.html" },
    { name: "Game 24", url: "games/game24/index.html" },
    { name: "Game 25", url: "games/game25/index.html" },
    { name: "Game 26", url: "games/game26/index.html" },
    { name: "Game 27", url: "games/game27/index.html" },
    { name: "Game 28", url: "games/game28/index.html" },
    { name: "Game 29", url: "games/game29/index.html" },
    { name: "Game 30", url: "games/game30/index.html" },
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
