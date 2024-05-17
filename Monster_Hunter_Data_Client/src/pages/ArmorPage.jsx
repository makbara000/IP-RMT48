import { useEffect } from 'react'
import CardArmors from '../components/CardSlide'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux'
import { fetchArmors } from '../features/data/armorData'

export default function ArmorPage(){
    const dispatch = useDispatch();
    const { list, hasMore, loading } = useSelector((state) => state.armors);

    useEffect(() => {
        dispatch(fetchArmors());
      }, [dispatch]);
    
      const fetchMoreArmors = () => {
        if (!loading && hasMore) {
          dispatch(fetchArmors());
        }
      };

    return (
        <>
        <h1 className="d-flex justify-content-center">Armors</h1>
        <div>
          <InfiniteScroll
            dataLength={list.length}
            next={fetchMoreArmors}
            hasMore={hasMore}
            height={1000}
            className='container w-75 d-flex flex-wrap'
          >
                {list.map(e => {
                    return <CardArmors key={e.id} items={e}/>
                })}
          </InfiniteScroll>
        </div>
        </>
    )
}