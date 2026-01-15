import * as fs from "node:fs";
import type { Config } from "../types/config";
import { info } from "@actions/core";
import { get } from "node:https";

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
    return new Promise((resolve) => {
        get(url, (res) => {
            if (res.statusCode !== 200) {
                info(
                    `Failed to fetch ${url} with status code ${res.statusCode}`,
                );
                resolve("");

                return;
            }

            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                resolve(data);
            });
        }).on("error", (err) => {
            info(`Failed to fetch ${url} with error: ${err.message}`);
            resolve("");
        });
    });
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
