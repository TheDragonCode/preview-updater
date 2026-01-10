# Preview Updater

Легко обновляйте превью своих репозиториев, сохраняя время и усилия на процесс разработки.

## Usage

You can use the [Preview Updater GitHub Action](https://github.com/marketplace/actions/preview-updater) in
a [GitHub Actions Workflow](https://help.github.com/en/actions/about-github-actions) by configuring a YAML-based
workflow file, e.g. `.github/workflows/preview-updater.yml`, with the following:

```yaml
name: Preview Updater

on:
    schedule:
        -   cron: 20 2 1 * *
    workflow_dispatch:

permissions:
    contents: read

jobs:
    preview_updater:
        runs-on: ubuntu-latest
        permissions:
            contents: write
        steps:
            -   uses: TheDragonCode/preview-updater@v1
                env:
                    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
