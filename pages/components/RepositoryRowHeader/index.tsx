import { RowRepoHeader, TextRepoHeader, ContainerRowRepoHeader, TextRepoHeaderName } from "./styled";

export function RepositoryRowHeader() {
    return (
        <RowRepoHeader>
            <ContainerRowRepoHeader>
                <TextRepoHeader>ID</TextRepoHeader>
                <TextRepoHeaderName>NAME</TextRepoHeaderName>
                <TextRepoHeader>URL</TextRepoHeader>
            </ContainerRowRepoHeader>
        </RowRepoHeader>
    )
}