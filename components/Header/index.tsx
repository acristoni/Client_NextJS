import {ContainerHeader, 
        TextHeader, 
        TextHeaderSmall, 
        ContainerTextHeader,
        ContainerLogo } from './styles'
import Image from 'next/image'
import logo from '../../assets/img/logo.png'

type Props = {
    pageText: string
}

export default function Header({pageText}: Props) {
    return (
        <ContainerHeader>
            <ContainerLogo>
                <Image src={logo} alt="Shaw and Partners logo" style={{maxWidth: '100%', height: '60%'}}/>
            </ContainerLogo>
            <ContainerTextHeader>
                <TextHeader>Project Challenge - Full Stack</TextHeader>
                <TextHeaderSmall>{pageText}</TextHeaderSmall>
            </ContainerTextHeader>
        </ContainerHeader>
    )
}