import { RowRepoHeader, TextRepoHeader, ContainerRowRepoHeader, TextRepoHeaderName } from "./styled";

export default function RepositoryRowHeader() {
    return (
        <RowRepoHeader data-testid='RowRepoHeader'>
            <ContainerRowRepoHeader>
                <TextRepoHeader>ID</TextRepoHeader>
                <TextRepoHeaderName>NAME</TextRepoHeaderName>
                <TextRepoHeader>URL</TextRepoHeader>
            </ContainerRowRepoHeader>
        </RowRepoHeader>
    )
}