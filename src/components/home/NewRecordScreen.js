import React,{useContext }from 'react';

import { useForm } from "../../Hooks/useForm";
import useAuth from "../../Hooks/useAuth";
import { RecordContext } from './../../context/RecordProvider';


function NewRecordScreen() {
    const auth = useAuth();
    const record = useContext(RecordContext);

  const [state, handleInputChange] = useForm({
    concept: "",
    amount: "",
    date: "",
    type: "Entry",
    userId:auth.getUserId()
  });
  const { concept, amount, date, type } = state;
  const handleSubmit = async (e) => {
    e.preventDefault();


    const values = {...state,date:date.toString()}
    console.log(values);
    record.newRecord(values);
  

   };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="concept"
          className="form-control mt-3"
          value={concept}
          required
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="text"
          name="amount"
          className="form-control mt-3"
          value={amount}
          required
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="form-control mt-3"
          value={date}
          required
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Type Record</label>
        
        <select 
          className="form-control mt-3"
         name="type"
          value={type}
          onChange={handleInputChange}
           >

             <option value="Entry">Entry</option>
  <option value="Egress">Egress</option>
           </select>
      </div>
      <button className="btn btn-primary mt-4">Agree</button>
    </form>
  );
}

export default NewRecordScreen;