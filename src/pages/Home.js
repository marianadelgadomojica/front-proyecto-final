import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeSingleData from "./HomeSingleData";
import HomeMainData from "./HomeMainData";
import Table from "react-bootstrap/Table";
import Historicos from "./Historicos";

const Home = () => {
  const [data, setData] = useState([]);
  const obtenerData = async () => {
    const res = await axios.get(`http://54.152.183.8:5000/api/v1/data`);
    const data = await res.data.data;
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    obtenerData();
  }, []);
const main = data[0];
  return (
    <div>
      {data.map(
        (obj, index) =>
          index === 0 && (
            <div>
              <br></br>
              <h1>
                {" "}
                <HomeMainData props={main} key={index} />
              </h1>
              <br></br>
            </div>
          )
      )}
      <Table striped bordered hover variant="dark">
        <tbody>
          {data.map((obj, index) => (
            <tr>
              <td>
                <HomeSingleData props={obj} key={index} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
