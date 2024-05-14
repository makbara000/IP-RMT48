import { useEffect, useState } from 'react'
import { monsterHunterWorld } from '../utils/axios'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
import { CardMonsters } from '../components/CardSlide'

export default function MonsterPage(){
    const {id} = useParams()
    const [monsters, setMonsters] = useState([])

    const fetchMonsters = async() =>{
        try {
            const {data} = await monsterHunterWorld.get("/monsters")
            console.log(data)
            setMonsters(data)
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
        fetchMonsters()
      }, [])

    return (
        <>
        <div className='container-fluid text-center mx-auto p-0'>
            <div className='container w-75 d-flex flex-wrap'>
                {monsters.map(e => {
                    return <CardMonsters key={e.id} monsters={e}/>
                })}
            </div>
        </div>
        </>
    )
}