import { RowRepo, Text, ContainerRowRepo } from "./styled";

type Props = {
    id: number,
    name: string,
    URL: string
}

export default function RepositoryRow({id, name, URL}: Props) {
    return (
        <RowRepo 
            onClick={()=>window.open(URL, '_blank')} 
            data-testid={`RowRepo-${id}`}
        >
            <ContainerRowRepo>
                <Text>{id}</Text>
                <Text>{name}</Text>
                <Text>{URL}</Text>
            </ContainerRowRepo>
        </RowRepo>
    )
}