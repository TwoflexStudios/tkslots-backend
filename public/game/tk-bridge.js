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
        // 100000 series games (100000-100100)
        ...loadGames(100000, 100100),
        // 200000 series games (200000-200100)
        ...loadGames(200000, 200100),
        // 300000 series games (300000-300100)
        ...loadGames(300000, 300100),
        // 400000 series games (400000-400100)
        ...loadGames(400000, 400100),
        // 500000 series games (500000-500100)
        ...loadGames(500000, 500100),
        // 600000 series games (600000-600100)
        ...loadGames(600000, 600100),
        // 700000 series games (700000-700100)
        ...loadGames(700000, 700100),
        // 800000 series games (800000-800100)
        ...loadGames(800000, 800100),
        // 900000 series games (900000-900100)
        ...loadGames(900000, 900100),
    ];
    
    return allGames;
};