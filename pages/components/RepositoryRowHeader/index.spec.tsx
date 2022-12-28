import React from 'react';
import { render, screen } from '@testing-library/react'
import RepositoryRowHeader from './index';
import '@testing-library/jest-dom'

describe('RepositoryRowHeader', ()=>{
    beforeEach(()=>{
        render (<RepositoryRowHeader />)
    })
    it('Render RepositoryRow component', ()=>{
        const RowRepoHeader = screen.getByTestId('RowRepoHeader')
        expect(RowRepoHeader).toBeInTheDocument()
    })
    it('Render ID text', ()=>{
        const id = screen.getByText('ID')
        expect(id).toBeInTheDocument()
    })
    it('Render NAME text', ()=>{
        const NAME = screen.getByText('NAME')
        expect(NAME).toBeInTheDocument()
    })
    it('Render URL text', ()=>{
        const URL = screen.getByText('URL')
        expect(URL).toBeInTheDocument()
    })
})
