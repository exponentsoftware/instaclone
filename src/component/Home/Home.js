import React,{useState} from 'react';
import Cards from './Cards';

function Home() {
    const [like,setLike]=useState(0)
    const [mark,setMark]=useState([])

    const handleLike=e=>{
        e.preventDefault()
        like!==1 ? setLike(1) : setLike(0)
    }

    
    return (
        <>
        <h1>Home</h1>
        <Cards handleLike={handleLike} like={like}/>
        
        </>
    )
}

export default Home
