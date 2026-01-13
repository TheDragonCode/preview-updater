import { readFile } from "../../src/utils/filesystem";
import { setPreview } from "../../src/utils/preview";
import { testConfig } from "./config";
import type { Package } from "../../src/types/package";
import { getNpm } from "../../src/utils/packageManagers";

export const getReadme = (filename: string): string => {
    const content = readFile(testConfig, `tests/fixtures/readme/${filename}`);

    return setPreview(content, testConfig, getNpm(testConfig));
};

export const getPackage = (filename: string): Package => {
    return <Package>JSON.parse(readFile(testConfig, filename));
};
