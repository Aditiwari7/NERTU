import React, { useState } from "react";
import { StaffData, AdministrationData } from "./StaffData";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const StaffMain = () => {
  const [data, setData] = useState(StaffData);
  const [searchText, setSearchText] = useState("");
  const [dataA, setDataA] = useState(AdministrationData);
  const [searchTextA, setSearchTextA] = useState("");

  const excludeColumns = ["S.No."];

  const handleChangeA = (value) => {
    setSearchTextA(value);
    filterDataA(value);
  };
  const filterDataA = (value) => {
    const lowercasedValue = value.toLowerCase().trim();

    if (lowercasedValue === "") setData(AdministrationData);
    else {
      const filteredData = AdministrationData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setDataA(filteredData);
    }
  };

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();

    if (lowercasedValue === "") setData(StaffData);
    else {
      const filteredData = StaffData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <div id="staff" className="m-4 pt-2">
      <div>
        <h1 className="text-center text-info py-5 mt-5" style={{fontWeight:800, fontSize:40}}>Administration</h1>
        <Form>
          <center>
            <InputGroup className='w-75'>
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Type to search..."
                value={searchTextA}
                onChange={(e) => handleChangeA(e.target.value)}
              />
            </InputGroup>
          </center>
        </Form>
      </div>

      <Table striped bordered hover className="bg-light mt-3 ml-5 mr-5 px-5">
        <thead style={{ border: 30 }}>
          <tr>
            <th>S.No</th>
            <th style={{ width: 360 }}>Name</th>
            <th>Designation</th>
            <th style={{ width: 130 }}>From</th>
            <th style={{ width: 130 }}>To</th>
            <th style={{ width: 180 }}>Mobile</th>
            {/* <th style={{ width: 200 }}>Mail ID</th> */}
          </tr>
        </thead>
        <tbody>
        {/* font-weight: 500; */}
          {dataA.map((item, index) => (
            <tr key={index} className="p-3" style={{ border: 10}}>
              <td>{item["S.No."]}</td>
              <td className="text-start ps-5" style={{fontWeight:550}}>{item.Name}</td>
              <td>{item.Designation}</td>
              <td>{item.From}</td>
              <td>{item.To}</td>
              <td>{item.Mobile}</td>
              {/* <td>{item.Mail}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h1 className="text-center text-info py-5 mt-5" style={{fontWeight:800, fontSize:40}}>Staff</h1>
        <Form>
          <center>
            <InputGroup className='w-75'>
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={(e) => handleChange(e.target.value)}
              />
            </InputGroup>
          </center>
        </Form>
      </div>

      <Table striped bordered hover className="bg-light mt-3 ml-3 mr-3">
        <thead style={{ border: 30 }}>
          <tr>
            <th>S.No</th>
            <th style={{ width: 270 }}>Name</th>
            <th>Designation</th>
            <th style={{ width: 130 }}>From</th>
            <th style={{ width: 130 }}>To</th>
            <th style={{ width: 180 }}>Mobile</th>
            <th style={{ width: 200 }}>Mail ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="p-3" style={{ border: 10 }}>
              <td>{item["S.No."]}</td>
              <td className="text-start ps-5" style={{fontWeight:550}}>{item.Name}</td>
              <td>{item.Designation}</td>
              <td>{item.From}</td>
              <td>{item.To}</td>
              <td>{item.Mobile}</td>
              <td>{item.Mail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StaffMain;
