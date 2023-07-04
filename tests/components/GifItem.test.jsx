import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas sobre <GifItem />', () => {

    const title = 'Test Title';
    const url = 'https://media1.giphy.com/media/lfpwRGOHLZXsA/giphy.gif?cid=d21c202cga15slgpuzmt1ghp2e5e20pkqhdearnm7i67etid&ep=v1_gifs_search&rid=giphy.gif&ct=g';


    test('Debe coincidir con el Snapshot', () => {
        const { container } = render(<GifItem
            title={title}
            url={url}
        />);
        expect(container).toMatchSnapshot();
    })

    test('Debe coincidir mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem
            title={title}
            url={url}
        />);
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title)
        //expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem
            title={title}
            url={url}
        />);
        expect(screen.getByText(title)).toBeTruthy();
        //expect(container).toMatchSnapshot();
    })
})