import React, { useEffect, useState } from "react";
import Engineers from "./engineers";
const EngineersList = ({unVerifiedEngineers, updated,setUpdated}) => {

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center">
        Waiting Interview List 
      </h2>
      <ul>
        {unVerifiedEngineers.length > 0 && unVerifiedEngineers.map(engineer =>
          <Engineers
            key={engineer._id}
            data={engineer}
            updated={updated} setUpdated={setUpdated}
      
          />
        )}
      </ul>
    </div>
  );
};

export default EngineersList;
