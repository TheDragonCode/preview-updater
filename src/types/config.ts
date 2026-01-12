export interface Image
{
    url: string;
    parameters: object;
}

export interface Config
{
    image: Image;
}

export const defaultConfig: Config = {
    image: {
        url: 'https://banners.beyondco.de/{title}.png',

        parameters: {
            theme: 'light',
            pattern: 'topography',
            style: 'style_2',
            fontSize: '100px',
            icon: 'https://laravel.com/img/logomark.min.svg',

            packageManager: 'none',
            packageName: '',
            packageGlobal: false,

            description: ''
        }
    }
}
