import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import RepositoryRow from './index';
import '@testing-library/jest-dom'

describe('RepositoryRow', ()=>{
    beforeEach(()=>{
        const mockURL = 'https://github.com/acristoni/AirBnb-Clone'
        const mockId = 518512384
        const mockName = 'AirBnb-Clone'
        render (<RepositoryRow 
                    id={mockId} 
                    name={mockName}
                    URL={mockURL} 
                />)
    })
    it('Render RepositoryRow component', ()=>{
        const RepositoryRow = screen.getByTestId('RowRepo-518512384')
        expect(RepositoryRow).toBeInTheDocument()
    })
    it('Render repository id received by props', ()=>{
        const id = screen.getByText('518512384')
        expect(id).toBeInTheDocument()
    })
    it('Render repository name received by props', ()=>{
        const name = screen.getByText('AirBnb-Clone')
        expect(name).toBeInTheDocument()
    })
    it('Render repository url received by props', ()=>{
        const name = screen.getByText('https://github.com/acristoni/AirBnb-Clone')
        expect(name).toBeInTheDocument()
    })
    it('RepositoryRow component can be clicked', ()=>{
        const RepositoryRow = screen.getByTestId('RowRepo-518512384')

        fireEvent.click(RepositoryRow)
    })
})
