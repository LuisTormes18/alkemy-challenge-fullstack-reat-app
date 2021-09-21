import React, { useEffect, useContext } from "react";

import { RecordContext } from "./../../context/RecordProvider";
import Table from "./../ui/Table";

function HomeScreen() {
  const record = useContext(RecordContext);

  useEffect(() => {
    record.getDataByLimit(10);
    record.getBudget();
  }, []);

  return (
    <>
      {record.data.loading ? (
        <h2 className="title">Loading...</h2>
      ) : (
        <div className="container">
          <div>
            <h2 className="title mt-5">
              Budget : <span>{record.budget?.total}</span>
            </h2>
            <p className="title mt-1">
              <label className="t-egress">
                Total Egress : <span> {record.budget?.total_egreso}</span>
              </label>
              <label className="t-entry">
                Total Entry : <span> {record.budget?.total_ingreso}</span>
              </label>
            </p>
          </div>

          <Table />
        </div>
      )}
    </>
  );
}

export default HomeScreen;
