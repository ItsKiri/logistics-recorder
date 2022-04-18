import minimongo from "minimongo";
import PropTypes from "prop-types";
/**
 *
 * @param {*} dbName
 * @returns
 */
function RecordManager(dbName = "RMDB") {
  const IndexedDb = minimongo.IndexedDb;
  const rm = {};
  /**
   *
   * @param {*} query
   * @returns
   */
  rm.get = (query = {}) => {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        () => {
          db.addCollection(
            "records",
            () => {
              db.records.find(query).fetch(resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };
  /**
   *
   * @param {*} record
   * @returns
   */
  rm.add = (record) => {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        () => {
          db.addCollection(
            "records",
            () => {
              db.records.upsert(record, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };
  /**
   *
   * @param {*} record
   * @returns
   */
  rm.remove = (record) => {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        () => {
          db.addCollection(
            "records",
            () => {
              db.records.remove(record, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };
  return rm;
}

RecordManager.propTypes = {
  rm: PropTypes.object.isRequired,
};

export default RecordManager;
