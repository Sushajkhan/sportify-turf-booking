import React, { useState } from 'react'


const DatePick = () => {
const [date,setDate]=useState("")
  const handleSetDate = (e) => {
    setDate(e.target.value);
  };
  return (
	<><div>
  <label for="Pick a date" class="block mb-2 text-sm font-medium text-gray-900">Pick a date</label>

  <input type="date" placeholder="Pick a date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  
  value={date}
  onChange={handleSetDate}
  />
</div>
   </>
  )
}

export default DatePick;