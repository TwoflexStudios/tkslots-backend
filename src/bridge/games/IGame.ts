import GameDesk from "../GameDesk";

interface IGame {
    gameId: number;
    gameName: string;
    desk: GameDesk;
    roll(desk: GameDesk): Promise<void>;
    setBet(bet: number): void;
    start(): void;
}

export default IGame;