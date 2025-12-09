const games = [
    { name: "Celeste", url: "games/celeste/index.html" },
    { name: "Slow roads", url: "games/Slow roads/index.html" },
    { name: "Hollow Knight", url: "games/Hollow knight/index.html" },
    { name: "Candy Crush", url: "games/Candy Crush/index.html" },
    { name: "Buckshot roulette", url: "games/buckshot roulette/index.html" },
    { name: "Ultrakill", url: "games/ultrakill/index.html" },
    { name: "Deltarune", url: "games/Deltarune/index.html" },
    { name: "Time shooter", url: "games/Time shooter/index.html" },
    { name: "Dont you lecture me about your 30 dollar website", url: "games/Dont you lecture me about your 30 dollar website/index.html" },
    { name: "Bridge Race", url: "games/Bridge Race/index.html" },
    { name: "Bitlife", url: "games/bitlife/index.html" },
    { name: "Elastic Man", url: "games/Elastic man/index.html" },
    { name: "Minecraft 0.30", url: "games/Minecraft/index.html" },
    { name: "Minecraft 1.8.8", url: "games/Minecraft 1.8.8/index.html" },
    { name: "Burnout extreme drift 2", url: "games/Burnout extreme drift 2/index.html" },
    { name: "level devil", url: "games/level devil/index.html" },
    { name: "Small World Cup", url: "games/Small world cup/index.html" },
    { name: "Drift Boss", url: "games/Drift Boss/index.html" },
    { name: "Snow Rider 3D", url: "games/Snow rider 3D/index.html" },
    { name: "Clash of Vikings", url: "games/clash of vikings/index.html" },
    { name: "Duck life 4", url: "games/Duck Life 4/index.html" },
    { name: "tattletail", url: "games/tattletail/index.html" },
    { name: "Win The Whitehouse", url: "games/win the whitehouse/index.html" },
];  

// (No background animation) Keep script focused on game list and theme toggle

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
