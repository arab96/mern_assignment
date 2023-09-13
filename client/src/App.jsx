import React, { useEffect, useState } from "react";
import Form from "./components/form";
import EngineersList from "./components/engineersList";
import EngineersVerified from "./components/engineersVerified";
import axios from "axios";
function App() {
  const [unVerifiedEngineers, setUnVerifiedEngineers] = useState([]);
  const [verifiedEngineers, setVerifiedEngineers] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(
    () => {
      const fetchUnverifiedEngineers = async () => {
        try {
          const { data } = await axios.get("/api/v1/test/get-engineers");

          setUnVerifiedEngineers(data.engineer);
        } catch (error) {
          console.error("Error fetching engineers:"+error);
        }
      };

      fetchUnverifiedEngineers();
    },
    [updated]
  );

  useEffect(
    () => {
      const fetchVerifiedEngineers = async () => {
        try {
          const { data } = await axios.get(
            "/api/v1/test/get-verified-engineers"
          );
          setVerifiedEngineers(data.engineers);
        } catch (error) {
          console.error("Error fetching Engineers:", error.message);
        }
      };

      fetchVerifiedEngineers ();
    },
    [updated]
  );

  return (
    <div>
      <Form updated={updated} setUpdated={setUpdated} />
      <EngineersList
        unVerifiedEngineers={unVerifiedEngineers}
        updated={updated}
        setUpdated={setUpdated}
      />
      <EngineersVerified
        verifiedEngineers={verifiedEngineers}
        updated={updated}
        setUpdated={setUpdated}
      />
    </div>
  );
}

export default App;
