import { useContext } from "react";
import { RecordContext } from './../providers/RecordProvider';

function useRecord(props) {
  const contextValue = useContext(RecordContext);
  return contextValue;
}

export default useRecord;
