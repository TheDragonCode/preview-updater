import { getReadme } from "../helpers/filesystem";
import type { Config } from "../../src/types/config";
import { readTestConfig } from "../helpers/config";

test("default config", () => {
    const files: string[] = [
        "empty.md",
        "just-text.md",
        "with-one-image.md",
        "with-one-image-without-header.md",
        "with-two-images.md",
        "with-two-images-without-header.md",
        "without-all.md",
        "without-images.md",
        "html-tag.md",
    ];

    for (const file of files) {
        expect(getReadme(file)).toMatchSnapshot();
    }
});

test("custom config", async () => {
    const files: string[] = [
        "composer-dev.yml",
        "composer-global-dev.yml",
        "npm-dev.yml",
        "npm-global-dev.yml",
        "yarn-dev.yml",
        "yarn-global-dev.yml",
        "custom-dev.yml",
        "custom-global-dev.yml",
    ];

    for (const file of files) {
        const config: Config = await readTestConfig(
            `tests/fixtures/configs/${file}`,
        );

        expect(getReadme("just-text.md", config)).toMatchSnapshot();
    }
});
