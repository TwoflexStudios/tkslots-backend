function onDocumentReady() {
    window.addEventListener("message", function (event) {
        if (event.data.type === "bypass") {
            window.showBonusModal();
        }
    });
}

$(document).ready(function () {
    onDocumentReady();
});

// Helper function to create a game object
function createGame(gameId, options = {}) {
    return {
        gameId: String(gameId),
        gameName: options.gameName || "",
        sort: options.sort || 0,
        kindId: options.kindId || 1,
        isRoom: options.isRoom || 0,
        tag: options.tag || 0,
        viplv: options.viplv || 0,
        gameType: options.gameType || 10,
        info: {
            orientation: options.orientation || false,
            reviewable: options.reviewable || false,
            open: options.open !== undefined ? options.open : true
        }
    };
}

// Load games in a specific range
function loadGames(startId, endId, options = {}) {
    const games = [];
    for (let i = startId; i <= endId; i++) {
        games.push(createGame(i, options));
    }
    return games;
}

// Main game list function
window.getGameList = () => {
    const allGames = [
        // 100000 series games (100000-100200)
        ...loadGames(100000, 100200),
        // 200000 series games (200000-200200)
        ...loadGames(200000, 200200),
        // 300000 series games (300000-300200)
        ...loadGames(300000, 300200),
        // 400000 series games (400000-400200)
        ...loadGames(400000, 400200),
        // 500000 series games (500000-500200)
        ...loadGames(500000, 500200),
        // 600000 series games (600000-600200)
        ...loadGames(600000, 600200),
        // 700000 series games (700000-700200)
        ...loadGames(700000, 700200),
        // 800000 series games (800000-800200)
        ...loadGames(800000, 800200),
        // 900000 series games (900000-900200)
        ...loadGames(900000, 900200),
        // 100000 series games (100000-100200)
        ...loadGames(100000, 100200),
        // 110000 series games (110000-110200)
        ...loadGames(110000, 110200),
        // 120000 series games (120000-120200)
        ...loadGames(120000, 120200),
        // 130000 series games (130000-130200)
        ...loadGames(130000, 130200),
        // 140000 series games (140000-140200)
        ...loadGames(140000, 140200),
        // 150000 series games (150000-150200)
        ...loadGames(150000, 150200),
        // 160000 series games (160000-160200)
        ...loadGames(160000, 160200),
        // 170000 series games (170000-170200)
        ...loadGames(170000, 170200),
        // 180000 series games (180000-180200)
        ...loadGames(180000, 180200),
        // 190000 series games (190000-190200)
        ...loadGames(190000, 190200),
        // 200000 series games (200000-200200)
        ...loadGames(200000, 200200),
    ];
    
    return allGames;
};