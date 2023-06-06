import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log('res', res)
        setPosts(res.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const pagination = (currentNumber) => {
    setCurrentPage(currentNumber)
  }
  const indexOfFirstPosts = currentPage * postPerPage - postPerPage
  const currentPosts = posts.slice(indexOfFirstPosts, currentPage * postPerPage)

  return (
    <div className="App container mt-5">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts currentPosts={currentPosts} loading={loading} />
      <Pagination postsLength={posts.length} postPerPage={postPerPage} pagination={pagination} />
    </div>
  );
}

export default App;
