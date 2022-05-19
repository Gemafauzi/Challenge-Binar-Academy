import { render, screen } from '@testing-library/react'

import TodoFooter from '../TodoFooter'

test( 'renders todo footer container', () => {
    render(<TodoFooter todoLength={5} />)

    const containerElement = screen.getByTestId('todo-footer-container')

    expect(containerElement).toBeInTheDocument()
} )

describe( 'todo length > 0', () => {
    test('render "with-items" message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
        expect(footerWithItemsElement).toBeInTheDocument()
    })

    test('render "with-no-item" message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerWithNoItemElement = screen.queryByTestId('todo-footer-no-item')
        expect(footerWithNoItemElement).not.toBeInTheDocument()
    })

    describe('todo length == 1', () => {
        test('render "TASK" in singular', () => {
            render(<TodoFooter todoLength={1} />)
            const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
            expect(footerWithItemsElement).toHaveTextContent('You have 1 task')
        })
    })

    describe('todo length > 1', () => {
        test('render "TASK" in plural', () => {
            render(<TodoFooter todoLength={5} />)
            const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
            expect(footerWithItemsElement).toHaveTextContent('You have 5 tasks')
        })
    })
    
})


describe('todo length <=0', () => {
    test('not render with item message', () => {
        render(<TodoFooter todoLength={0} />)
        const footerWithItemsElement = screen.queryByTestId('todo-footer-with-items')
        expect(footerWithItemsElement).not.toBeInTheDocument()
    })

    test('render with no item message', () => {
        render(<TodoFooter todoLength={0} />)
        const footerWithNoItemElement = screen.getByTestId('todo-footer-no-item')
        expect(footerWithNoItemElement).toBeInTheDocument()
    })
})