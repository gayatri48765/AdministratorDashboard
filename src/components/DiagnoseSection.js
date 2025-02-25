import React from 'react';
import DiagnoseList from './DiagnoseList';
import DiagnoseHistory from './DiagnoseHistory';

const DiagnoseSection = ({diagnosisHistory,diagnostic_list}) => {
  return (
    <section className='column-2'>
      <DiagnoseHistory diagnosisHistory={diagnosisHistory}/>
      <DiagnoseList diagnostic_list={diagnostic_list}/>
    </section>
  );
};

export default DiagnoseSection;