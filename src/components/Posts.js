import React from 'react'

export default function Posts({ currentPosts, loading }) {
    return loading ? <h2>loading...</h2> : 
    (<ul className='list-group'>{currentPosts.map((post) => {
      return  <li key={post.id} className='list-group-item'>{post.title}</li>
    })}</ul>)

}
