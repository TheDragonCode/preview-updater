export const titleCase = (title: string) => title
    .replace(/([A-Z])/g, '$1')
    .toLowerCase()
    .replace(/(^|\s|-|_)\S/g, (match: string) => match.toUpperCase())
    .replace(/[-_]/g, ' ')
