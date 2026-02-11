const games = [
    { name: "1 on 1 tennis", url: "games/1 on 1 tennis/index.html" },
    { name: "1v1.lol", url: "games/1v1.lol/index.html" },
    { name: "3D geometry dash", url: "games/3D geometry dash/index.html" },
    { name: "Age of War", url: "games/Age of war/index.html" },
    { name: "Bad Time simulator", url: "games/Bad Time simulator/index.html" },
    { name: "Basketball Stars", url: "games/Basketball stars/index.html" },
    { name: "Binding of Isac Wrath of The Lamb", url: "games/Binding of isac wrath of the lamb/index.html" },
    { name: "Bitlife", url: "games/bitlife/index.html" },
    { name: "Bridge Race", url: "games/Bridge Race/index.html" },
    { name: "Buckshot roulette", url: "games/buckshot roulette/index.html" },
    { name: "Burgentruck201x", url: "games/asgoretruckgame/index.html" },
    { name: "Burnout extreme drift 2", url: "games/Burnout extreme drift 2/index.html" },
    { name: "Candy Crush", url: "games/Candy Crush/index.html" },
    { name: "Celeste", url: "games/celeste/index.html" },
    { name: "Clash of Vikings", url: "games/clash of vikings/index.html" },
    { name: "Cookie Clicker", url: "games/Cookie Clicker/index.html" },
    { name: "Count Master Stickman games", url: "games/Count Masters Stickman games/index.html" },
    { name: "Crazy Cattle 3D", url: "games/Crazy Cattle 3D/index.html" },
    { name: "Crazy Chicken 3D", url: "games/Crazy Chicken 3D/index.html" },
    { name: "Crossy Road", url: "games/Crossy Road/index.html" },
    { name: "Deadly descent", url: "games/deadly descent/index.html" },
    { name: "Deltarune", url: "games/Deltarune/index.html" },
    { name: "Doblox", url: "games/Doblox/index.html" },
    { name: "Doge Miner", url: "games/Doge Miner/index.html" },
    { name: "Dont you lecture me about your 30 dollar website", url: "games/Dont you lecture me about your 30 dollar website/index.html" },
    { name: "Doom 64", url: "games/Doom 64/index.html" },
    { name: "Douchebag life", url: "games/Douchebag life/index.html" },
    { name: "Dragonball advanced warrior", url: "games/Dragon ball advanced warrior/index.html" },
    { name: "Dragonball ball Z legacy of goku", url: "games/Dragon ball Z legacy of goku/index.html" },
    { name: "Draw climber", url: "games/Draw climber/index.html" },
    { name: "Drift Boss", url: "games/Drift Boss/index.html" },
    { name: "Drive Mad", url: "games/Drive Mad/index.html" },
    { name: "Duck life 4", url: "games/Duck Life 4/index.html" },
    { name: "Elastic Man", url: "games/Elastic man/index.html" },
    { name: "Escape Road", url: "games/Escape Road/index.html" },
    { name: "Escape Road 2", url: "games/Escape Road 2/index.html" },
    { name: "Five Nights At Freddys", url: "games/five nights at freddys/index.html" },
    { name: "Five Nights at Freddys 2", url: "games/five nights at freddys 2/index.html" },
    { name: "Five Nights at Freddys 3", url: "games/five nights at freddys 3/index.html" },
    { name: "Five Nights at Freddys 4", url: "games/five nights at freddys 4/index.html" },
    { name: "Five Nights at Freddys 4 halloween", url: "games/five nights at freddys 4 halloween/index.html" },
    { name: "Five Nights at Freddys Sister Location", url: "games/five nights at freddys sister location/index.html" },
    { name: "Five Nights at Freddys Ultimate Custom Night", url: "games/five nights at freddys ultimate custom night/index.html" },
    { name: "Five Nights at freddys world", url: "games/Five nights at freddys World/index.html" },
    { name: "Friday Night Funkin", url: "games/friday night funkin/index.html" },
    { name: "Friday Night Funkin Dustin", url: "games/Friday Night Funkin dustin/index.html" },
    { name: "Geometry dash", url: "games/Geometry Dash/index.html" },
    { name: "Get Yoked", url: "games/Get yoked/index.html" },
    { name: "Gun Runner", url: "games/Gun Runner/index.html" },
    { name: "Gunspin", url: "games/Gunspin/index.html" },
    { name: "Half Life", url: "games/Half Life/index.html" },
    { name: "Happy Wheels", url: "games/Happy Wheels/index.html" },
    { name: "Hollow Knight", url: "games/Hollow knight/index.html" },
    { name: "Idle Breakout", url: "games/Idle breakout/index.html" },
    { name: "Jailbreak Obby", url: "games/Jailbreak Obby/index.html" },
    { name: "Karlson", url: "games/Karlson/index.html" },
    { name: "Learn to fly", url: "games/learn to fly/index.html" },
    { name: "Learn to fly 3", url: "games/learn to fly 3/index.html" },
    { name: "level devil", url: "games/level devil/index.html" },
    { name: "Minecraft 1.8.8", url: "games/Minecraft 1.8.8/index.html" },
    { name: "Minesweeper", url: "games/Minesweeper/index.html" },
    { name: "nba jam", url: "games/nba jam/index.html" },
    { name: "One Piece", url: "games/One Piece/index.html" },
    { name: "OvO", url: "games/OVO/index.html" },
    { name: "Papas Bakeria", url: "games/papas bakeria/index.html" },
    { name: "Papas Burgeria", url: "games/papas burgeria/index.html" },
    { name: "Papas Cheeseria", url: "games/papas cheeseria/index.html" },
    { name: "Papas Hot Doggeria", url: "games/papas doggeria/index.html" },
    { name: "Papas Pastaria", url: "games/papas pastaria/index.html" },
    { name: "Papas sushiria", url: "games/papas sushiria/index.html" },
    { name: "Parking Fury", url: "games/Parking Fury/index.html" },
    { name: "Peggle", url: "games/Peggle/index.html" },
    { name: "Plants VS zombies 2 gardenless", url: "games/Plants VS zombies 2 gardenless/index.html" },
    { name: "Pokemon red", url: "games/pokemon red/index.html" },
    { name: "Polytrack", url: "games/Polytrack/index.html" },
    { name: "R.E.P.O", url: "games/R.E.P.O/index.html" },
    { name: "Retro Bowl", url: "games/Retro Bowl/index.html" },
    { name: "Slope Plus", url: "games/slope Plus/index.html" },
    { name: "Slow roads", url: "games/Slow roads/index.html" },
    { name: "Small World Cup", url: "games/Small world cup/index.html" },
    { name: "Smash Karts", url: "games/smash karts/index.html" },
    { name: "Snow Rider 3D", url: "games/Snow rider 3D/index.html" },
    { name: "Snow Road", url: "games/Snow road/index.html" },
    { name: "Spacebar Clicker", url: "games/Spacebar Clicker/index.html" },
    { name: "Steal A Brainrot", url: "games/steal a brainrot/index.html" },
    { name: "Stick Merge", url: "games/Stick Merge/index.html" },
    { name: "Stickman Hook", url: "games/Stickman Hook/index.html" },
    { name: "Subway Surfers", url: "games/Subway Surfers/index.html" },
    { name: "Superhot", url: "games/Super Hot/index.html" },
    { name: "Super Mario Land", url: "games/super mario land/index.html" },
    { name: "Super Smash Bros 64", url: "games/Super Smash Bros 64/index.html" },
    { name: "Super Star Car", url: "games/Super star car/index.html" },
    { name: "Tanuki sunset", url: "games/tanuki sunset/index.html" },
    { name: "tattletail", url: "games/tattletail/index.html" },
    { name: "temple run 2", url: "games/Temple run 2/index.html" },
    { name: "thats not my neighbor", url: "games/thats not my neighbor/index.html" },
    { name: "Time shooter", url: "games/Time shooter/index.html" },
    { name: "Tom Clancys Rainbow Six", url: "games/Tom Clancys Rainbow Six/index.html" },
    { name: "Ultrakill", url: "games/ultrakill/index.html" },
    { name: "Wordle", url: "games/Wordle/index.html" },
    { name: "You VS 100 Skibidi", url: "games/You VS 100 Skibidi/index.html" },
]

// Movies array - add movies following the same format as games
// Example: { name: "Movie Title", url: "movies/Movie Name/index.html" }
const movies = [
    { name: "Shrek", url: "https://drive.google.com/file/d/181FkiZwd4SyWsqpTrv8HZYTc-To9vpBG/view?usp=sharing" },
]

document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById("itemList");
    const search = document.getElementById("search");
    const gamesBtn = document.getElementById("gamesBtn");
    const moviesBtn = document.getElementById("moviesBtn");

    let currentSection = "games";

    let animating = false;

    const movieCredit = document.getElementById("movieCredit");

    function updateMovieCredit() {
        if (movieCredit) {
            if (currentSection === "movies") {
                movieCredit.classList.add("show");
            } else {
                movieCredit.classList.remove("show");
            }
        }
    }

    function switchSection(section) {
        if (section === currentSection || animating) return;
        animating = true;

        // prepare out listener then start out animation
        const onOut = (e) => {
            if (e && e.target !== itemList) return;
            itemList.removeEventListener('animationend', onOut);
            itemList.classList.remove('anim-out');

            // update section and active button state
            currentSection = section;
            if (section === "games") {
                gamesBtn.classList.add("section-active");
                moviesBtn.classList.remove("section-active");
            } else {
                gamesBtn.classList.remove("section-active");
                moviesBtn.classList.add("section-active");
            }

            updateMovieCredit();
            renderItems(search.value);

            // trigger enter animation
            void itemList.offsetWidth;
            const onIn = (ev) => {
                if (ev && ev.target !== itemList) return;
                itemList.removeEventListener('animationend', onIn);
                itemList.classList.remove('anim-in');
                animating = false;
            };
            itemList.addEventListener('animationend', onIn);
            itemList.classList.add('anim-in');
        };

        itemList.addEventListener('animationend', onOut, { once: true });
        itemList.classList.add('anim-out');

        // If animations are disabled (reduced-motion / no animation), run out handler immediately
        const cs = getComputedStyle(itemList);
        const dur = parseFloat(cs.animationDuration) || 0;
        if (!cs.animationName || cs.animationName === 'none' || dur === 0) {
            // call onOut without an event
            onOut();
        }
    }

    function renderItems(filter="") {
        const items = currentSection === "games" ? games : movies;
        itemList.innerHTML = "";
        items
            .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.name;
                if (currentSection === 'games') {
                    li.onclick = () => window.location = item.url;
                } else {
                    li.onclick = (e) => {
                        e.preventDefault();
                        // open movie in a new tab (no iframe preview)
                        const w = window.open(item.url, '_blank');
                        if (w) try { w.opener = null; } catch (_) {}
                    };
                }
                itemList.appendChild(li);
            });
    }

    if (gamesBtn && moviesBtn && search && itemList) {
        gamesBtn.addEventListener('click', () => switchSection("games"));
        moviesBtn.addEventListener('click', () => switchSection("movies"));
        search.addEventListener('input', () => renderItems(search.value));
    }

    renderItems();
});
