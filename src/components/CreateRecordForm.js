import React from "react";

import { nanoid } from "nanoid";
import { useRef } from "react";

import PropTypes from "prop-types";
/**
 *
 * @param {*} param0
 * @returns
 */
function CreateRecordForm({ addRecord }) {
  const refConsignorInput = useRef();
  const refConsigneeInput = useRef();
  const refOriginInput = useRef();
  const refDestinationrInput = useRef();

  return (
    <section className="CreateRecordFrom">
      <br />
      <h2 align="center">Create Record</h2>

      <form align="center">
        <div>
          <div>
            {" "}
            <label className="form-label">
              Consignor:{" "}
              <input
                className="form-control"
                type="text"
                name="Consignor"
                ref={refConsignorInput}
              ></input>
            </label>
          </div>
          <div>
            {" "}
            <label className="form-label">
              Consignee:{" "}
              <input
                className="form-control"
                type="text"
                name="Consignee"
                ref={refConsigneeInput}
              ></input>
            </label>
          </div>
          <div>
            {" "}
            <label className="form-label">
              Origin:{" "}
              <input
                className="form-control"
                type="text"
                name="Origin"
                ref={refOriginInput}
              ></input>
            </label>
          </div>
          <div>
            {" "}
            <label className="form-label">
              Destination:{" "}
              <input
                className="form-control"
                type="text"
                name="Destination"
                ref={refDestinationrInput}
              ></input>
            </label>
          </div>
        </div>

        <div>
          <button
            id="btnCreateRecord"
            className="btn btn-primary"
            onClick={(evt) => {
              evt.preventDefault();
              addRecord({
                id: nanoid(8),
                logisticStatus: "created",
                consignor: refConsignorInput.current.value,
                origin: refOriginInput.current.value,
                consignee: refConsigneeInput.current.value,
                destination: refDestinationrInput.current.value,
                time: new Date().toLocaleString(),
                notes: [],
              });
              refConsignorInput.current.value = "";
              refOriginInput.current.value = "";
              refConsigneeInput.current.value = "";
              refDestinationrInput.current.value = "";
            }}
          >
            Create
          </button>
        </div>
      </form>
      <hr />
    </section>
  );
}

CreateRecordForm.propTypes = {
  addRecord: PropTypes.func.isRequired,
};

export default CreateRecordForm;
