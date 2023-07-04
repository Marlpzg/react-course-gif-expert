import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en <AddCategory/>', () => {

    const inputValue = 'Test'
    
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onAddCategory={() => { }} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } })
        expect(input.value).toBe(inputValue)
    });

    test('Debe de llamar onAddCategory si el input tiene un valor', () => {

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue.trim());
    });

    test('No debe de llamar onAddCategory si el input esta vacio', () => {

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit(form);

        expect(onAddCategory).not.toHaveBeenCalled();
    });
    
})
