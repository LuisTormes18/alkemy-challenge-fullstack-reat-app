import React, {useContext,useState} from 'react'

import { RecordContext } from './../../context/RecordProvider';
import ModalEdit from './ModalEdit';

export default function Table() {
    const record = useContext(RecordContext);
 const [isOpen, setIsOpen] = useState(false);
 const [elementSelect, setElementSelect] = useState(null)

const handleEdit = (element)=>{
  setElementSelect(element);
  setIsOpen(true);
}
  return (
   
<>


<table className="table table-hover mt-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Concept</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
      <th scope="col">Type</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  
  <tbody>
         {record.data.data.map((element,index)=>
(<tr key={element.id}>
<th scope="row">{index + 1}</th>
<td>{element.concept}</td>
<td>{element.amount}</td>
<td>{element.date}</td>
<td>{element.type}</td>
<td>
<button 
  className='btn btn-outline-primary'
  onClick={()=>{
   handleEdit(element)
  }} 


>Edit</button>
<button 
className='btn btn-outline-danger ml-5'

onClick={()=>{
    record.handleDelete(element.id);
  }} 

>Delete</button>
</td>
</tr>
)
     )}  </tbody>
</table>

 {isOpen && (<ModalEdit values={elementSelect} isOpen={isOpen} setIsOpen={setIsOpen}/>)}
</>
     )
}