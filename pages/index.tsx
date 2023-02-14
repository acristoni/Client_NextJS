import { useEffect, useState } from 'react'
import getUsersList from '../services/getUsersList'
import { ContainerIndex, TextIndex } from '../styles/index.styles'
import Pagination from '../components/Pagination'
import UserFirstRow from '../components/UserRowHeader'
import UserRow from '../components/UserRow'
import Header from '../components/Header'

export default function Home() {
  const [page, setPage] = useState(0)
  const [usersListData, setUsersListData] = useState({
    usersList: [{id: 0, login: ''}],
    pageSize: 0,
    page: 0
  })

  useEffect(()=>{
    const usersListService = async (page: number) => {
      const response = await getUsersList(page)
      setUsersListData(response)
    }

    usersListService(page)
        .catch(console.error)
  },[page])

  const pageInfo = (value: number) => {
    setPage(value)
}

  return (
    <ContainerIndex >
      <Header pageText="This is the rendering page of the list of users in ascending order of the id number in the GitHub base, when clicking on any of the lines that have the user id and login number you will be directed to the page where you will have more details of the specific user and the list of all its public repositories"/>
      {
        usersListData?.usersList?.length > 1 ?
        <ContainerIndex>
          <UserFirstRow />
          {
            usersListData.usersList.map(user => {
              return (
                  <UserRow
                    key={user.id}
                    id={user.id}
                    login={user.login}
                  />
              )
            })
          }
          <Pagination 
            count={usersListData.page}
            pageSize={usersListData.pageSize}
            sendPage={pageInfo}
          />
        </ContainerIndex> :
        <TextIndex style={{marginTop: '3%'}}>Carregando Página...</TextIndex>
      }
    </ContainerIndex>
  )
}
