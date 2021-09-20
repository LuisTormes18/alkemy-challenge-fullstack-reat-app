import React,{useEffect,useContext} from 'react';

import { RecordContext } from './../../context/RecordProvider';
import Table from './../ui/Table'

function HomeScreen() {
    const record = useContext(RecordContext);

    useEffect(() => {
    	record.getDataByLimit(10);
    	record.getBudget();
    }, [])

    
    return (
        <>

{record.data.loading ?(<h2 className='title'>Loading...</h2>) : (

<div className='container'>

    <div>
            <h2 className='title mt-5'>{`Budget : ${record.budget?.total}` }</h2>
            <p className='title mt-1'> 
                <span> {`Total Egress : ${record.budget?.total_egreso}` }</span>

                <span>{`Total Entry : ${record.budget?.total_ingreso}` }</span>
            </p>

    </div>

    <Table />

</div>




        )



}

        </>
    );
}

export default HomeScreen;