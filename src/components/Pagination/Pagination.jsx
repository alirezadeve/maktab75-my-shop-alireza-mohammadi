import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import service from "services/Pagination-index";
import { useState } from "react";
const pageSize = 10;
const flexBox = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};
export default function PaginationSize() {
  const [Pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: Pagination.from, to: Pagination.to })
      .then((response) => {
        setPagination({ ...Pagination, count: response.count });
      });
  }, []);

  const handelPageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
  };

  return (
    <box
      style={flexBox}
      sx={{
        margin: "20 0",
      }}
    >
      <Pagination
        count={Math.ceil(Pagination.count / pageSize)}
        onChange={handelPageChange}
      />
    </box>
  );
}
