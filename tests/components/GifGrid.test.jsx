import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Test';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    })

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Test',
            url: 'https://www.google.com/test'
        },
        {
            id: '123',
            title: 'Test 2',
            url: 'https://www.google.com/test2'
        }];
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img')).toHaveLength(2)

    })

})