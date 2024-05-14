import { useEffect, useState } from 'react'
import { monsterHunterWorld } from '../utils/axios'
import Swal from 'sweetalert2'
import CardEquipment from '../components/CardSlide'

export default function ArmorPage(){
    const [armors, setArmors] = useState([])

    const fetchArmors = async() =>{
        try {
            const {data} = await monsterHunterWorld.get("/armor")
            console.log({data})
            setArmors(data)
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
        fetchArmors()
      }, [])

    return (
        <>
        <div className='container d-flex justify-content-center mt-3'>
            {armors.map(e => {
                return <CardEquipment key={e.id} items={e}/>
            })}
        </div>
        </>
    )
}