import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { monsterHunterWorld } from "../utils/axios"

export default function WeaponDetailPage(){
    const [data, setData] = useState([])
    const [attackData, setAttackData] = useState([])
    const [attributekData, setAttributekData] = useState([])
    const [durabilityData, setDurabilityData] = useState([])
    const [elementData, setElementData] = useState([])
    let {id} = useParams()
    console.log(id)

    const fetchData = async() =>{
        try {
            const {data} = await monsterHunterWorld.get("/weapons/" + id)
            console.log(data)
            setData(data)
            setAttackData(data.attack)
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
    useEffect(() =>{
        fetchData()
    }, [])
    return (
        <>
        <h1>{data.type}: {data.name}</h1>
        <p><b>Damage Type:</b> {data.damageType}</p>
        <p><b>Rarity:</b> {data.rarity}</p>
        <p><b>Attack:</b> {attackData.display}</p>
        <p><b>Price:</b> {attackData.display * data.rarity * 1000}z </p>
        </>
    )
}