import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import { ContainerPagination, PageActive, PageNormal, Icon } from './styled';

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
    arrowLeft:  <Icon 
                  onClick={() => {setCount(Count - pageSize)}} 
                  style={{marginRight: '2.0rem'}}
                  data-testid='leftArrow'
                >
                    <FontAwesomeIcon 
                        icon={faAngleLeft}
                        fontSize={iconSize}
                    />
                </Icon>,
    arrowRight: <Icon 
                  onClick={() => {setCount(Count + pageSize)}}
                  data-testid='rightArrow'
                >
                    <FontAwesomeIcon 
                        icon={faAngleRight}
                        fontSize={iconSize}
                    />
                </Icon>
  };

  let arrayPages = [];
  const numberOfPage = Math.ceil(count/pageSize) + 1

  if ( numberOfPage <= 3 ) {
    for(let i = 1; i <= 3; i++) {
      arrayPages.push(i);
    }
  } else {
    if ( numberOfPage > 3 ) {
      for(let i = (numberOfPage - 2); i <= numberOfPage; i++) {
        arrayPages.push(i);
      }
    }
  }
  
  return (
    <ContainerPagination data-testid='pagination'>
        { Count != 0 && icons.arrowLeft }
        {
            arrayPages.map(Page => {
            return (
                <div key={Page} data-testid={Page}>
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
    </ContainerPagination>     
  );
}   