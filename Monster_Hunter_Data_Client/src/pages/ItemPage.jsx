import { useEffect, useState } from 'react'
import { monsterHunterWorld } from '../utils/axios'
import Swal from 'sweetalert2'
import { CardItems} from '../components/CardSlide'
import { useParams } from 'react-router-dom'

export default function ItemPage(){
    const {id} = useParams()
    const [items, setItems] = useState([])

    const fetchItems = async() =>{
        try {
            const {data} = await monsterHunterWorld.get("/items")
            console.log(data)
            setItems(data)
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
        fetchItems()
      }, [])

    return (
        <>
        <div className='container-fluid text-center mx-auto p-0'>
            <div className='container w-75 d-flex flex-wrap'>
                {items.map(e => {
                    return <CardItems key={e.id} items={e}/>
                })}
            </div>
        </div>
        </>
    )
}