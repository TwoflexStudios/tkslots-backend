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
        // 1 series games (1-100)
        ...loadGames(1, 100),
        // 1000 series games (1000-1010)
        ...loadGames(1000, 1010),
        // 10000 series games (10000-10010)
        ...loadGames(10000, 10010),
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
        // 100000 series games (100000-100100)
        ...loadGames(100000, 100100),
        // 110000 series games (110000-110100)
        ...loadGames(110000, 110100),
        // 120000 series games (120000-120100)
        ...loadGames(120000, 120100),
        // 130000 series games (130000-130100)
        ...loadGames(130000, 130100),
        // 140000 series games (140000-140100)
        ...loadGames(140000, 140100),
        // 150000 series games (150000-150100)
        ...loadGames(150000, 150100),
        // 160000 series games (160000-160100)
        ...loadGames(160000, 160100),
        // 170000 series games (170000-170100)
        ...loadGames(170000, 170100),
        // 180000 series games (180000-180100)
        ...loadGames(180000, 180100),
        // 190000 series games (190000-190100)
        ...loadGames(190000, 190100),
        // 200000 series games (200000-200100)
        ...loadGames(200000, 200100),
    ];
    
    return allGames;
};