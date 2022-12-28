import React from 'react';
import { render, screen } from '@testing-library/react'
import UserFirstRow from './index';
import '@testing-library/jest-dom'

describe('UserFirstRow', ()=>{
    beforeEach(()=>{
        render (<UserFirstRow />)
    })
    it('Render UserFirstRow component', ()=>{
        const RowRowHeader = screen.getByTestId('RowRowHeader')
        expect(RowRowHeader).toBeInTheDocument()
    })
    it('Render ID text', ()=>{
        const id = screen.getByText('ID')
        expect(id).toBeInTheDocument()
    })
    it('Render LOGIN text', ()=>{
        const LOGIN = screen.getByText('LOGIN')
        expect(LOGIN).toBeInTheDocument()
    })
})
