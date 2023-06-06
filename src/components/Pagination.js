import React from 'react'

export default function Pagination({postsLength,postPerPage,pagination}) {
    const numbers=[]
    for (let i = 1; i < Math.ceil(postsLength/postPerPage); i++) {
      numbers.push(i)
    }
  return (
    <ul className='pagination'>{numbers.map((number) => 
        <li key={number} className='page-link' >
            <a onClick={() => {
                pagination(number)
            }} href='!#'>{number}</a>
        </li>
    )}
    </ul>
  )
}
