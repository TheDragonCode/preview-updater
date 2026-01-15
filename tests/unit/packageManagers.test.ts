import { hasComposer, hasNpm, hasYarn } from "../../src/utils/packageManagers";
import { testConfig } from "../helpers/config";

test("composer", () => {
    expect(hasComposer(testConfig)).toBeFalsy();
});

test("npm", () => {
    expect(hasNpm(testConfig)).toBeTruthy();
});

test("yarn", () => {
    expect(hasYarn(testConfig)).toBeFalsy();
});
