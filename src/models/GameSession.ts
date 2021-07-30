import { Player } from "./Player";
import { PlayerData } from "./PlayerData";

export class GameSession {
    private static readonly MAX_KEEP_ALIVE_PLAYER_TIME = 60000;

    gin: number;
    players: Player[];

    constructor(gin: number) {
        this.gin = gin;
        this.players = [];

        setInterval(this.removeInactivePlayers.bind(this), 1000);
    }

    updatePlayer(data: PlayerData): string {
        let player = this.findPlayerByName(data.pid);

        if (!player) {
            player = new Player(data.pid, data.balance);

            if (data.currency) {
                player.currency = data.currency;
            }

            this.players.push(player);
        }

        if (typeof data.balance != "undefined") {
            player.balance = data.balance;
        }

        if (typeof data.bet != "undefined") {
            player.totalBet += data.bet;
        }

        player.lastPing = new Date().getTime();

        return player.UUID;
    }

    removeInactivePlayers(): void {
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];

            if (new Date().getTime() - GameSession.MAX_KEEP_ALIVE_PLAYER_TIME > player.lastPing) {
                this.removePlayer(player);
            }
        }
    }

    private removePlayer(player: Player) {
        console.log("----------------------------------------------------");
        console.log("Removing inactive player - ", player.pid);
        console.log("----------------------------------------------------");

        this.players.splice(this.players.indexOf(player), 1);
    }

    private findPlayerByName(playerName: string): Player | undefined {
        return this.players.find((player) => (player.pid === playerName ? true : false));
    }
}
