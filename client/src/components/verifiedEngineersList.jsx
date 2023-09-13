import React from "react";
import axios from "axios";
function VerifiedEngineersList({ data, updated, setUpdated }) {
  const removeEngineers = async () => {
    try {
      const response = await axios.post(
        `/api/v1/test/update-engineers/${data._id}`,
        { verified: false }
      );
  
      setUpdated(!updated);

    } catch (error) {
      console.error("Error updating Engineers:", error.message);
    }
  };
  return (
    <div>
      <ul className="max-w-4xl mx-auto bg-gray-100 rounded-md ">
        <li className="py-2 px-4 flex items-center justify-between my-4">
          <span className="text-lg">
            {data.name}
          </span>
          <div>
            <button
              onClick={removeEngineers}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default VerifiedEngineersList;
