import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => { 
    const value = 'Saitama';
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<GifExpertApp />) 
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: value}});
        expect(input.value).toBe('Saitama');

    }); 

    test('la caja de texto tiene que estar en blanco si pulsa intro', () => { 
        render(<GifExpertApp />) 
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: value}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
    });
});