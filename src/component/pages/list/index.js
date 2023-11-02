import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
  MDBPagination,
  MDBPaginationLink,
  MDBPaginationItem,
} from "mdb-react-ui-kit";

const List = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);
  const [operation, setOperation] = useState("");

  const sortOption = ["name", "location", "email", "phone", "status"];

  useEffect(() => {
    loadUserData(0, 4, 0);
  }, []);

  const loadUserData = async (
    start,
    end,
    increase,
    optType = null,
    filterOrSortValue
  ) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSort("");
        return await axios
          .get(
            `http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
      default:
        return await axios
          .get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
    }
  };

  console.log("data", data);

  const handleReset = () => {
    loadUserData(0, 4, 0);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    loadUserData(0, 4, 0, "search");
  };

  const handleSort = async (e) => {
    let value = e.target.value;
    setSort(value);
    return await axios
      .get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleFilter = async (value) => {
    return await axios
      .get(`http://localhost:5000/users?status=${value}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const renderPagination = () => {
    if (currentPage === 0) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn onClick={() => loadUserData(4, 8, 1, operation)}>
              Next
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadUserData(
                  (currentPage - 1) * 4,
                  currentPage * 4,
                  -1,
                  operation
                )
              }
            >
              Prev
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>

          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadUserData(
                  (currentPage + 1) * 4,
                  (currentPage + 2) * 4,
                  1,
                  operation
                )
              }
            >
              Next
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBBtn onClick={() => loadUserData(4, 8, -1, operation)}>
              Prev
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      );
    }
  };

  return (
    <MDBContainer>
      <form
        style={{
          margin: "auto",
          padding: "10px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        className="d-flex w-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search .."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <MDBBtn type="submit" color="warning">
          Search
        </MDBBtn>
        <MDBBtn color="info" onClick={() => handleReset()}>
          Delete
        </MDBBtn>
      </form>
      <div style={{ marginTop: "20px" }}>
        <h2 className="text-center">Find Your Food Place!</h2>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead className="bg-success text-white">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Location</th>
                  <th scope="col">Status</th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      Data Not Found.
                    </td>
                  </tr>
                </MDBTableBody>
              ) : (
                data.map((item, index) => (
                  <MDBTableBody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.location}</td>
                      <td>{item.status}</td>
                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
        <div
          style={{
            margin: "auto",
            padding: "10px",
            maxWidth: "40px",
          }}
        >
          {renderPagination()}
        </div>
      </div>
      <MDBRow>
        <MDBCol size={8}>
          <h4>Sort By</h4>
          <select
            style={{ width: "50%", borderRadius: "2px", height: "35px" }}
            onChange={handleSort}
            value={sort}
          >
            <option>Select value</option>
            {sortOption.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </MDBCol>
        <MDBCol>
          <h4>Filter By Status</h4>
          <MDBBtnGroup>
            <MDBBtn color="success" onClick={() => handleFilter("Buka")}>
              Buka
            </MDBBtn>
            <MDBBtn
              color="danger"
              style={{ marginLeft: "2px" }}
              onClick={() => handleFilter("Tutup")}
            >
              Tutup
            </MDBBtn>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default List;
