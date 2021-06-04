import GamesLiveStatistic from "../src/games-live-statistic";

/**
 * Dummy test
 */
describe("Dummy test", () => {
    it("works if true is truthy", () => {
        expect(true).toBeTruthy();
    });

    it("GamesLiveStatistic is instantiable", () => {
        expect(new GamesLiveStatistic()).toBeInstanceOf(GamesLiveStatistic);
    });
});
