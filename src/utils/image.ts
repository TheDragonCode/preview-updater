import { Image, ImageParameters } from '../types/config'
import { hasComposer, hasNpm, hasYarn } from './packageManagers'

const encodeUri = (value: string): string => {
    if (value === '') {
        return ''
    }

    return encodeURIComponent(value)
}

const detectPackageManager = (visibility: string): string => {
    if (hasComposer()) {
        return `composer${ visibility } require`
    }

    if (hasNpm()) {
        return `npm${ visibility } install`
    }

    if (hasYarn()) {
        return `yarn${ visibility } add`
    }

    return ''
}

const packageManager = (image: ImageParameters): string => {
    if (image.packageManager === 'none') {
        return ''
    }

    const visibility = image.packageGlobal ? ' global' : ''

    switch (image.packageManager) {
        case 'composer':
            return `composer${ visibility } require`
        case 'npm':
            return `npm${ visibility } install`
        case 'yarn':
            return `yarn${ visibility } add`
        case 'auto':
            return detectPackageManager(visibility)
    }
}

const packageName = (image: ImageParameters): string => image.packageManager !== 'none' ? image.packageName : ''

const render = (image: Image, theme: 'light' | 'dark', suffix: string = ''): string => {
    const params = new URLSearchParams({
        theme: theme,
        pattern: image.parameters.pattern,
        style: image.parameters.style,
        fontSize: image.parameters.fontSize,
        images: image.parameters.icon,
        packageManager: encodeUri(packageManager(image.parameters)),
        packageName: encodeUri(packageName(image.parameters)),
        description: encodeUri(image.parameters.description)
    })

    return image.url + '/' + encodeUri(image.parameters.title) + '.png?' + params.toString() + suffix
}

const format = (title: string, url: string): string => `![${ title }](${ url })`

export const getImages = (image: Image): string[] => {
    const light = format(image.parameters.title, render(image, 'light', '#gh-light-mode-only'))
    const dark = format(image.parameters.title, render(image, 'dark', '#gh-dark-mode-only'))

    return [light, dark]
}
