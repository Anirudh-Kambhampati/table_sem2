import React, { useState } from "react";
import Child from "../../routes/ProjExt";
import Checkbox from "@material-ui/core/Checkbox";
import MaUTable from "@material-ui/core/Table";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "../TablePaginationActions";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableToolbarProj from "./TableToolbarProj";

import { useNavigate } from "react-router-dom";

import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import { useEffect } from "react";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox ref={resolvedRef} {...rest} />
      </>
    );
  }
);

// Editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // Custom function to table instance
  editableRowIndex, // index for editing content
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // Only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed externall, sync it up with the state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return index === editableRowIndex ? (
    <input value={value} onChange={onChange} onBlur={onBlur} />
  ) : (
    <p>{value}</p>
  );
};

EditableCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.any.isRequired,
  }),
  row: PropTypes.shape({
    index: PropTypes.number.isRequired,
  }),
  column: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  updateMyData: PropTypes.func.isRequired,
};

// Set Editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
};

const EnhancedTableProj = ({
  columns,
  data,
  setData,
  updateMyData,
  skipPageReset,
  props,
}) => {
  const [editableRowIndex, setEditableRowIndex] = React.useState(null);

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      updateMyData,
      editableRowIndex,
      setEditableRowIndex, // setState hook for toggling edit on/off switch
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
        // pass edit hook
        {
          accessor: "edit",
          id: "edit",
          Header: "edit",
          Cell: ({ row, setEditableRowIndex, editableRowIndex }) => (
            <button
              className="action-button"
              onClick={() => {
                const currentIndex = row.index;
                if (editableRowIndex !== currentIndex) {
                  // row requested for edit access
                  setEditableRowIndex(currentIndex);
                } else {
                  // request for saving the updated row
                  setEditableRowIndex(null);
                  const updatedRow = row.values;
                  console.log("updated row values:");
                  console.log(updatedRow);
                  //Call updateRow API
                }
              }}
            >
              {editableRowIndex !== row.index ? "Edit" : "Save"}
            </button>
          ),
        },
      ]);
    }
  );

  //Navigation v6
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `projExt`;
    navigate(path);
  };

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(Number(event.target.value));
  };

  const removeByIndexs = (array, indexs) =>
    array.filter((_, i) => !indexs.includes(i));

  const deleteUserHandler = (event) => {
    const newData = removeByIndexs(
      data,
      Object.keys(selectedRowIds).map((x) => parseInt(x, 10))
    );
    setData(newData);
  };

  const addProjectHandler = (project) => {
    const newData = data.concat([project]);
    setData(newData);
  };

  useEffect(() => {});
  // Render the UI for Table
  return (
    <TableContainer>
      <TableToolbarProj
        numSelected={Object.keys(selectedRowIds).length}
        deleteUserHandler={deleteUserHandler}
        addProjectHandler={addProjectHandler}
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...(column.id === "selection"
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                >
                  {column.render("Header")}
                  {column.id !== "selection" ? (
                    <TableSortLabel
                      active={column.isSorted}
                      // react-table has a unsorted state which is not treated here
                      direction={column.isSortedDesc ? "desc" : "asc"}
                    />
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  console.log(cell);

                  <Child cell={cell} />;

                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.column.id !== "project" ? (
                        cell.render("Cell")
                      ) : (
                        <>
                          <Button variant="text" onClick={routeChange}>
                            <span style={{ textDecoration: "underline" }}>
                              {cell.value}
                            </span>
                          </Button>
                        </>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[
                5,
                10,
                25,
                { label: "All", value: data.length },
              ]}
              colSpan={3}
              count={data.length}
              rowsPerPage={pageSize}
              page={pageIndex}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </MaUTable>
    </TableContainer>
  );
};

EnhancedTableProj.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  updateMyData: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  skipPageReset: PropTypes.bool.isRequired,
};

export default EnhancedTableProj;
