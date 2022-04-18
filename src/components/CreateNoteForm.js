import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";
/**
 *
 * @param {*} param0
 * @returns
 */
function CreateNoteForm({ record, addNote }) {
  const refContentInput = useRef();
  return (
    <section className="CreateNoteForm">
      <h5>Add Note</h5>
      <form>
        <div>
          {" "}
          <label className="form-label">
            Note:{" "}
            <input
              className="form-control"
              type="text"
              name="content"
              ref={refContentInput}
            ></input>
          </label>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={(evt) => {
              evt.preventDefault();
              addNote(record, {
                id: record.id,
                content: refContentInput.current.value,
                time: new Date().toLocaleString(),
              });
              refContentInput.current.value = "";
            }}
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
}

CreateNoteForm.propTypes = {
  record: PropTypes.object.isRequired,
  addNote: PropTypes.func.isRequired,
};

export default CreateNoteForm;
