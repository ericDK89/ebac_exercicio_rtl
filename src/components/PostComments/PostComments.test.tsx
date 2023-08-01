import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it("should have two comments", () => {
        render(<PostComment/>);
        const button = screen.getByTestId("add-btn")
        const newText = screen.getByTestId("text-value")

        fireEvent.change(newText, {target: {value: "Test"}})        
        fireEvent.click(button)

        fireEvent.change(newText, {target: {value: "Test"}})
        fireEvent.click(button)

        expect(screen.getAllByText('Test')).toHaveLength(2);
    })
});