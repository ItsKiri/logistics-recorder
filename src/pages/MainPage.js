import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import RecordsList from "../components/RecordsList";
import CreateRecordForm from "../components/CreateRecordForm";
import SearchForm from "../components/SearchForm";
/**
 *
 * @param {*} param0
 * @returns
 */
function MainPage({ rm }) {
  const [records, setRecords] = useState([]);
  const [results, setResults] = useState([]);
  let allNotes = [];
  /**
   *
   * @param {*} logisticStatus
   * @returns
   */
  function update(logisticStatus) {
    if (logisticStatus === "created") return "onTheWay";
    return "delivered";
  }
  /**
   *
   */
  async function reloadRecords() {
    const data = await rm.get();
    setRecords(data);
  }
  // async function initialize() {
  //   await rm.add({
  //     id: nanoid(8),
  //     logisticStatus: "created",
  //     consignor: "student A",
  //     origin: "San Francisco",
  //     consignee: "student B",
  //     destination: "San Jose",
  //     time: new Date().toLocaleString(),
  //     notes: [],
  //   });
  //   await rm.add({
  //     id: nanoid(8),
  //     logisticStatus: "onTheWay",
  //     consignor: "student B",
  //     origin: "San Jose",
  //     consignee: "student A",
  //     destination: "San Francisco",
  //     time: new Date().toLocaleString(),
  //     notes: [],
  //   });
  //   await rm.add({
  //     id: nanoid(8),
  //     logisticStatus: "delivered",
  //     consignor: "student C",
  //     origin: "New York",
  //     consignee: "student D",
  //     destination: "London",
  //     time: new Date().toLocaleString(),
  //     notes: [],
  //   });
  //   await reloadRecords();
  // }

  useEffect(() => {
    reloadRecords();
  }, [rm]);
  /**
   *
   * @param {*} record
   */
  async function addRecord(record) {
    await rm.add(record);
    await reloadRecords();
  }
  /**
   *
   * @param {*} record
   */
  async function removeRecord(record) {
    await rm.remove(record);
    await reloadRecords();
  }
  /**
   *
   * @param {*} record
   */
  async function updateRecord(record) {
    if (
      record.logisticStatus !== "delivered" &&
      record.logisticStatus !== "canceled"
    ) {
      await rm.add({
        id: record.id,
        logisticStatus: update(record.logisticStatus),
        consignor: record.consignor,
        origin: record.origin,
        consignee: record.consignee,
        destination: record.destination,
        time: new Date().toLocaleString(),
        notes: record.notes,
      });
      await rm.remove(record);
      await reloadRecords();
    }
  }
  /**
   *
   * @param {*} record
   */
  async function cancelRecord(record) {
    if (
      record.logisticStatus !== "delivered" &&
      record.logisticStatus !== "canceled"
    ) {
      await rm.add({
        id: record.id,
        logisticStatus: "canceled",
        consignor: record.consignor,
        origin: record.origin,
        consignee: record.consignee,
        destination: record.destination,
        time: new Date().toLocaleString(),
        notes: record.notes,
      });
      await rm.remove(record);
      await reloadRecords();
    }
  }
  /**
   *
   * @param {*} record
   * @param {*} note
   */
  async function addNote(record, note) {
    allNotes = allNotes.concat(note);
    await rm.add({
      id: record.id,
      logisticStatus: record.logisticStatus,
      consignor: record.consignor,
      origin: record.origin,
      consignee: record.consignee,
      destination: record.destination,
      time: record.time,
      notes: record.notes.concat(note),
    });
    await rm.remove(record);
    await reloadRecords();
  }

  return (
    <div className="MainPage">
      <CreateRecordForm addRecord={addRecord}>Create Record</CreateRecordForm>
      {/* <SearchForm
        records={records}
        notes={allNotes}
        removeRecord={removeRecord}
        updateRecord={updateRecord}
        cancelRecord={cancelRecord}
        addNote={addNote}
      ></SearchForm> */}
      <RecordsList
        records={records}
        results={results}
        notes={allNotes}
        removeRecord={removeRecord}
        updateRecord={updateRecord}
        cancelRecord={cancelRecord}
        setResults={setResults}
        addNote={addNote}
      ></RecordsList>
    </div>
  );
}

MainPage.propTypes = {
  rm: PropTypes.object.isRequired,
};

export default MainPage;
