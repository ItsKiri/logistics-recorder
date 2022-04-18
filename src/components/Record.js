import React from "react";
import Note from "./Note";
import CreateNoteForm from "./CreateNoteForm";
import PropTypes from "prop-types";
/**
 *
 * @param {*} param0
 * @returns
 */
function Record({
  record,
  notes,
  removeRecord,
  updateRecord,
  cancelRecord,
  addNote,
}) {
  /**
   *
   * @param {*} record
   * @param {*} notes
   * @returns
   */
  function recordNotes(record, notes) {
    return notes.filter((note) => note.id === record.id);
  }
  return (
    <div className="Record">
      id: {record.id} &emsp; status: {record.logisticStatus} &emsp; consignor:{" "}
      {record.consignor} &emsp; origin: {record.origin} &emsp; consignee:{" "}
      {record.consignee} &emsp; destination: {record.destination} &emsp; date:{" "}
      {record.time} &emsp;notes:{" "}
      {recordNotes(record, notes).map((n, i) => (
        <Note key={"note" + i} note={n}></Note>
      ))}
      <button
        id="btnUpdateRecord"
        className="btn btn-primary"
        onClick={() => updateRecord(record)}
      >
        Update
      </button>
      &emsp;
      <button className="btn btn-primary" onClick={() => cancelRecord(record)}>
        Cancel
      </button>
      &emsp;
      <button
        id="btnDeleteRecord"
        className="btn btn-primary"
        onClick={() => removeRecord(record)}
      >
        Delete
      </button>
      <div>
        <CreateNoteForm record={record} addNote={addNote}></CreateNoteForm>
      </div>
      <hr />
    </div>
  );
}

Record.propTypes = {
  record: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  removeRecord: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired,
  cancelRecord: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

export default Record;
