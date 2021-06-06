export class Player {
    pid: string;
    balance: number;
    totalBet: number;
    currency: string;
    lastPing: number;

    constructor(pid: string, balance: number, totalBet = 0, currency = "") {
        this.pid = pid;
        this.balance = balance;
        this.totalBet = totalBet;
        this.lastPing = 0;
        this.currency = currency;
    }
}
