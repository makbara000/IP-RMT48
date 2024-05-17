import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { monsterHunterWorld, serverSide } from "../utils/axios"
import Swal from 'sweetalert2'

export default function WeaponDetailPage(){
    const [data, setData] = useState([])
    const [transaction, setTransaction] = useState([])
    const [attackData, setAttackData] = useState([])
    const [attributeData, setAttributeData] = useState([])
    const [assetsData, setAssetsData] = useState([])
    let {id} = useParams()
    console.log(id)

    const fetchData = async() =>{
        try {
            const {data} = await serverSide.get("/weapons/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
            })
            const transactionData = await serverSide.get(`/generate-midtrans-token?price=${data.attack.display * data.rarity * 100}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
            })
            console.log(data)
            console.log(transactionData.data)
            setData(data)
            setTransaction(transactionData.data)
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
    const handleOnBuy = () =>{
        window.snap.pay(`${transaction.token}`, {
            onSuccess: function(result){
              /* You may add your own implementation here */
              alert("payment success!"); console.log(result);
            },
          })
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
            <button onClick={handleOnBuy} className="btn btn-outline-success my-2 my-sm-0">Buy Item</button><br />
        </div>
        </>
    )
}