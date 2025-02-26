 export const fetchPatientData = async () => {
    const apiUrl ='https://fedskillstest.coalitiontechnologies.workers.dev'  
    const username = 'coalition'; 
    const password = 'skills-test';
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
  
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch patient data: ${response.statusText}`);
    }
  
    return response.json();
  };