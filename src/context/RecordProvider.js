import { createContext, useState } from "react";
import {
  url_get_total_budget,
  url_delete_record,
  url_update_record,
  url_get_by_limit,
  url_get_by_type,
  url_new_record,
} from "../api/endpoins";
import { alertSuccess } from "../helpers/alerts";
import {
  FetchGetApi,
  FetchUpdateApi,
  FetchPostApi,
  FetchDeleteApi,
} from "./../helpers/";
import useAuth from "./../Hooks/useAuth";

export const RecordContext = createContext(null);

function RecordProvider({ children }) {
  const auth = useAuth();
  const [budget, setBudget] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const [data, setData] = useState({ data: null, loading: true });
  function getBudget() {
    FetchGetApi(
      `${url_get_total_budget}${auth.getUserId()}`,
      auth.getToken()
    ).then((data) => {
      setBudget(data);
    });
  }

  function getDataByLimit(limit) {
    const url = `${url_get_by_limit}${auth.getUserId()}/${limit}`;
    setCurrentUrl(url);

    FetchGetApi(url, auth.getToken()).then((data) => {
      setData({ data, loading: false });
    });
  }
  function getDataByType(type) {
    const url = `${url_get_by_type}${auth.getUserId()}/${type}`;
    setCurrentUrl(url);

    FetchGetApi(url, auth.getToken()).then((data) => {
      setData({ data, loading: false });
    });
  }
  function Refresh() {
    FetchGetApi(currentUrl, auth.getToken()).then((data) => {
      setData({ data, loading: false });

      getBudget();
    });
  }
  const handleDelete = async (id) => {
    const url = `${url_delete_record}${id}`;
    FetchDeleteApi(url, auth.getToken()).then((resp) => {
      if (resp.ok) {
        alertSuccess(resp.msg);
        Refresh();
      }
    });
  };
  const handleUpdate = async (id, newValues) => {
    const url = `${url_update_record}${id}`;
    const resp = await FetchUpdateApi(url, newValues, auth.getToken());
    if (resp.ok) {
      alertSuccess(resp.msg);
      Refresh();
    }
    return resp.ok;
  };
  function newRecord(values) {
    FetchPostApi(url_new_record, values, auth.getToken())
    .then((result) => {
      !!result.ok && alertSuccess(result.msg)
    })
   
  }
  const contextValue = {
    budget,
    data,
    getBudget,
    getDataByType,
    getDataByLimit,
    handleDelete,
    handleUpdate,
    newRecord,
  };
  return (
    <RecordContext.Provider value={contextValue}>
      {children}
    </RecordContext.Provider>
  );
}

export default RecordProvider;
