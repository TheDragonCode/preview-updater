import { getImages } from "./image";
import type { Config } from "../types/config";
import { removeImages, titleCase } from "./strings";
import type { Package } from "../types/package";

const hasHeader = (content: string) => content.match(/^#\s+/);

export const setPreview = (
    content: string,
    config: Config,
    packageData: Package,
): string => {
    if (!hasHeader(content)) {
        const title = titleCase(config.image.parameters.title);

        content = `# ${title}\n\n${content}`;
    }

    const images: string = getImages(config, packageData);

    const replace = "$1";

    return removeImages(content).replace(
        /^(#\s+.+[\n\s]+)/,
        `${replace}${images}\n\n`,
    );
};
