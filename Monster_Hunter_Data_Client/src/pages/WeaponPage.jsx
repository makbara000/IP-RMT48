import { useEffect, useState, useCallback } from 'react'
import Swal from 'sweetalert2'
import { CardWeapons } from '../components/CardSlide'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeapons } from '../features/data/weaponData'

export default function WeaponPage() {
    const dispatch = useDispatch();
    const { list, hasMore, loading } = useSelector((state) => state.weapons);
  
    useEffect(() => {
      dispatch(fetchWeapons());
    }, [dispatch]);
  
    const fetchMoreWeapons = () => {
      if (!loading && hasMore) {
        dispatch(fetchWeapons());
      }
    };
  
    return (
      <>
        <h1 className="d-flex justify-content-center">Weapons</h1>
        <div>
          <InfiniteScroll
            dataLength={list.length}
            next={fetchMoreWeapons}
            hasMore={hasMore}
            height={1000}
            className='container w-75 d-flex flex-wrap'
          >
            {list.map((e) => (
              <CardWeapons key={e.id} items={e} />
            ))}
          </InfiniteScroll>
        </div>
      </>
    );
  }