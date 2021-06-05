import { GameSession } from "./GameSession";
import { PlayerData } from "./PlayerData";

export class SessionsManager {
    /**
     *
     */

    private static instance: SessionsManager;

    static getInstance(): SessionsManager {
        if (!this.instance) {
            this.instance = new SessionsManager();
        }

        return this.instance;
    }

    activeGameSessions: GameSession[];

    private constructor() {
        this.activeGameSessions = [];

        setInterval(() => {
            console.log(JSON.stringify(this.activeGameSessions, null, 2));
            console.log("-----------------------------------------");
            console.log("-----------------------------------------\n\n");
        }, 10000);

        setInterval(this.removeEmptySessions.bind(this), 1000);
    }

    updateSession(data: PlayerData) {
        let session = this.findGameSessionByGIN(data.gin);

        if (!session) {
            session = new GameSession(data.gin);
            this.activeGameSessions.push(session);
        }

        session.updatePlayer(data);
    }

    private removeEmptySessions() {
        for (let i = 0; i < this.activeGameSessions.length; i++) {
            if (this.activeGameSessions[i].players.length <= 0) {
                this.activeGameSessions.splice(i, 1);
            }
        }
    }

    private findGameSessionByGIN(gin: number): GameSession | undefined {
        return this.activeGameSessions.find((session) => (session.gin === gin ? true : false));
    }
}
