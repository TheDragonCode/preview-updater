import { rawTestConfig } from "../helpers/config";
import type { Config } from "../../src/types/config";
import { CONFIG_PATH } from "../../src/utils/inputs";
import { readConfig } from "../../src/utils/config";

test("read config", async () => {
    const config: Config = await readConfig(
        rawTestConfig,
        CONFIG_PATH.defaultValue,
    );

    expect(config.directory).toBe(process.cwd());
    expect(config.readme).toMatchSnapshot();

    expect(config.repository).toMatchSnapshot();
    expect(config.data).toMatchSnapshot();
    expect(config.package).toMatchSnapshot();
    expect(config.image).toMatchSnapshot();
});

test("custom config", async () => {
    const config: Config = await readConfig(
        <Config>{
            directory: process.cwd(),
        },
        "tests/fixtures/configs/preview.yml",
    );

    expect(config.directory).toBe(process.cwd());
    expect(config.readme).toMatchSnapshot();

    expect(config.repository).toMatchSnapshot();
    expect(config.data).toMatchSnapshot();
    expect(config.package).toMatchSnapshot();
    expect(config.image).toMatchSnapshot();
});
