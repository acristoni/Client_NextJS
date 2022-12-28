import { RowUser, TextUser, ContainerUser } from "./styled";

type Props = {
    id: number,
    login: string
}

export function UserRow({id, login}: Props) {
    return (
        <RowUser>
            <ContainerUser>
                <TextUser>{id}</TextUser>
                <TextUser>{login}</TextUser>
            </ContainerUser>
        </RowUser>
    )
}