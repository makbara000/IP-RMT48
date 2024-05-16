import { useEffect, useState } from 'react'
import { serverSide } from '../utils/axios'
import Swal from 'sweetalert2'
import { CardWeapons } from '../components/CardSlide'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux'
import { setFetchWeapons } from '../features/data/weaponData'

export default function WeaponPage(){
    const [hasMore, setHasMore] = useState(true)
    const weapons = useSelector((state) => state.weapons.list)
    const [pageNumber, setPageNumber] = useState(0)
    const dispatch = useDispatch()


    const fetchWeapons = async() =>{
        try {
            const data = await serverSide.get("/weapons",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
            })
            .then((res) => {
                let newWeapon = weapons
                let start = (pageNumber === 0) ? 0 : (pageNumber * weapons.length) - 1
                let addWeapons = res.data.slice(start, 20)
                newWeapon = newWeapon.concat(addWeapons)
                dispatch(setFetchWeapons(newWeapon))
                setPageNumber(pageNumber + 1)
                setHasMore(newWeapon.length === 20)
            })
            // console.log(data)
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
                dataLength={20}
                next={fetchWeapons}
                hasMore={hasMore}
                className='container w-75 d-flex flex-wrap'
                >
                    {weapons.map(e => {
                        return <CardWeapons key={e.id} items={e}/>
                    })}
            </InfiniteScroll>
        </div>
        </>
    )
}
