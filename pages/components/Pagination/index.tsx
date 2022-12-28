import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import { Container, PageActive, PageNormal, Icon } from './styled';

type Props = {
    sendPage: (page: number)=>void, 
    count: number, 
    pageSize: number,
}

export function Pagination({ sendPage, count, pageSize }: Props) {
  const[Count, setCount] = useState(0)
  
  useEffect(() => {
    sendPage(Count)
  }, [Count, sendPage])
  
  const iconSize = "32px"

  const icons = {
    arrowLeft:  <Icon onClick={() => {setCount(Count - pageSize)}} >
                    <FontAwesomeIcon 
                        icon={faAngleLeft}
                        fontSize={iconSize}
                    />
                </Icon>,
    arrowRight: <Icon onClick={() => {setCount(Count + pageSize)}} >
                    <FontAwesomeIcon 
                        icon={faAngleRight}
                        fontSize={iconSize}
                    />
                </Icon>
  };

  let arrayPages = [];
  const numberOfPage = Math.ceil(count/pageSize) + 1

  if ( numberOfPage <= 10 ) {
    for(let i = 1; i <= 10; i++) {
      arrayPages.push(i);
    }
  } else {
    if ( numberOfPage > 10 ) {
      for(let i = (numberOfPage - 9); i <= numberOfPage; i++) {
        arrayPages.push(i);
      }
    }
  }
  
  return (
    <Container>
        { Count != 0 && icons.arrowLeft }
        {
            arrayPages.map(Page => {
            return (
                <div key={Page}>
                    {
                        Page == numberOfPage ?
                        <PageActive onClick={()=>{setCount((Page - 1)*pageSize)}}>
                            {Page}
                        </PageActive> :
                        <PageNormal onClick={()=>{setCount((Page - 1)*pageSize)}}>
                            {Page}
                        </PageNormal>
                    }
                </div>
            )
            })
        }
        {icons.arrowRight} 
    </Container>     
  );
}   