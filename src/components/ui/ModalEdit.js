import React,{useContext} from 'react'
import { Modal} from 'reactstrap'

import { useForm } from "../../Hooks/useForm";
import { RecordContext } from './../../context/RecordProvider';

export default function ModalEdit({isOpen,setIsOpen,values}) {

    const record = useContext(RecordContext);

  const [state, handleInputChange] = useForm(values);
  const { id,concept, amount, type } = state;
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const ok = record.handleUpdate(id,{concept,amount,type});
    !!ok && setIsOpen(false);
   };
	return (
<Modal isOpen={isOpen}>
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
      <button className="btn btn-danger mt-4"
onClick={() =>{

  setIsOpen(!isOpen)
}
}
      >Exit</button>
      <button className="btn btn-primary mt-4" 
      onClick={handleSubmit}

      >Agree</button>
    </form>

</Modal>

	)
}