import React from 'react'
import CardsItems from './CardsItems'
import { nanoid } from 'nanoid'
import FiltersOffCanvas from '../Filters/FiltersOffCanvas'

function Process() {
  const processInfo = [
    {
      id: nanoid(),
      title : "Process 1",
      desc : "this process need to be resolved",
      freq : '10',
      isActive : "true",
      time : "14:05"
    },
    {
      id: nanoid(),
      title : "Process 2",
      desc : "this process need to be resolved ASAP!",
      freq : '9',
      isActive : "false",
      time : "14:05"
    },
    {
      id: nanoid(),
      title : "Process 5",
      desc : "this process need to be resolved",
      freq : '8',
      isActive :"false",
      time : "16:05"
    },
    {
      id: nanoid(),
      title : "Process 6",
      desc : "this process need to be resolved",
      freq : '1',
      isActive : "true",
      time : "18:05"
    },
    {
      id: nanoid(),
      title : "Process 11",
      desc : "this process need to be resolved",
      freq : '12',
      isActive : true,
      time : "01:00"
    },
]
    
  return (
    
    <div className='w-full max-w-2xl mx-auto shadow-md  rounded-lg px-4 py-3 m-5 text-white bg-gray-800'>

       <div className="flex items-center justify-between mb-4 ">
                <h5 className="text-xl  font-thin-bold leading-none text-gray-900 dark:text-white">Processes</h5>
               
                <FiltersOffCanvas/>
       </div>
       <div className="flow-root">
                 <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                 { processInfo.map((item) => (
                    <CardsItems key={item.id} 
                      title={item.title} 
                      desc = {item.desc}
                      freq = {item.freq}
                      isActive = {item.isActive}
                      time =  {item.time}
                    />
                  ))
                 }
                     {/* Other list items i can write here map will be good option to render */}
                 </ul>
             </div>
    </div>
  )
}


export default Process