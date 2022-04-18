import React from "react";
import Record from "./Record";
import PropTypes from "prop-types";
/**
 *
 * @param {*} param0
 * @returns
 */
function ResultsList({
  results,

  notes,
  removeRecord,
  updateRecord,
  cancelRecord,
  addNote,
}) {
  return (
    <div className="ResultsList">
      <h3 align="center">Searched Records</h3>
      {results.map((r, i) => (
        <Record
          key={"record" + i}
          record={r}
          notes={notes}
          removeRecord={removeRecord}
          updateRecord={updateRecord}
          cancelRecord={cancelRecord}
          addNote={addNote}
        ></Record>
      ))}
    </div>
  );
}

ResultsList.propTypes = {
  results: PropTypes.array.isRequired,
  notes: PropTypes.array.isRequired,
  removeRecord: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  cancelRecord: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

export default ResultsList;
