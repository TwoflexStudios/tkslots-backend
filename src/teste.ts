import Game from "./bridge/Game";
import BandidosBang from "./bridge/Games/BandidosBang";
import Player, { PlayerEventEnum } from "./bridge/Player";

const DevelopFunction = async () => {
    
    const player = new Player("691e9a4794ef0d5aff97049d");

    player.on(PlayerEventEnum.CONNECTED, () => {
        console.log("Conectado");
        const game = new BandidosBang(player, {
            minToWin: 100,
            attributes: {
                type: 1
            },
            controller: {
                0.1: {
                    bet: 0.1
                },
                0.2: {
                    bet: 0.2
                },
                0.4: {
                    bet: 0.4
                },
                0.6: {
                    bet: 0.6
                },
                0.8: {
                    bet: 0.8
                },
                1: {
                    bet: 1,
                },
                10: {
                    bet: 2
                },
                15: {
                    bet: 4
                },
                60: {
                    bet: 8
                }
            }
        });
        game.startGame();
    })

    player.on(PlayerEventEnum.CONNECTION_LOST, () => {
        console.log("Conexão perdida");
    })

    player.on(PlayerEventEnum.DISCONNECTED, () => {
        console.log("Desconectado");
    })

    await player.connect();
}

export default DevelopFunction;