import React, { useEffect, useState } from 'react';
import './css/DiagnoseList.css'

const DiagnoseList = ({ diagnostic_list }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (diagnostic_list && diagnostic_list.length > 0 && Array.isArray(diagnostic_list)) {
      setList(diagnostic_list); 
      setLoading(false);
    }
  }, [diagnostic_list]);  
  return (
    <div className='diagnose-list'>
      {!loading ? (
        <div className="diagnostic-list-table">
          <h2>Diagnostic List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {list.map((diagnostic, index) => (
                <tr key={index}>
                  <td>{diagnostic.name}</td>
                  <td>{diagnostic.description}</td>
                  <td>{diagnostic.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DiagnoseList;
