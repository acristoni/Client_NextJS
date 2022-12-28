import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import UserRow from './index';
import '@testing-library/jest-dom'

describe('UserRow', ()=>{
    beforeEach(()=>{
        const mockId = 107071638
        const mockLogin = 'acristoni'
        render (<UserRow 
                    id={mockId} 
                    login={mockLogin}
                />)
    })
    it('Render UserRow component', ()=>{
        const UserRow = screen.getByTestId('RowUser-107071638')
        expect(UserRow).toBeInTheDocument()
    })
    it('Render user id received by props', ()=>{
        const id = screen.getByText('107071638')
        expect(id).toBeInTheDocument()
    })
    it('Render user login received by props', ()=>{
        const name = screen.getByText('acristoni')
        expect(name).toBeInTheDocument()
    })
    it('UserRow component can be clicked', ()=>{
        const UserRow = screen.getByTestId('RowUser-107071638')

        fireEvent.click(UserRow)
    })
})
