import React from 'react'
// import data from './SubDB'
import Sub from './Sub'
import useFetch from '../../../hooks/useFetch';

function SubPage() {

  const { data, loading, error } = useFetch("http://localhost:8000/api/blog");
  console.log(data)

  return (
    <div>
      <div>
        {
          loading ? (
            "Loading please wait"
          ) : (
            <>
              {
                data.map(Data => {
                  return <div key={Data._id}><Sub Data={Data} /> </div>
                })
              }

            </>)
        }
      </div>
    </div>
  )
}

export default SubPage
