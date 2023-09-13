import React, { useEffect } from "react";
import axios from "axios";
function Engineers({ data, updated, setUpdated }) {


  const updateEngineers = async () => {
    try {
      const response = await axios.post(
        `/api/v1/test/update-engineers/${data._id}`,
        { verified: true }
      );

      setUpdated(!updated)

    } catch (error) {
      console.error("Error updating engineers:"+error);
    }
  };

  return (
    <div>
      <ul className="bg-gray-100 rounded-md ">
        <li className="py-2 px-4 flex items-center justify-between my-4">
          <span className="text-lg">
            {data.name}
          </span>
          <div>
            <button
              onClick={updateEngineers}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Verify
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Engineers;
