import { useEffect, useState } from 'react'
import { monsterHunterWorld } from '../utils/axios'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"

export default function EventPage(){
    const [events, setEvents] = useState([])
    const [eventsDetail, setEventsDetail] = useState([])
    const fetchEvents = async() =>{
        try {
            const {data} =  await monsterHunterWorld.get("/events")
            console.log(data)
            setEvents(data)
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
        fetchEvents()
    }, [])
    const fetchEventsDetail = async(id) =>{
        try {
            const {data} = await monsterHunterWorld.get(`/events/${id}`)
            console.log(data)
            setEventsDetail(data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() =>{
        fetchEventsDetail()
    }, [])
    return(
        <>
            <h1 className='d-flex justify-content-center'>Events</h1><br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Expansion</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((e) =>{
                        return (
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.expansion}</td>
                                <td>{e.questRank}</td>
                                <td>{e.startTimestamp.split('T')[0]}</td>
                                <td>{e.endTimestamp.split('T')[0]}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#exampleModalCenter" onClick={(el) =>fetchEventsDetail(e.id)}>
                                    Details
                                    </button>
                                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">Detail</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <h5>Description</h5>
                                            {eventsDetail.description}
                                        </div>
                                        <div className="modal-body">
                                            <h5>Requirements</h5>
                                            {eventsDetail.requirements}
                                        </div>
                                        <div className="modal-body">
                                            <h5>Condition</h5>
                                            {eventsDetail.successConditions}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-danger my-2 my-sm-0" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}