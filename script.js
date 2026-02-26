const games = [
    { name: "1 on 1 tennis", url: "games/1 on 1 tennis/index.html", image: "images/1-on-1-tennis.jpg" },
    { name: "1v1.lol", url: "games/1v1.lol/index.html", image: "images/1v1-lol.jpg" },
    { name: "3D geometry dash", url: "games/3D geometry dash/index.html", image: "images/3d-geometry-dash.jpg" },
    { name: "Age of War", url: "games/Age of war/index.html", image: "images/age-of-war.jpg" },
    { name: "Bad Time simulator", url: "games/Bad Time simulator/index.html", image: "images/bad-time-simulator.jpg" },
    { name: "Basketball Stars", url: "games/Basketball stars/index.html", image: "images/basketball-stars.jpg" },
    { name: "Binding of Isac Wrath of The Lamb", url: "games/Binding of isac wrath of the lamb/index.html", image: "images/binding-of-isaac.jpg" },
    { name: "Bitlife", url: "games/bitlife/index.html", image: "images/bitlife.jpg" },
    { name: "Bridge Race", url: "games/Bridge Race/index.html", image: "images/bridge-race.jpg" },
    { name: "Buckshot roulette", url: "games/buckshot roulette/index.html", image: "images/buckshot-roulette.jpg" },
    { name: "Burgentruck201x", url: "games/asgoretruckgame/index.html", image: "images/asgore-truck.jpg" },
    { name: "Burnout extreme drift 2", url: "games/Burnout extreme drift 2/index.html", image: "images/burnout-drift.jpg" },
    { name: "Candy Crush", url: "games/Candy Crush/index.html", image: "images/candy-crush.jpg" },
    { name: "Celeste", url: "games/celeste/index.html", image: "images/celeste.jpg" },
    { name: "Clash of Vikings", url: "games/clash of vikings/index.html", image: "images/clash-vikings.jpg" },
    { name: "Cookie Clicker", url: "games/Cookie Clicker/index.html", image: "images/cookie-clicker.jpg" },
    { name: "Count Master Stickman games", url: "games/Count Masters Stickman games/index.html", image: "images/count-master.jpg" },
    { name: "Crazy Cattle 3D", url: "games/Crazy Cattle 3D/index.html", image: "images/crazy-cattle-3d.jpg" },
    { name: "Crazy Chicken 3D", url: "games/Crazy Chicken 3D/index.html", image: "images/crazy-chicken-3d.jpg" },
    { name: "Crossy Road", url: "games/Crossy Road/index.html", image: "images/crossy-road.jpg" },
    { name: "Deadly descent", url: "games/deadly descent/index.html", image: "images/deadly-descent.jpg" },
    { name: "Deltarune", url: "games/Deltarune/index.html", image: "images/deltarune.jpg" },
    { name: "Doblox", url: "games/Doblox/index.html", image: "images/doblox.jpg" },
    { name: "Doge Miner", url: "games/Doge Miner/index.html", image: "images/doge-miner.jpg" },
    { name: "Dont you lecture me about your 30 dollar website", url: "games/Dont you lecture me about your 30 dollar website/index.html", image: "images/dont-lecture.jpg" },
    { name: "Doom 64", url: "games/Doom 64/index.html", image: "images/doom-64.jpg" },
    { name: "Douchebag life", url: "games/Douchebag life/index.html", image: "images/douchebag-life.jpg" },
    { name: "Dragonball advanced warrior", url: "games/Dragon ball advanced warrior/index.html", image: "images/dragon-advanced.jpg" },
    { name: "Dragonball ball Z legacy of goku", url: "games/Dragon ball Z legacy of goku/index.html", image: "images/dbz-legacy.jpg" },
    { name: "Draw climber", url: "games/Draw climber/index.html", image: "images/draw-climber.jpg" },
    { name: "Drift Boss", url: "games/Drift Boss/index.html", image: "images/drift-boss.jpg" },
    { name: "Drive Mad", url: "games/Drive Mad/index.html", image: "images/drive-mad.jpg" },
    { name: "Duck life 4", url: "games/Duck Life 4/index.html", image: "images/duck-life-4.jpg" },
    { name: "Elastic Man", url: "games/Elastic man/index.html", image: "images/elastic-man.jpg" },
    { name: "Escape Road", url: "games/Escape Road/index.html", image: "images/escape-road.jpg" },
    { name: "Escape Road 2", url: "games/Escape Road 2/index.html", image: "images/escape-road-2.jpg" },
    { name: "Five Nights At Freddys", url: "games/five nights at freddys/index.html", image: "images/fnaf-1.jpg" },
    { name: "Five Nights at Freddys 2", url: "games/five nights at freddys 2/index.html", image: "images/fnaf-2.jpg" },
    { name: "Five Nights at Freddys 3", url: "games/five nights at freddys 3/index.html", image: "images/fnaf-3.jpg" },
    { name: "Five Nights at Freddys 4", url: "games/five nights at freddys 4/index.html", image: "images/fnaf-4.jpg" },
    { name: "Five Nights at Freddys 4 halloween", url: "games/five nights at freddys 4 halloween/index.html", image: "images/fnaf-4-halloween.jpg" },
    { name: "Five Nights at Freddys Sister Location", url: "games/five nights at freddys sister location/index.html", image: "images/fnaf-sl.jpg" },
    { name: "Five Nights at Freddys Ultimate Custom Night", url: "games/five nights at freddys ultimate custom night/index.html", image: "images/fnaf-ucn.jpg" },
    { name: "Five Nights at freddys world", url: "games/Five nights at freddys World/index.html", image: "images/fnaf-world.jpg" },
    { name: "Friday Night Funkin", url: "games/friday night funkin/index.html", image: "images/fnf.jpg" },
    { name: "Friday Night Funkin Dustin", url: "games/Friday Night Funkin dustin/index.html", image: "images/fnf-dustin.jpg" },
    { name: "Geometry dash", url: "games/Geometry Dash/index.html", image: "images/geometry-dash.jpg" },
    { name: "Get Yoked", url: "games/Get yoked/index.html", image: "images/get-yoked.jpg" },
    { name: "Gun Runner", url: "games/Gun Runner/index.html", image: "images/gun-runner.jpg" },
    { name: "Gunspin", url: "games/Gunspin/index.html", image: "images/gunspin.jpg" },
    { name: "Half Life", url: "games/Half Life/index.html", image: "images/half-life.jpg" },
    { name: "Happy Wheels", url: "games/Happy Wheels/index.html", image: "images/happy-wheels.jpg" },
    { name: "Hollow Knight", url: "games/Hollow knight/index.html", image: "images/hollow-knight.jpg" },
    { name: "Idle Breakout", url: "games/Idle breakout/index.html", image: "images/idle-breakout.jpg" },
    { name: "Jailbreak Obby", url: "games/Jailbreak Obby/index.html", image: "images/jailbreak-obby.jpg" },
    { name: "Karlson", url: "games/Karlson/index.html", image: "images/karlson.jpg" },
    { name: "Learn to fly", url: "games/learn to fly/index.html", image: "images/learn-to-fly.jpg" },
    { name: "Learn to fly 3", url: "games/learn to fly 3/index.html", image: "images/learn-to-fly-3.jpg" },
    { name: "level devil", url: "games/level devil/index.html", image: "images/level-devil.jpg" },
    { name: "Minecraft 1.8.8", url: "games/Minecraft 1.8.8/index.html", image: "images/minecraft.jpg" },
    { name: "Minesweeper", url: "games/Minesweeper/index.html", image: "images/minesweeper.jpg" },
    { name: "nba jam", url: "games/nba jam/index.html", image: "images/nba-jam.jpg" },
    { name: "One Piece", url: "games/One Piece/index.html", image: "images/one-piece.jpg" },
    { name: "OvO", url: "games/OVO/index.html", image: "images/ovo.jpg" },
    { name: "Papas Bakeria", url: "games/papas bakeria/index.html", image: "images/papas-bakeria.jpg" },
    { name: "Papas Burgeria", url: "games/papas burgeria/index.html", image: "images/papas-burgeria.jpg" },
    { name: "Papas Cheeseria", url: "games/papas cheeseria/index.html", image: "images/papas-cheeseria.jpg" },
    { name: "Papas Hot Doggeria", url: "games/papas doggeria/index.html", image: "images/papas-doggeria.jpg" },
    { name: "Papas Pastaria", url: "games/papas pastaria/index.html", image: "images/papas-pastaria.jpg" },
    { name: "Papas sushiria", url: "games/papas sushiria/index.html", image: "images/papas-sushiria.jpg" },
    { name: "Parking Fury", url: "games/Parking Fury/index.html", image: "images/parking-fury.jpg" },
    { name: "Peggle", url: "games/Peggle/index.html", image: "images/peggle.jpg" },
    { name: "Plants VS zombies 2 gardenless", url: "games/Plants VS zombies 2 gardenless/index.html", image: "images/pvz-2.jpg" },
    { name: "Pokemon red", url: "games/pokemon red/index.html", image: "images/pokemon-red.jpg" },
    { name: "Polytrack", url: "games/Polytrack/index.html", image: "images/polytrack.jpg" },
    { name: "R.E.P.O", url: "games/R.E.P.O/index.html", image: "images/repo.jpg" },
    { name: "Retro Bowl", url: "games/Retro Bowl/index.html", image: "images/retro-bowl.jpg" },
    { name: "Slope Plus", url: "games/slope Plus/index.html", image: "images/slope-plus.jpg" },
    { name: "Slow roads", url: "games/Slow roads/index.html", image: "images/slow-roads.jpg" },
    { name: "Small World Cup", url: "games/Small world cup/index.html", image: "images/small-world-cup.jpg" },
    { name: "Smash Karts", url: "games/smash karts/index.html", image: "images/smash-karts.jpg" },
    { name: "Snow Rider 3D", url: "games/Snow rider 3D/index.html", image: "images/snow-rider-3d.jpg" },
    { name: "Snow Road", url: "games/Snow road/index.html", image: "images/snow-road.jpg" },
    { name: "Spacebar Clicker", url: "games/Spacebar Clicker/index.html", image: "images/spacebar-clicker.jpg" },
    { name: "Steal A Brainrot", url: "games/steal a brainrot/index.html", image: "images/steal-brainrot.jpg" },
    { name: "Stick Merge", url: "games/Stick Merge/index.html", image: "images/stick-merge.jpg" },
    { name: "Stickman Hook", url: "games/Stickman Hook/index.html", image: "images/stickman-hook.jpg" },
    { name: "Subway Surfers", url: "games/Subway Surfers/index.html", image: "images/subway-surfers.jpg" },
    { name: "Superhot", url: "games/Super Hot/index.html", image: "images/superhot.jpg" },
    { name: "Super Mario Land", url: "games/super mario land/index.html", image: "images/super-mario.jpg" },
    { name: "Super Smash Bros 64", url: "games/Super Smash Bros 64/index.html", image: "images/ssb-64.jpg" },
    { name: "Super Star Car", url: "games/Super star car/index.html", image: "images/super-star-car.jpg" },
    { name: "Tanuki sunset", url: "games/tanuki sunset/index.html", image: "images/tanuki-sunset.jpg" },
    { name: "tattletail", url: "games/tattletail/index.html", image: "images/tattletail.jpg" },
    { name: "temple run 2", url: "games/Temple run 2/index.html", image: "images/temple-run-2.jpg" },
    { name: "thats not my neighbor", url: "games/thats not my neighbor/index.html", image: "images/thats-not-my-neighbor.jpg" },
    { name: "Time shooter", url: "games/Time shooter/index.html", image: "images/time-shooter.jpg" },
    { name: "Tom Clancys Rainbow Six", url: "games/Tom Clancys Rainbow Six/index.html", image: "images/rainbow-six.jpg" },
    { name: "Ultrakill", url: "games/ultrakill/index.html", image: "images/ultrakill.jpg" },
    { name: "Wordle", url: "games/Wordle/index.html", image: "images/wordle.jpg" },
    { name: "You VS 100 Skibidi", url: "games/You VS 100 Skibidi/index.html", image: "images/skibidi.jpg" },
]

// Movies array - add movies following the same format as games
// Example: { name: "Movie Title", url: "movies/Movie Name/index.html" }
const movies = [
    { name: "Shrek", url: "https://drive.google.com/file/d/181FkiZwd4SyWsqpTrv8HZYTc-To9vpBG/view?usp=sharing" },
]

document.addEventListener('DOMContentLoaded', () => {
    const mainEl = document.querySelector('main');
    let gamesContainer = document.getElementById("gamesContainer");
    let moviesContainer = document.getElementById("moviesContainer");
    const legacyList = document.getElementById("itemList");

    // Create containers if the HTML hasn't been updated yet (backwards compatibility)
    if (!gamesContainer) {
        gamesContainer = document.createElement('div');
        gamesContainer.id = 'gamesContainer';
        gamesContainer.className = 'games-container';
        if (legacyList) {
            // move legacy list into the new container to preserve content
            while (legacyList.firstChild) {
                const li = legacyList.firstChild;
                // convert legacy li into a simple card
                const card = document.createElement('div');
                card.className = 'game-card';
                const imgContainer = document.createElement('div');
                imgContainer.className = 'game-image-container';
                const overlay = document.createElement('div');
                overlay.className = 'game-overlay';
                const title = document.createElement('h3');
                title.className = 'game-title';
                title.textContent = li.textContent || 'Game';
                overlay.appendChild(title);
                imgContainer.appendChild(overlay);
                card.appendChild(imgContainer);
                gamesContainer.appendChild(card);
                legacyList.removeChild(li);
            }
            legacyList.remove();
        }
        if (mainEl) mainEl.appendChild(gamesContainer);
    }

    if (!moviesContainer) {
        moviesContainer = document.createElement('div');
        moviesContainer.id = 'moviesContainer';
        moviesContainer.className = 'movies-container hidden';
        if (mainEl) mainEl.appendChild(moviesContainer);
    }

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

    function createGameCard(game) {
        const card = document.createElement("div");
        card.className = "game-card";
        
        const imgContainer = document.createElement("div");
        imgContainer.className = "game-image-container";
        
        const img = document.createElement("img");
        img.className = "game-image";
        img.alt = game.name;
        img.src = game.image || "images/placeholder-grey.svg";

        // Fallback to grey placeholder if image fails to load. Only attempt once.
        img.onerror = function() {
            if (!img._placeholderTried) {
                img._placeholderTried = true;
                img.src = "images/placeholder-grey.svg";
            } else {
                // if placeholder also fails, hide image but keep card visible
                img.style.display = 'none';
            }
        };
        
        const overlay = document.createElement("div");
        overlay.className = "game-overlay";
        
        const title = document.createElement("h3");
        title.className = "game-title";
        title.textContent = game.name;
        
        imgContainer.appendChild(img);
        imgContainer.appendChild(overlay);
        overlay.appendChild(title);
        
        card.appendChild(imgContainer);
        
        card.addEventListener("click", () => {
            window.location = game.url;
        });
        
        return card;
    }

    function createMovieCard(movie) {
        const card = document.createElement("div");
        card.className = "game-card movie-card";
        
        const imgContainer = document.createElement("div");
        imgContainer.className = "game-image-container";
        
        const overlay = document.createElement("div");
        overlay.className = "game-overlay";
        
        const title = document.createElement("h3");
        title.className = "game-title";
        title.textContent = movie.name;
        
        overlay.appendChild(title);
        imgContainer.appendChild(overlay);
        
        card.appendChild(imgContainer);
        
        card.addEventListener("click", (e) => {
            e.preventDefault();
            const w = window.open(movie.url, '_blank');
            if (w) try { w.opener = null; } catch (_) {}
        });
        
        return card;
    }

    function renderGames(filter = "") {
        gamesContainer.innerHTML = "";
        games
            .filter(game => game.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach(game => {
                gamesContainer.appendChild(createGameCard(game));
            });
    }

    function renderMovies(filter = "") {
        moviesContainer.innerHTML = "";
        movies
            .filter(movie => movie.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach(movie => {
                moviesContainer.appendChild(createMovieCard(movie));
            });
    }

    function switchSection(section) {
        if (section === currentSection || animating) return;
        animating = true;

        const currentContainer = currentSection === "games" ? gamesContainer : moviesContainer;
        const newContainer = section === "games" ? gamesContainer : moviesContainer;

        currentContainer.classList.add("anim-out");

        const onOut = () => {
            currentContainer.removeEventListener('animationend', onOut);
            currentContainer.classList.remove('anim-out', 'active');
            currentContainer.classList.add('hidden');

            // Update section and active button state
            currentSection = section;
            if (section === "games") {
                gamesBtn.classList.add("section-active");
                moviesBtn.classList.remove("section-active");
                renderGames(search.value);
            } else {
                gamesBtn.classList.remove("section-active");
                moviesBtn.classList.add("section-active");
                renderMovies(search.value);
            }

            updateMovieCredit();

            // Trigger enter animation
            newContainer.classList.remove('hidden');
            void newContainer.offsetWidth; // Trigger reflow
            newContainer.classList.add("anim-in", "active");

            const onIn = () => {
                newContainer.removeEventListener('animationend', onIn);
                newContainer.classList.remove('anim-in');
                animating = false;
            };
            newContainer.addEventListener('animationend', onIn);
        };

        currentContainer.addEventListener('animationend', onOut, { once: true });

        // If animations are disabled, run out handler immediately
        const cs = getComputedStyle(currentContainer);
        const dur = parseFloat(cs.animationDuration) || 0;
        if (!cs.animationName || cs.animationName === 'none' || dur === 0) {
            onOut();
        }
    }

    if (gamesBtn && moviesBtn && search) {
        gamesBtn.addEventListener('click', () => switchSection("games"));
        moviesBtn.addEventListener('click', () => switchSection("movies"));
        search.addEventListener('input', () => {
            if (currentSection === "games") {
                renderGames(search.value);
            } else {
                renderMovies(search.value);
            }
        });
    }

    // Initial render
    gamesContainer.classList.add("active");
    renderGames();
});

