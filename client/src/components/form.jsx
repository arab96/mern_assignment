import React, { useState } from "react";
import axios from "axios";
// import { useRef } from "react";

function form({updated, setUpdated}) {
  const [name, setName] = useState("");

const handleSubmit = async(e) => {
  e.preventDefault();


    try {
    if(name===''){
      return
    }
      const response = await axios.post('/api/v1/test/', { name });
      console.log('Engineer added:', response.data);
  
      setUpdated(!updated)
      setName("")
    } catch (error) {
      console.error('Error adding engineers:', error.message);
    }

};
  return (
    <div className="max-w-4xl mx-auto m-10">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center">
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Engineer Name:"
            className="border rounded w-full py-2 px-3 mr-4"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default form;
