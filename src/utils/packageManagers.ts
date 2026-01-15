import { fileExists, readFile } from "./filesystem";
import type { Config } from "../types/config";
import type { LockFile } from "../types/lockFile";

export const hasComposer = (config: Config): boolean =>
    fileExists(config, "composer.json");

export const hasNpm = (config: Config): boolean =>
    fileExists(config, "package.json");

export const hasYarn = (config: Config): boolean =>
    fileExists(config, "yarn.lock");

export const getComposer = (config: Config): LockFile =>
    <LockFile>JSON.parse(readFile(config, "composer.json"));

export const getNpm = (config: Config): LockFile =>
    <LockFile>JSON.parse(readFile(config, "package.json"));

export const getPackageManager = (config: Config): LockFile => {
    if (hasComposer(config)) {
        return getComposer(config);
    }

    return getNpm(config);
};
