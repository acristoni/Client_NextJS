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
            <ContainerTextHeader>
                <TextHeader>Project Challenge</TextHeader>
                <TextHeaderSmall>{pageText}</TextHeaderSmall>
            </ContainerTextHeader>
        </ContainerHeader>
    )
}
