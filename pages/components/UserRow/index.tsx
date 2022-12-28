import Link from "next/link";
import { RowUser, TextUser, ContainerUser } from "./styled";

type Props = {
    id: number,
    login: string
}

export function UserRow({id, login}: Props) {
    return (
        <RowUser>
            <Link
                href={{
                  pathname: '/user/[login]',
                  query: { login: login },
                }}
                style={{width: '100%', display: 'flex', justifyContent: 'center'}}
            >
                <ContainerUser>
                    <TextUser>{id}</TextUser>
                    <TextUser>{login}</TextUser>
                </ContainerUser>
            </Link>
        </RowUser>
    )
}