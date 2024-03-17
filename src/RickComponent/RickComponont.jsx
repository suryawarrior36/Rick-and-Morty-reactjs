import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import CharacterComponent from '../CharacterComponent/CharacterComponent'
import './RickComponent.css'

const HomePageComponent = () => {
  
    // const [characterData , setCharacterData ] = useState('')
    const [page,setPage]=useState(1)
    const movetopreviouspage =async()=>{
        
            setPage(page-1)
           
        
    }
    const movetonextpage =async()=>{
        
            setPage(page+1)
            
    }

    const getRickAPI = async ({queryKey}) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        // setCharacterData(response.data)
        return response.data
    }
    // useEffect (() => {
    //     getRickAPI()
    // },[page])
 const {data,isPreviousData,isLoading,isError}=useQuery(['character', page],getRickAPI,{
    keepPreviousData:true
 })

 if(isLoading)
 {
   return <div>Loading...</div> 
 }
 if(isError)
 {
   return <div>Error Occurred!</div>
 }
return (
    <React.Fragment>
<main >
    <section className='head-section'>
   <h1 className='head'>
                Rick And Morty
            </h1>
    </section>
        <div className='main_cont'>
           
            {
                data.results && data.results.map((character) => (
                    <CharacterComponent character={character}/>
                ))
            }
            
        </div>
        <footer className='but_con'>
            <button className='button' disabled={data.info && data.info.prev===null} onClick={movetopreviouspage}>
                previous</button>
            <p className='page_no'>{page}</p>
            <button className='button' disabled={isPreviousData || !data.info.next} onClick={movetonextpage}>next</button>
        </footer>
            
</main>
    </React.Fragment>
  )
}

export default HomePageComponent
