const games = [
    { name: "1v1.lol", url: "games/1v1.lol/index.html" },
    { name: "3D geometry dash", url: "games/3D geometry dash/index.html" },
    { name: "Age of War", url: "games/Age of war/index.html" },
    { name: "Bad Time simulator", url: "games/Bad Time simulator/index.html" },
    { name: "Basketball Stars", url: "games/Basketball stars/index.html" },
    { name: "Bitlife", url: "games/bitlife/index.html" },
    { name: "Bridge Race", url: "games/Bridge Race/index.html" },
    { name: "Buckshot roulette", url: "games/buckshot roulette/index.html" },
    { name: "Burnout extreme drift 2", url: "games/Burnout extreme drift 2/index.html" },
    { name: "Candy Crush", url: "games/Candy Crush/index.html" },
    { name: "Celeste", url: "games/celeste/index.html" },
    { name: "Clash of Vikings", url: "games/clash of vikings/index.html" },
    { name: "Cookie Clicker", url: "games/Cookie Clicker/index.html" },
    { name: "Crossy Road", url: "games/Crossy Road/index.html" },
    { name: "Deadly descent", url: "games/deadly descent/index.html" },
    { name: "Deltarune", url: "games/Deltarune/index.html" },
    { name: "Doblox", url: "games/Doblox/index.html" },
    { name: "Doge Miner", url: "games/Doge Miner/index.html" },
    { name: "Dont you lecture me about your 30 dollar website", url: "games/Dont you lecture me about your 30 dollar website/index.html" },
    { name: "Doom 64", url: "games/Doom 64/index.html" },
    { name: "Draw climber", url: "games/Draw climber/index.html" },
    { name: "Drift Boss", url: "games/Drift Boss/index.html" },
    { name: "Drive Mad", url: "games/Drive Mad/index.html" },
    { name: "Duck life 4", url: "games/Duck Life 4/index.html" },
    { name: "Elastic Man", url: "games/Elastic man/index.html" },
    { name: "Escape Road", url: "games/Escape Road/index.html" },
    { name: "Five Nights At Freddys", url: "games/five nights at freddys/index.html" },
    { name: "Five Nights at Freddys 2", url: "games/five nights at freddys 2/index.html" },
    { name: "Five Nights at Freddys 3", url: "games/five nights at freddys 3/index.html" },
    { name: "Five Nights at Freddys 4", url: "games/five nights at freddys 4/index.html" },
    { name: "Five Nights at Freddys 4 halloween", url: "games/five nights at freddys 4 halloween/index.html" },
    { name: "Slow roads", url: "games/Slow roads/index.html" },
    { name: "Hollow Knight", url: "games/Hollow knight/index.html" },
    { name: "Ultrakill", url: "games/ultrakill/index.html" },
    { name: "Time shooter", url: "games/Time shooter/index.html" },
    { name: "Minecraft 0.30", url: "games/Minecraft/index.html" },
    { name: "Minecraft 1.8.8", url: "games/Minecraft 1.8.8/index.html" },
    { name: "level devil", url: "games/level devil/index.html" },
    { name: "Small World Cup", url: "games/Small world cup/index.html" },
    { name: "Snow Rider 3D", url: "games/Snow rider 3D/index.html" },
    { name: "tattletail", url: "games/tattletail/index.html" },
    { name: "Gunspin", url: "games/Gunspin/index.html" },
    { name: "Polytrack", url: "games/Polytrack/index.html" },
    { name: "Slope", url: "games/Slope/index.html" },
    { name: "Geometry dash", url: "games/Geometry dash/index.html" },
    { name: "Minesweeper", url: "games/Minesweeper/index.html" },
    { name: "nba jam", url: "games/nba jam/index.html" },
    { name: "Stick Merge", url: "games/Stick Merge/index.html" },
    { name: "Smash Karts", url: "games/smash karts/index.html" },
    { name: "Super Star Car", url: "games/Super star car/index.html" },
    { name: "R.E.P.O", url: "games/R.E.P.O/index.html" },
    { name: "Steal A Brainrot", url: "games/steal a brainrot/index.html" },
    { name: "Get Yoked", url: "games/Get yoked/index.html" },
    { name: "thats not my neighbor", url: "games/thats not my neighbor/index.html" },
    { name: "Snow Road", url: "games/Snow road/index.html" },
    { name: "Tanuki sunset", url: "games/tanuki sunset/index.html" },
    { name: "Learn to fly", url: "games/learn to fly/index.html" },
    { name: "Learn to fly 3", url: "games/learn to fly 3/index.html" },
    { name: "Retro Bowl", url: "games/Retro Bowl/index.html" },
    { name: "Superhot", url: "games/Super Hot/index.html" },
    { name: "Friday Night Funkin", url: "games/friday night funkin/index.html" },
    { name: "Wordle", url: "games/Wordle/index.html" },
    { name: "Super Smash Bros 64", url: "games/Super Smash Bros 64/index.html" },
    { name: "Papas Pizzaria", url: "games/Papas pizzaria/index.html" },
    { name: "Five Nights at Freddys Ultimate Custom Night", url: "games/five nights at freddys ultimate custom night/index.html" },
    { name: "Five Nights at Freddys Sister Location", url: "games/five nights at freddys sister location/index.html" },
]


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

// Update theme button text based on current theme
function updateThemeButton() {
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Apply theme and persist
function setTheme(theme) {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    try { localStorage.setItem("theme", theme); } catch (e) {}
    updateThemeButton();
}

// Toggle theme and update
themeToggle.onclick = () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    setTheme(newTheme);
};

// initialize from storage if available
try {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
    else updateThemeButton();
} catch (e) {
    updateThemeButton();
}

renderGames();
