export class Player {
    pid: string;
    balance: number;
    totalBet: number;
    lastPing: number;

    constructor(pid: string, balance: number, totalBet = 0) {
        this.pid = pid;
        this.balance = balance;
        this.totalBet = totalBet;
        this.lastPing = 0;
    }
}
