import Head from 'next/head'
import { useEffect, useState } from 'react'
import getUsersList from '../services/getUsersList'
import { ContainerIndex, TextIndex } from '../styles/index.styles'
import { Pagination } from './components/Pagination'
import { UserFirstRow } from './components/UserRowHeader'
import { UserRow } from './components/UserRow'
import { Header } from './components/Header'
import Link from 'next/link'

export default function Home() {
  const [page, setPage] = useState(0)
  // const [usersListData, setUsersListData] = useState({
  //   usersList: [{id: 0, login: ''}],
  //   pageSize: 0,
  //   page: 0
  // })

  // useEffect(()=>{
    // const usersListService = async (page: number) => {
    //   const response = await getUsersList(page)
    //   setUsersListData(response)
    // }

    // usersListService(page)
    //     .catch(console.error)
  // },[page])

  const pageInfo = (value: number) => {
    setPage(value)
}

  return (
    <ContainerIndex >
      <Header />
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
        </ContainerIndex> :
        <TextIndex>Carregando Página...</TextIndex>
      }
      <Pagination 
        count={usersListData.page}
        pageSize={usersListData.pageSize}
        sendPage={pageInfo}
      />
    </ContainerIndex>
  )
}

const usersListData = {
  usersList: [
    {
      login: 'defunkt',
      id: 2,
    },
    {
      login: 'pjhyett',
      id: 3,
    },
    {
      login: 'wycats',
      id: 4,
    },
    {
      login: 'ezmobius',
      id: 5,
    },
    {
      login: 'ivey',
      id: 6,
    },
    {
      login: 'evanphx',
      id: 7,
    },
    {
      login: 'vanpelt',
      id: 17,
    },
    {
      login: 'wayneeseguin',
      id: 18,
    },
    {
      login: 'brynary',
      id: 19,
    },
    {
      login: 'kevinclark',
      id: 20,
    },
    {
      login: 'technoweenie',
      id: 21,
    },
    {
      login: 'macournoyer',
      id: 22,
    },
    {
      login: 'takeo',
      id: 23,
    },
    {
      login: 'caged',
      id: 25,
    },
    {
      login: 'topfunky',
      id: 26,
    },
    {
      login: 'anotherjesse',
      id: 27,
    },
    {
      login: 'roland',
      id: 28,
    },
    {
      login: 'lukas',
      id: 29,
    },
    {
      login: 'fanvsfan',
      id: 30,
    },
    {
      login: 'tomtt',
      id: 31,
    },
    {
      login: 'railsjitsu',
      id: 32,
    },
    {
      login: 'nitay',
      id: 34,
    },
    {
      login: 'kevwil',
      id: 35,
    },
    {
      login: 'KirinDave',
      id: 36,
    },
    {
      login: 'jamesgolick',
      id: 37,
    },
    {
      login: 'atmos',
      id: 38,
    },
    {
      login: 'errfree',
      id: 44,
    },
    {
      login: 'mojodna',
      id: 45,
    },
    {
      login: 'bmizerany',
      id: 46,
    },
    {
      login: 'jnewland',
      id: 47,
    },
  ],
  pageSize: 30,
  page: 0,
};