import { getImages } from './image'

const hasHeader = (content: string) => content.match(/^#\s+/)

const cleanUp = (content: string) => content
    .replace(/^(#\s+.+\n+)(!\[.+]\(.*\)\n?){1,2}\n?/, '$1\n')
    .replace(/^(#\s+.+\n+)(<img\s.*\/>\n?){1,2}\n?/, '$1\n')

export const setPreview = (content: string, image: Image) => {
    if (! hasHeader(content)) {
        content = `# Hello World!\n\n${ content }`
    }

    content = cleanUp(content)

    const images = getImages(image)

    return content.replace(/^(#\s+.+\n\n)/, `$1${ images }\n\n`)
}
