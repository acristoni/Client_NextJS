import { RowRowHeader, TextRowHeader, ContainerRowHeader } from "./styled";

export function UserFirstRow() {
    return (
        <RowRowHeader>
            <ContainerRowHeader>
                <TextRowHeader>ID</TextRowHeader>
                <TextRowHeader>LOGIN</TextRowHeader>
            </ContainerRowHeader>
        </RowRowHeader>
    )
}