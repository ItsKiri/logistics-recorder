import React from "react";
import PropTypes from "prop-types";
/**
 *
 * @param {*} param0
 * @returns
 */
function Note({ note }) {
  return (
    <div className="Note">
      {note.time}: {note.content} &emsp;
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
};

export default Note;
