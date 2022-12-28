import { RowRowHeader, TextRowHeader, ContainerRowHeader } from "./styled";

export default function UserFirstRow() {
    return (
        <RowRowHeader data-testid='RowRowHeader'>
            <ContainerRowHeader>
                <TextRowHeader>ID</TextRowHeader>
                <TextRowHeader>LOGIN</TextRowHeader>
            </ContainerRowHeader>
        </RowRowHeader>
    )
}