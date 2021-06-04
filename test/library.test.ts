import --libraryPascalCaseName-- from "../src/--libraryname--";

/**
 * Dummy test
 */
describe("Dummy test", () => {
    it("works if true is truthy", () => {
        expect(true).toBeTruthy();
    });

    it("--libraryPascalCaseName-- is instantiable", () => {
        expect(new --libraryPascalCaseName--()).toBeInstanceOf(--libraryPascalCaseName--);
    });
});
