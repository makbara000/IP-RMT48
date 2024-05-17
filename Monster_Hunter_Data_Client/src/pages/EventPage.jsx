import { useEffect, useState, useCallback } from "react";
import { monsterHunterWorld } from "../utils/axios";
import Swal from "sweetalert2";
import InfiniteScroll from "react-infinite-scroll-component";

export default function EventPage() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [eventsDetail, setEventsDetail] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(search);
  };
  const getStartIndex = (pageNumber) =>
    pageNumber === 0 ? 0 : pageNumber * 10 - 1;

  const fetchEvents = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await monsterHunterWorld.get("/events", {
        params: {
          search: search,
        },
      });
      const start = getStartIndex(pageNumber);
      const newEvents = response.data.slice(start, start + 10);
      setEvents((prevEvents) => [...prevEvents, ...newEvents]);
      setPageNumber(pageNumber + 1);
      setHasMore(newEvents.length === 10);
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "back",
      });
    } finally {
      setLoading(false);
    }
  }, [pageNumber, loading]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEventsDetail = async (id) => {
    try {
      const { data } = await monsterHunterWorld.get(`/events/${id}`);
      console.log(data);
      setEventsDetail(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEventsDetail();
  }, []);
  return (
    <>
      <h1 className="d-flex justify-content-center">Events</h1>
      <br />
      <form className="form-inline my-2 my-lg-0 ml-3"  onSubmit={handleSearch}>
            <div>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
      <br />
      <InfiniteScroll
        dataLength={events.length}
        next={fetchEvents}
        hasMore={hasMore}
        height={1000}
      >
        <table className="table table table-hover ">
          <thead
            className="border-top"
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              borderCollapse: "collapse",
            }}
          >
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
            {events.map((e) => {
              return (
                <tr>
                  <td>{e.name}</td>
                  <td>{e.expansion}</td>
                  <td>{e.questRank}</td>
                  <td>{e.startTimestamp.split("T")[0]}</td>
                  <td>{e.endTimestamp.split("T")[0]}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-success my-2 my-sm-0"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={(el) => fetchEventsDetail(e.id)}
                    >
                      Details
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              Detail
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
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
                            <button
                              type="button"
                              className="btn btn-outline-danger my-2 my-sm-0"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </InfiniteScroll>
    </>
  );
}
