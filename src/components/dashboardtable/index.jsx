import { isEmpty } from "ramda";
import { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS, predict_success_failure_or_upcoming } from "./constants";
import Pagination from "./pagination";

const DashboardTable = ({ launchList, loading }) => {
  console.log(launchList);
  const data = useMemo(
    () =>
      launchList.map((launch) => ({
        ...launch,
        launch_success_label: predict_success_failure_or_upcoming(launch),
      })),
    [launchList]
  );
  const columns = useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const renderTableBody = () => {
    return rows.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => {
            return (
              <td
                {...cell.getCellProps()}
                style={{
                  padding: "10px",
                  background: "white",
                }}
                className="text-center"
              >
                {cell.render("Cell")}
              </td>
            );
          })}
        </tr>
      );
    });
  };
  return (
    <div className="pb-56 dashboard--table__wrapper">
      <table
        {...getTableProps()}
        style={{ border: "solid 1px black", width: "100%", height: "100%" }}
        className="h-full"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px gray",
                    background: "lightgray",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {loading ? (
            <td colSpan="100%" className="text-center">
              Loading...!
            </td>
          ) : !isEmpty(data) ? (
            renderTableBody()
          ) : (
            <td colSpan="100%" className="text-center">
              No Launches Found
            </td>
          )}
        </tbody>
      </table>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default DashboardTable;