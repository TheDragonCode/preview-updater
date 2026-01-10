export interface Image
{
    host: string

    theme: string
    pattern: string
    style: string
    fontSize: string
    icon: string

    packageManager: 'composer' | 'npm' | 'yarn' | 'pip' | 'none'
    packageName: string
    packageGlobal: boolean

    title: string
    description: string
}

export const defaultImage: Image = {
    host: 'https://banners.beyondco.de',

    theme: 'light',
    pattern: 'topography',
    style: 'style_2',
    fontSize: '100px',
    icon: 'https://laravel.com/img/logomark.min.svg',

    packageManager: 'none',
    packageName: '',
    packageGlobal: false,

    title: '',
    description: ''
}
