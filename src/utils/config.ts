import { type Config, defaultConfig } from "../types/config";
import * as yaml from "js-yaml";
import { readFile } from "./filesystem";
import { merge } from "./merge";

export const readConfig = (config: Config, userConfigPath: string): Config => {
    const content: string = readFile(config, userConfigPath);

    if (content === "") {
        return <Config>merge(defaultConfig, config);
    }

    const userConfig = <Config>yaml.load(content);

    return <Config>merge(defaultConfig, userConfig, config);
};
