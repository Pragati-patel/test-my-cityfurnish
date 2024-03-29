import React from "react";
import styles from "../styles.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {DownArrowUnfilled} from "@/assets/icon";
import {format} from "date-fns";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RefundsTable = ({rows, visibleRows, handleShowMore}) => {
  return (
    <div>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow
              className={styles.tableRow}
              style={{verticalAlign: "baseline"}}>
              <TableCell className={styles.tableHeaderCell}>
                Invoice Date
              </TableCell>
              <TableCell className={styles.tableHeaderCell}>
                Invoice Number
              </TableCell>

              <TableCell className={styles.tableHeaderCell}>
                Amount Refunded
              </TableCell>
              <TableCell className={styles.tableHeaderCell}>
                Refund Date
              </TableCell>
              <TableCell className={styles.tableHeaderCell}>
                Payment Number
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows?.slice(0, visibleRows).map((row, index) => (
              <TableRow key={index} className={styles.tableRow}>
                <TableCell className={`${styles.tableCell}`}>
                  {row.date}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {row.invoice_numbers ? row.invoice_numbers : "NA"}
                </TableCell>

                <TableCell className={styles.tableCell}>
                  <span className="font-Inter">₹</span>
                  {row.bcy_refunded_amount}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {`${format(
                    new Date(row.last_modified_time),
                    "d LLL, yyyy : hh:mm a",
                  )}`}
                </TableCell>
                <TableCell className={`${styles.tableCell}`}>
                  {row.payment_number}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {visibleRows < rows?.length && (
          <button className={styles.show_more_btn} onClick={handleShowMore}>
            See More
            <DownArrowUnfilled className={styles.down_arrow} />
          </button>
        )}
      </TableContainer>
    </div>
  );
};

export default RefundsTable;
