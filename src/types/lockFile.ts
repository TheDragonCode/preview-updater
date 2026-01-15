export interface LockFile {
    name: string;
    description: string;

    dependencies?: Record<string, string>[];
    require?: Record<string, string>[];
}
