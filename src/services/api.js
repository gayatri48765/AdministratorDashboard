// services/api.js

/**
 * Fetches patient data from the API.
 * @returns {Promise<Object>} Patient data.
 * @throws {Error} If the request fails.
 */
export const fetchPatientData = async () => {
    const apiUrl ='https://fedskillstest.coalitiontechnologies.workers.dev' // Replace with your API URL
    const username = 'coalition'; // Replace with your username
    const password = 'skills-test'; // Replace with your password
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