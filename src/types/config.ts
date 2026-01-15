import type { Repository } from "./repository";
import type { Image } from "./image";
import type { Data } from "./data";
import type { Package } from "./package";

export interface Config {
    directory?: string;
    readme?: string;

    repository?: Repository;

    data?: Data;
    package?: Package;
    image?: Image;
}

export const defaultConfig: Config = {
    readme: "README.md",

    repository: {
        commit: {
            branch: "preview/banner-{random}",
            title: "docs(preview): Update preview",

            author: {
                name: "github-actions",
                email: "github-actions@github.com",
            },
        },

        pullRequest: {
            title: "Update preview",
            assignees: [],
            labels: ["preview"],
        },
    },

    package: {
        manager: "auto",
        global: false,
        dev: false,
    },

    image: {
        url: "https://banners.beyondco.de/{title}.png",

        parameters: {
            pattern: "topography",
            style: "style_2",
            fontSize: "100px",
            md: "1",
            showWatermark: "1",
        },
    },
};
