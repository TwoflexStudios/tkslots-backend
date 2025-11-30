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
        // 10000 series games (100000-1000100)
        ...loadGames(100000, 1000100),
       
    ];
    
    return allGames;
};