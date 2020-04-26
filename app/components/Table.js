import React, { useState, useMemo } from "react";
import EnhancedTable from "./table/EnhancedTable";
import CssBaseline from "@material-ui/core/CssBaseline";

const Table = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Notes",
        accessor: "notes",
      },
      {
        Header: "How did you meet?",
        accessor: "howToMeet",
      },
      {
        Header: "Last Contact",
        accessor: "lastContact",
      },
    ],
    []
  );

  const [data, setData] = useState(useMemo(() => props.connections || [], []));
  const [skipPageReset, setSkipPageReset] = useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <div>
      <button onClick={() => props.modifyWindow("SHOW_MESSAGES")}>
        Message Templates
      </button>
      <CssBaseline />
      <EnhancedTable
        updateConnection={props.updateConnection}
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
};

export default Table;
