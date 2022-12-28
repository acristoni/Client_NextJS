import { IRepository } from "../../interfaces/repository.interface";
import { IUserDetail } from "../../interfaces/userDetail.interface";
import { ContainerUser, TextUser, TextUserHeader } from "../../styles/user.styles";
import { formatDate } from "../../utils/formatDate";
import Header from "../../components/Header";
import RepositoryRow from "../../components/RepositoryRow";
import RepositoryRowHeader from "../../components/RepositoryRowHeader";

type Props = {
    userDetail: IUserDetail,
    userRepositories: IRepository[]
}

export default function UserPage ({ userDetail, userRepositories }: Props) {    
    return (
        <ContainerUser>
            <Header pageText="On this page you have access to more detailed information about the user and the list of all public repositories that he had on GitHub, when clicking on any of these lines a new window will open and you will be able to see the repository on the GitHub page"/>
            <ContainerUser>
              <TextUserHeader>User&apos;s Details</TextUserHeader>
              <TextUser>ID: {userDetail.id}</TextUser>
              <TextUser>Login: {userDetail.login}</TextUser>
              <TextUser>URL: {userDetail.URL}</TextUser>
              <TextUser>Date of the login creation: {formatDate(userDetail.crationAccoutDate)}</TextUser>
            </ContainerUser>
            <RepositoryRowHeader />
            <ContainerUser>
                {
                    userRepositories.map((repository: IRepository) => {
                        return (
                            <RepositoryRow
                                key={repository.id}
                                id={repository.id}
                                name={repository.name}
                                URL={repository.URL}
                            />
                        )
                    })
                }
            </ContainerUser>
        </ContainerUser>
    )
}

export async function getServerSideProps(context: any) {
  const login = context.params.login

  const userDetailsResponse = await fetch(`${process.env.API_URL}/api/users/${login}/details`,{
    method: "GET",
    headers: { 
    "Content-Type": "application/json",
    }
  });

  const userDetail = await userDetailsResponse.json();

  const userRepositoriesResponse = await fetch(`${process.env.API_URL}/api/users/${login}/repos`,{
    method: "GET",
    headers: { 
    "Content-Type": "application/json",
    }
  });

  const userRepositories = await userRepositoriesResponse.json();

  return {
    props: {
      userDetail,
      userRepositories
    }
  }
}