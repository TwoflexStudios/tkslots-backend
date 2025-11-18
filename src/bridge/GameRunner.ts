import GameDesk from "./GameDesk";
import Game from "./games/Game";
import GameProtocolHelper from "./protocol/GameProtocolHelper";


class GameRunner {
    public protocolHelper: GameProtocolHelper;
    public game: Game;

    //@ts-ignore
    public gameDesk: GameDesk;

    constructor(game: Game, protocolHelper: GameProtocolHelper){
        this.game = game;
        this.protocolHelper = protocolHelper;
    }

    async setGameDesk(gameDesk: GameDesk){
        this.gameDesk = gameDesk;
    }

    async play(){
        this.game.desk = this.gameDesk;
        this.game.start();
    }

}

export default GameRunner;