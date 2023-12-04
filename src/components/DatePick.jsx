import React, { useState } from 'react'


const DatePick = () => {
const [date,setDate]=useState("")
  const handleSetDate = (e) => {
    setDate(e.target.value);
  };
  return (
	<><div>
  <label for="Pick a date" class="block text-sm text-gray-500 dark:text-gray-300 mt-20">Pick a date</label>

  <input type="date" placeholder="Pick a date" class="block  mt-2  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
  
  value={date}
  onChange={handleSetDate}
  />
</div>
   </>
  )
}

export default DatePick;