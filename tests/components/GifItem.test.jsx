const {render, screen} = require('@testing-library/react');
const { GifItem } = require('../../src/components/GifItem');

describe('Prueba de GifItem', () => { 
    const title = 'Titulo de prueba';
    const url = 'http://urldeprueba.com/';

    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot(); 
    }); 

    test('debe de mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url}/>);
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en componente', () => { 
        render(<GifItem title={title} url={url}/>); 
        expect(screen.getByText(title)).toBeTruthy();
    });

});