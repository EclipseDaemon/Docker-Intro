import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get("http://localhost:3000");
      setData(response.data.message);
    } catch (e) {
      console.error("Cant connect to server");
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <>
      <h1 className="text-center py-11 bg-blue-300 text-3xl font-bold">
        Docker Intro Project
      </h1>
      <div className="max-w-7xl mx-auto mt-11 bg-yellow-200">
        <p>This data is coming from server:</p>
        {data ? (
          <h2 className="font-bold text-lg mt-5">{data}</h2>
        ) : (
          <p className="mt-5">No data from server</p>
        )}
      </div>
    </>
  );
}

export default App;
