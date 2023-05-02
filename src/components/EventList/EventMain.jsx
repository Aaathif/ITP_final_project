import React from 'react'
import EventList from './EventList';
import events from './EventDB';
import useFetch from '../../hooks/useFetch';

function EventMain() {

  const { data, loading, error } = useFetch("http://localhost:8000/api/event");
        console.log(data)

  return (
    <div>
      {
        data.map((event,index)=>{
            return <div key={index}><EventList event={event}/></div>
        })
      }
    </div>
  )
}

export default EventMain
