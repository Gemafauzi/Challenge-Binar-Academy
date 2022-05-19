import { render, screen, fireEvent } from '@testing-library/react'

import TodoInput from '../TodoInput'

const mockSetTodoFnc = jest.fn()

test('todo input field typed', () => {
    render(<TodoInput setTodo={mockSetTodoFnc} />)
    const inputElement = screen.getByTestId('todo-input-field')
    
    fireEvent.change(inputElement, {
        target: {
            value: 'Membeli mie ayam'
        }
    })
    expect(inputElement.value).toBe('Membeli mie ayam')
})

test('todo input button clicked', () => {
    render(<TodoInput setTodo={mockSetTodoFnc} />)
    const inputElement = screen.getByTestId('todo-input-field')
    const buttonElement = screen.getByTestId('todo-input-button')
    fireEvent.change(inputElement, {
        target: {
            value: 'Membeli mie ayam'
        }
    })
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBeFalsy()
})