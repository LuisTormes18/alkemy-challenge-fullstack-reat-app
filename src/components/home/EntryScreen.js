import React,{useEffect,useContext} from 'react';

import { RecordContext } from './../../context/RecordProvider';
import Table from './../ui/Table';

function EntryScreen(props) {
     const record = useContext(RecordContext);

    useEffect(() => {
    	record.getDataByType('Entry');
    }, [])

    return (
        <div className='container'>
        {record.data.loading ?(<h2 className='title'>Loading...</h2>) : 
        	( <Table /> )
        }
        </div>
    );
}

export default EntryScreen;