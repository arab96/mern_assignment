import React, { useEffect, useState } from "react";
import VerifiedEngineersList from "./verifiedEngineersList";
function EngineersVerified({verifiedEngineers, updated, setUpdated}) {
 

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className="text-lg font-bold mb-4 text-center">Verified Engineers </h2>
      {verifiedEngineers.length > 0 && verifiedEngineers.map((engineer) => (
        <VerifiedEngineersList key={engineer._id} data={engineer}   updated={updated} setUpdated={setUpdated}/>
        ))}
    </div>
  );
}

export default EngineersVerified;
