import { useEffect, useState } from 'react'
import { monsterHunterWorld, serverSide } from '../utils/axios'
import Swal from 'sweetalert2'
import { CardWeapons } from '../components/CardSlide'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function WeaponPage(){
    const [weapons, setWeapons] = useState([])
    const [hasMore, setHasMore] = useState(true)


    const fetchWeapons = async() =>{
        try {
            const {data} = await serverSide.get("/weapons?offset=10&limit=12",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
            })
            console.log(data)
            setWeapons(data)
        } catch (error) {
            console.log(error.response.data.message)
            Swal.fire({
              title: 'Error!',
              text: error.response.data.message,
              icon: 'error',
              confirmButtonText: 'back'
            })
        }
    }
    useEffect(() => {
        fetchWeapons()
      }, [])

    return (
        <>
        <div >
            <InfiniteScroll 
                dataLength={weapons.length}
                next={fetchWeapons}
                hasMore={hasMore}
                loader={<p>Hold on...</p>}
                >
                    <div className='container w-75 d-flex flex-wrap'>
                        {weapons.map(e => {
                            return <CardWeapons key={e.id} items={e}/>
                        })}
                    </div>
            </InfiniteScroll>
        </div>
        </>
    )
}