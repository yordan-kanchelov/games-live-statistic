import { v4 as uuidv4 } from "uuid";

export class Player {
    pid: string;
    balance: number;
    totalBet: number;
    currency: string;
    lastPing: number;

    private uuid: string;

    constructor(pid: string, balance: number, totalBet = 0, currency = "") {
        this.pid = pid;
        this.balance = balance;
        this.totalBet = totalBet;
        this.lastPing = 0;
        this.currency = currency;
        this.uuid = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    }

    get UUID(): string {
        return this.uuid;
    }
}
