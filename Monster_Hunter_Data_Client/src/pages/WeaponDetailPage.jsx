import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { monsterHunterWorld } from "../utils/axios"

export default function WeaponDetailPage(){
    const [data, setData] = useState([])
    const [attackData, setAttackData] = useState([])
    const [attributeData, setAttributeData] = useState([])
    const [assetsData, setAssetsData] = useState([])
    let {id} = useParams()
    console.log(id)

    const fetchData = async() =>{
        try {
            const {data} = await monsterHunterWorld.get("/weapons/" + id)
            console.log(data)
            setData(data)
            setAttackData(data.attack)
            setAssetsData(data.assets)
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
        <div className="card container w-25 d-flex">
        <img 
            src={assetsData.image} 
            alt={data.name} />
        <div className="d-flex justify-content-center text-align-center">
            <h4>{data.type}: {data.name}</h4>
        </div>
        <div className="d-flex justify-content-center">
            <p><b>Damage Type:</b> {data.damageType}</p>
        </div>
        <div className="d-flex justify-content-center">
            <p><b>Rarity:</b> {data.rarity}</p>
            
        </div>
        <div className="d-flex justify-content-center">
            <p><b>Attack:</b> {attackData.display}</p>
            
        </div>
        <div className="d-flex justify-content-center">
            <p><b>Attribute:</b> {attributeData.type}</p>
            
        </div>
        <div className="d-flex justify-content-center">
            <p><b>Price:</b> {attackData.display * data.rarity * 100}z </p>
            
        </div>
            <button className="btn btn-outline-success my-2 my-sm-0">Add to Wishlist</button><br />
        </div>
        </>
    )
}