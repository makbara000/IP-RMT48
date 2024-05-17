import { useEffect } from 'react'
import { CardItems} from '../components/CardSlide'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchItems } from '../features/data/itemData'

export default function ItemPage(){
    const dispatch = useDispatch();
    const { list, hasMore, loading } = useSelector((state) => state.items);

    useEffect(() => {
        dispatch(fetchItems());
      }, [dispatch]);
    
    const fetchMoreItems = () =>{
        if (!loading && hasMore) {
            dispatch(fetchItems());
        }
    }

    return (
        <>
        <h1 className="d-flex justify-content-center">Items</h1>
        <div>
        <InfiniteScroll
          dataLength={list.length}
          next={fetchMoreItems}
          hasMore={hasMore}
          className='container w-75 d-flex flex-wrap'
        >
            {list.map(e => {
                return <CardItems key={e.id} items={e}/>
            })}
        </InfiniteScroll>
        </div>
        </>
    )
}