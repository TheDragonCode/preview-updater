import * as fs from "node:fs";
import type { Config } from "../types/config";
import { info } from "@actions/core";

export const cwd = (): string => {
    const path = process.env.GITHUB_WORKSPACE;

    if (path === undefined) {
        throw new Error("GitHub Actions has not set the working directory");
    }

    return path;
};

const filePath = (config: Config, filename: string): string =>
    `${config.directory}/${filename}`;

export const fileExists = (config: Config, filename: string): boolean =>
    fs.existsSync(filePath(config, filename));

export const readRemoteFile = async (url: string): Promise<string> => {
    const response: Response = await fetch(url);

    if (!response.ok) {
        info(`Failed to fetch ${url} with status code ${response.status}`);

        return "";
    }

    return response.text();
};

export const readFile = (config: Config, filename: string): string => {
    if (!fs.existsSync(filePath(config, filename))) {
        return "";
    }

    return fs.readFileSync(filePath(config, filename), "utf-8");
};

export const writeFile = (
    config: Config,
    filename: string,
    content: string,
): void => {
    fs.writeFileSync(filePath(config, filename), content);
};
