import { Row, Text, Container } from "./styled";

type Props = {
    id: number,
    login: string
}

export function UserRow({id, login}: Props) {
    return (
        <Row>
            <Container>
                <Text>{id}</Text>
                <Text>{login}</Text>
            </Container>
        </Row>
    )
}