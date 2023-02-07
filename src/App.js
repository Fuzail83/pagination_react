import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./components/Records";
import Pagination from "./components/Pagination";

function App() {
  // To hold the actual data
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);
  console.log("currentPage", currentPage);

  console.log("recordsPerPage", recordsPerPage);

  const indexOfLastRecord = currentPage * recordsPerPage;

  console.log("indexOfLastRecord", indexOfLastRecord);

  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  console.log("indexOfFirstRecord", indexOfFirstRecord);

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  console.log("currentRecords", currentRecords);

  const nPages = Math.ceil(data.length / recordsPerPage);

  console.log("nPages", nPages);

  return (
    <div className="container mt-5">
      <h2> Pagination Example in React </h2>
      <Records data={currentRecords} />

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
