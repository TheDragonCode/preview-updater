interface Image
{
    canDark: boolean
    template: string

    theme: string
    pattern: string
    style: string
    fontSize: string
    icon: string

    packageManager: string
    packageName: string

    title: string
    description: string
}

interface BeyondImage extends Image
{
    canDark: true
    template: 'https://banners.beyondco.de/{title}.png?theme={theme}&packageManager={packageManager}&packageName={packageName}&pattern={pattern}&style={style}&description={description}&md=1&showWatermark=1&fontSize={fontSize}&images={icon}'

    theme: 'light'
    pattern: 'topography'
    style: 'style_2'
    fontSize: '100px'
    icon: 'https://laravel.com/img/logomark.min.svg'

}
