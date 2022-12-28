import {ContainerHeader, 
        TextHeader, 
        TextHeaderSmall, 
        ContainerTextHeader,
        ContainerLogo } from './styles'
import Image from 'next/image'
import logo from '../../../assets/img/logo.png'

export function Header() {
    return (
        <ContainerHeader>
            <ContainerLogo>
                <Image src={logo} alt="Shaw and Partners logo" style={{maxWidth: '100%', height: '60%'}}/>
            </ContainerLogo>
            <ContainerTextHeader>
                <TextHeader>Project Challenge - Full Stack</TextHeader>
                <TextHeaderSmall>The challenge includes creating an API that consumes endpoints from GitHub, made by me in NodeJS, and the front end, made in ReactJS (NextJS), which is consuming this API I created.</TextHeaderSmall>
            </ContainerTextHeader>
        </ContainerHeader>
    )
}