
'use client';

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./slices/userSlice";
import { AppDispatch, RootState } from './store/store';

export default function Home() {

  const ref = useRef(false);

 const { entities, loading } = useSelector((state: RootState) => state.user)

 const dispatch = useDispatch<AppDispatch>();

  console.log("==================================================")
  console.log(entities)
  console.log(loading)
  console.log("==================================================")

  useEffect(() => {

    if (ref.current === false ){
      dispatch(fetchUsers())
    }

    return () => {
      ref.current = true
    }
    
  }, [dispatch]);

  return (
    <div>

      {loading ? (<h1>Loading.....</h1> ): 
        
        (entities?.map((user: any) => (
          <h5 key={user.id}>{user.name}</h5>
        )))
      
      }
      
    </div>
  );
}
