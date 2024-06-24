import { useState, useEffect } from 'react';
import ListData from './ Components/ListData';


function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users')
  const [reqItems, setReqItems] = useState([])

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + reqType);
        if(!response.ok) throw Error('Did not receive expected data');
        const data = await response.json();
        setReqItems(data);
      } catch(err) {
        console.log(err.message)
      }
    }

    fetchData();

  }, [reqType])

  const handleUsersClick = () => {
    setReqType('users');
  }

  const handlePostsClick = () => {
    setReqType('posts');
  }

  const handleCommentsClick = () => {
    setReqType('comments');
  }

  return (
    <>
      <div style={{position: 'absolute', top:'5px', width: '100vw', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly'}}>
        <button onClick={handleUsersClick} style={{border: reqType == 'users' ? 'solid 1px white': 'none' }}>users</button>
        <button onClick={handlePostsClick} style={{border: reqType == 'posts' ? 'solid 1px white': 'none' }}>posts</button>
        <button onClick={handleCommentsClick} style={{border: reqType == 'comments' ? 'solid 1px white': 'none' }}>comments</button>
      </div>
      <div>
        <ListData data={reqItems} /> 
      </div>
    </>
  )
}

export default App
