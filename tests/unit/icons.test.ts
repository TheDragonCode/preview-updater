import { getPackage } from "../helpers/filesystem";
import {
    defaultJsIcon,
    defaultPhpIcon,
    detectIcon,
    phpIcons,
} from "../../src/utils/icons";

test("composer laravel", () => {
    const data = getPackage("tests/fixtures/packages/composer-laravel.json");

    expect(detectIcon(data)).toBe(phpIcons[0].icon);
});

test("composer illuminate", () => {
    const data = getPackage("tests/fixtures/packages/composer-illuminate.json");

    expect(detectIcon(data)).toBe(phpIcons[1].icon);
});

test("composer symfony", () => {
    const data = getPackage("tests/fixtures/packages/composer-symfony.json");

    expect(detectIcon(data)).toBe(phpIcons[2].icon);
});

test("composer default", () => {
    const data = getPackage("tests/fixtures/packages/composer-default.json");

    expect(detectIcon(data)).toBe(defaultPhpIcon);
});

test("npm default", () => {
    const data = getPackage("tests/fixtures/packages/npm-default.json");

    expect(detectIcon(data)).toBe(defaultJsIcon);
});
