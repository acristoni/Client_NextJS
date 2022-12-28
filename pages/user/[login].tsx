import { IRepository } from "../../interfaces/repository.interface";
import { IUserDetail } from "../../interfaces/userDetail.interface";
import { ContainerUser, TextUser, TextUserHeader } from "../../styles/user.styles";
import { formatDate } from "../../utils/formatDate";
import { Header } from "../components/Header";
import { RepositoryRow } from "../components/RepositoryRow";
import { RepositoryRowHeader } from "../components/RepositoryRowHeader";

type Props = {
    userDetail: IUserDetail,
    userRepositories: IRepository[]
}

export default function UserPage ({ userDetail, userRepositories }: Props) {    
    return (
        <ContainerUser>
            <Header />
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

export const userDetail: IUserDetail = {
    id: 107071638,
    login: 'acristoni',
    URL: 'https://api.github.com/users/acristoni',
    crationAccoutDate: '2022-06-07T18:18:14Z',
};

export const userRepositories: IRepository[] = [
    {
      id: 518512384,
      name: 'AirBnb-Clone',
      URL: 'https://github.com/acristoni/AirBnb-Clone',
    },
    {
      id: 518329655,
      name: 'api-dioshopping',
      URL: 'https://github.com/acristoni/api-dioshopping',
    },
    {
      id: 503106504,
      name: 'app-mosquito',
      URL: 'https://github.com/acristoni/app-mosquito',
    },
    {
      id: 522710246,
      name: 'Client_Agencia_Veiculos',
      URL: 'https://github.com/acristoni/Client_Agencia_Veiculos',
    },
    {
      id: 504265815,
      name: 'desafio-typescript',
      URL: 'https://github.com/acristoni/desafio-typescript',
    },
    {
      id: 518501596,
      name: 'Digital-Business-Card',
      URL: 'https://github.com/acristoni/Digital-Business-Card',
    },
    {
      id: 518329419,
      name: 'dioshopping',
      URL: 'https://github.com/acristoni/dioshopping',
    },
    {
      id: 513355219,
      name: 'github-api-interface',
      URL: 'https://github.com/acristoni/github-api-interface',
    },
    {
      id: 523916381,
      name: 'GraphQL-event-booking',
      URL: 'https://github.com/acristoni/GraphQL-event-booking',
    },
    {
      id: 501773189,
      name: 'instagram-dio',
      URL: 'https://github.com/acristoni/instagram-dio',
    },
    {
      id: 576408541,
      name: 'JavaScript-Data-Structure',
      URL: 'https://github.com/acristoni/JavaScript-Data-Structure',
    },
    {
      id: 518514012,
      name: 'my-travel',
      URL: 'https://github.com/acristoni/my-travel',
    },
    {
      id: 518515500,
      name: 'Naruto-Quotes',
      URL: 'https://github.com/acristoni/Naruto-Quotes',
    },
    {
      id: 569356521,
      name: 'Portfolio',
      URL: 'https://github.com/acristoni/Portfolio',
    },
    {
      id: 518494615,
      name: 'React-Info',
      URL: 'https://github.com/acristoni/React-Info',
    },
    {
      id: 525875188,
      name: 'sample-analytics',
      URL: 'https://github.com/acristoni/sample-analytics',
    },
    {
      id: 525860814,
      name: 'sample-backend',
      URL: 'https://github.com/acristoni/sample-backend',
    },
    {
      id: 525875037,
      name: 'sample-communication',
      URL: 'https://github.com/acristoni/sample-communication',
    },
    {
      id: 522695486,
      name: 'Server_Agencia_Veiculos',
      URL: 'https://github.com/acristoni/Server_Agencia_Veiculos',
    },
    {
      id: 502023339,
      name: 'Sonic-Pixel-Art',
      URL: 'https://github.com/acristoni/Sonic-Pixel-Art',
    },
    {
      id: 501003472,
      name: 'TudoSobreALua',
      URL: 'https://github.com/acristoni/TudoSobreALua',
    },
    {
      id: 581555486,
      name: 'youtube-serie-redux-front-end',
      URL: 'https://github.com/acristoni/youtube-serie-redux-front-end',
    },
];