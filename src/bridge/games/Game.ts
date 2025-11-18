import { PushCommands } from "../../helpers/commands";
import GameDesk from "../GameDesk";
import IGame from "./IGame";

export enum GameStatusEnum {
    PAUSED = 0,
    WAITING_LOAD = 1,
    READY = 2,
    PLAYING = 3,
}

interface BetController {
    [amount: number]: {
        bet: number
    }
}

export interface GameRollResult {
    bet: number;
    balance: number;
    winAmount: number;
    bonus: boolean;
}

export interface GameOptions {
    minToWin: number;
    betController: BetController;
}

abstract class Game {
    public gameId: number = 0;
    public gameName: string = "";
    public bet: number = 0;
    public canRoll: boolean = true;

    //@ts-ignore
    public desk: GameDesk;

    //@ts-ignore
    public options: GameOptions;

    constructor(gameId: number, gameName: string, commands: any, options: GameOptions){
        this.gameId = gameId;
        this.gameName = gameName;
        PushCommands("client", commands["client"]);
        PushCommands("server", commands["server"]);
        this.options = options;
    }

    getBalance(){
        return this.desk.player.account.balance;
    }

    check(){
        this.calculateBet(); // Calcular aposta
        const minToWin = this.options.minToWin * 100; // Converter para centavos
        const balance = this.getBalance(); // Saldo atual
        const bet = this.bet; // Aposta

        if(balance <= bet){
            this.desk.player.log(`Saldo insuficiente`, "error");
            this.desk.onLoser();
            return false;
        }

        return true;
    }

    //Valida a jogada
    result(result: GameRollResult){
        this.desk.onRollResult(result);
        if(result.balance >= this.options.minToWin * 100){
            this.desk.onWinner();
        }
    }

    calculateBet(){
        const currentBalance = this.getBalance();
        const betLevels = Object.keys(this.options.betController)
            .map(Number)
            .filter(num => !isNaN(num))
            .sort((a, b) => a - b);

        const selectedBetLevel = betLevels.reduce((acc, level) => (level <= (currentBalance) ? level : acc), betLevels[0]);
        //@ts-ignore
        const newBet = this.options.betController[selectedBetLevel].bet * 100;
        
        if (newBet !== this.bet) {
            this.setBet(newBet);
        }
    }

    setBet(bet: number){
        this.bet = bet;
    }

    start(){}
}

export default Game;