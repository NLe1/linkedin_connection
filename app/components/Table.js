import React, { useState, useMemo } from "react";
import EnhancedTable from "./table/EnhancedTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { CSVLink } from "react-csv";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    "& > *": {
      margin: "10px",
      marginRight: theme.spacing(1),
    },
  },
}));

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

  const exportData = () => {
    //update currentData to store before attempt to download
    props.updateConnection(data);
    console.log(props.connections);
    return props.connections;
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.buttonGroup}>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            props.updateConnection(data);
            props.modifyWindow("SHOW_MESSAGES");
          }}
        >
          TEMPLATES
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            props.updateConnection(data);
            props.modifyWindow("ADD_CONNECTION");
          }}
          color="primary"
        >
          ADD CONNECTION
        </Button>
        <Button size="small" variant="contained" startIcon={<SaveIcon />}>
          <CSVLink
            filename={"connections.csv"}
            data={data}
            asyncOnClick={true}
            onClick={() => {
              console.log("Updating to the store for exporting ... ");
              //update the state store
              props.updateConnection(data);

              //invoke the logic component
              done();
            }}
          >
            EXPORT TO CSV
          </CSVLink>
        </Button>
      </div>
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
