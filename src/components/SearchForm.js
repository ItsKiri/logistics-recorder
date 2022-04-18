import React from "react";
import Record from "./Record";
import { useRef } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
/**
 *
 * @param {*} param0
 * @returns
 */
function SearchForm({
  records,
  notes,
  removeRecord,
  updateRecord,
  cancelRecord,
  addNote,
}) {
  const refIDInput = useRef();
  const [results, setResults] = useState([]);
  /**
   *
   * @param {*} records
   * @param {*} id
   */
  function recordMatched(records, id) {
    setResults(records.filter((record) => record.id === id));
  }
  return (
    <section className="SearchForm">
      <h2>Search</h2>
      <form>
        <label className="form-label">
          ID:{" "}
          <input
            className="form-control"
            type="text"
            name="ID"
            ref={refIDInput}
          ></input>
          <button
            className="btn btn-primary"
            onClick={(evt) => {
              evt.preventDefault();
              recordMatched(records, refIDInput.current.value);
              refIDInput.current.value = "";
            }}
          >
            Search
          </button>
        </label>
      </form>
      {() => {
        if (results.length === 1) {
          return (
            <Record
              record={results[0]}
              notes={notes}
              removeRecord={removeRecord}
              updateRecord={updateRecord}
              cancelRecord={cancelRecord}
              addNote={addNote}
            ></Record>
          );
        }
      }}
      ;
    </section>
  );
}

SearchForm.propTypes = {};

export default SearchForm;
