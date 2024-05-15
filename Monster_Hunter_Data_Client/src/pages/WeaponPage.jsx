import { useEffect, useState } from 'react'
import { monsterHunterWorld } from '../utils/axios'
import Swal from 'sweetalert2'
import { CardWeapons } from '../components/CardSlide'
import { useParams } from 'react-router-dom'

export default function WeaponPage(){
    const [weapons, setWeapons] = useState([])
    const [weaponsId, setWeaponsId] = useState([])

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
    const fetchWeaponsId = async(id) =>{
        try {
            const {data} = await monsterHunterWorld.get(`/weapons/${id}`)
            console.log(data)
            setWeaponsId(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    useEffect(() => {
        fetchWeaponsId()
      }, [])

    return (
        <>
        <div >
            <div className='container w-75 d-flex flex-wrap'>
                {weapons.map(e => {
                    return <CardWeapons key={e.id} items={e}/>
                })}
            </div>
        </div>
        </>
    )
}