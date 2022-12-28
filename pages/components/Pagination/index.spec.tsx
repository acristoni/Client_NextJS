import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import Pagination from './index';
import '@testing-library/jest-dom'

describe('Pagination', ()=>{
    beforeEach(()=>{
        const sendInfo = (value: number) => {
            return value
        }
        render (<Pagination 
                    sendPage={sendInfo} 
                    count={30} 
                    pageSize={30} 
                />)
    })
    it('Render pagination component', ()=>{
        const pagination = screen.getByTestId('pagination')
        expect(pagination).toBeInTheDocument()
    })
    it('Render 3 numbers', ()=>{
        const page_1 = screen.getByTestId(1)
        const page_2 = screen.getByTestId(2)
        const page_3 = screen.getByTestId(3)

        expect(page_1).toBeInTheDocument()
        expect(page_2).toBeInTheDocument()
        expect(page_3).toBeInTheDocument()
    })
    it('Numbers can be clicked', ()=>{
        const page_1 = screen.getByTestId(1)
        const page_2 = screen.getByTestId(2)
        const page_3 = screen.getByTestId(3)

        fireEvent.click(page_1)
        fireEvent.click(page_2)
        fireEvent.click(page_3)
    })
    it('Render arrow', ()=>{
        const rightArrow = screen.getByTestId('rightArrow')
        expect(rightArrow).toBeInTheDocument()
    })
    it('Arrow can be clicked', ()=>{
        const rightArrow = screen.getByTestId('rightArrow')
        fireEvent.click(rightArrow)
    })
})
