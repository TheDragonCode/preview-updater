export interface Package {
    manager?: "composer" | "npm" | "yarn" | "auto" | "none" | string;
    global?: boolean;
    dev?: boolean;
    name?: string;
}
