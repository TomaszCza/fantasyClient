import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {

    const { data } = await axios("http://localhost:8080/players").catch((err) => console.log(err));
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Table mockData={data} />
    </div>
  );
}

export default App;
