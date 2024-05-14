import { useEffect, useState } from 'react'
import { monsterHunterWorld } from '../utils/axios'
import Swal from 'sweetalert2'
import CardEquipment, { CardWeapons } from '../components/CardSlide'
import { useParams } from 'react-router-dom'

export default function WeaponPage(){
    const {id} = useParams()
    const [weapons, setWeapons] = useState([])

    const fetchWeapons = async() =>{
        try {
            const {data} = await monsterHunterWorld.get("/weapons")
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
        <div className='container-fluid text-center mx-auto p-0'>
            <div className='container w-75 d-flex flex-wrap'>
                {weapons.map(e => {
                    return <CardWeapons key={e.id} items={e}/>
                })}
            </div>
        </div>
        </>
    )
}