import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";
import Record from "./Record";
import ResultsList from "./ResultsList";
/**
 *
 * @param {*} param0
 * @returns
 */
function RecordsList({
  records,
  results,
  notes,
  removeRecord,
  updateRecord,
  cancelRecord,
  setResults,
  addNote,
}) {
  const refSearchInput = useRef();
  /**
   *
   * @param {*} records
   * @returns
   */
  function recordsCreated(records) {
    return records.filter((record) => record.logisticStatus === "created");
  }
  /**
   *
   * @param {*} records
   * @returns
   */
  function recordsOnTheWay(records) {
    return records.filter((record) => record.logisticStatus === "onTheWay");
  }
  /**
   *
   * @param {*} records
   * @returns
   */
  function recordsDelivered(records) {
    return records.filter((record) => record.logisticStatus === "delivered");
  }
  /**
   *
   * @param {*} records
   * @returns
   */
  function recordsCanceled(records) {
    return records.filter((record) => record.logisticStatus === "canceled");
  }
  /**
   *
   * @param {*} records
   * @param {*} id
   * @returns
   */
  function recordsSearched(records, id) {
    return records.filter((result) => result.id === id);
  }

  return (
    <div className="RecordsList">
      <form align="center">
        <label className="form-label">
          {" "}
          <h4 align="center">Search: </h4>
          <input
            type="text"
            className="form-control"
            ref={refSearchInput}
          ></input>
          <button
            className="btn btn-primary"
            onClick={(evt) => {
              evt.preventDefault();
              setResults(
                recordsSearched(records, refSearchInput.current.value)
              );
            }}
          >
            Search
          </button>
        </label>
      </form>
      <hr />
      <ResultsList
        results={results}
        notes={notes}
        removeRecord={removeRecord}
        updateRecord={updateRecord}
        cancelRecord={cancelRecord}
        addNote={addNote}
      ></ResultsList>
      <hr />

      <div>
        <h3 align="center">Records in Created</h3>
        {recordsCreated(records).map((r, i) => (
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
      <div>
        <h3 align="center">Records on the Way </h3>
        {recordsOnTheWay(records).map((r, i) => (
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
      <div>
        <h3 align="center">Records in Delivered</h3>
        {recordsDelivered(records).map((r, i) => (
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
      <div>
        <h3 align="center">Records in Canceled</h3>
        {recordsCanceled(records).map((r, i) => (
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
    </div>
  );
}

RecordsList.propTypes = {
  records: PropTypes.array.isRequired,
  notes: PropTypes.array.isRequired,
  removeRecord: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  cancelRecord: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

export default RecordsList;
