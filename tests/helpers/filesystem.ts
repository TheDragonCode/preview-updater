import { readFile } from "../../src/utils/filesystem";
import { setPreview } from "../../src/utils/preview";
import { testConfig } from "./config";
import type { LockFile } from "../../src/types/lockFile";
import { getNpm } from "../../src/utils/packageManagers";
import type { Config } from "../../src/types/config";
import { merge } from "../../src/utils/merge";

export const getReadme = (filename: string, config?: Config): string => {
    config ||= <Config>{};

    config = merge(testConfig, config);

    const content = readFile(config, `tests/fixtures/readme/${filename}`);

    return setPreview(content, config, getNpm(config));
};

export const getPackage = (filename: string): LockFile => {
    return <LockFile>JSON.parse(readFile(testConfig, filename));
};
