const render = (image: Image, theme: string, suffix: string = ''): string => {
    return `${ image.template }${ suffix }`
        .replace('{theme}', theme)
        .replace('{pattern}', image.pattern)
        .replace('{style}', image.style)
        .replace('{fontSize}', image.fontSize)
        .replace('{icon}', image.icon)
        .replace('{packageManager}', image.packageManager)
        .replace('{packageName}', image.packageName)
        .replace('{title}', image.title)
        .replace('{description}', image.description)
}

export const getImages = (image: Image): string => {
    if (! image.canDark) {
        return render(image, 'dark')
    }

    return render(image, 'light', '#gh-light-mode-only') + '\n'
        + render(image, 'dark', '#gh-dark-mode-only')
}
