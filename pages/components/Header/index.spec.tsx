import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from './index';
import '@testing-library/jest-dom'


describe('Header', ()=>{
    beforeEach(()=>{
        const mockText = 'mock text'
        render (<Header pageText={mockText} />)
    })
    it('Render logo', ()=>{
        const logo = screen.getByAltText('Shaw and Partners logo')
        expect(logo).toBeInTheDocument()
    })
    it('Render title app', ()=>{
        const title = screen.getByText('Project Challenge - Full Stack')
        expect(title).toBeInTheDocument()
    })
    it('Render description text received by props', ()=>{
        const subtitle = screen.getByText('mock text')
        expect(subtitle).toBeInTheDocument()
    })
})
