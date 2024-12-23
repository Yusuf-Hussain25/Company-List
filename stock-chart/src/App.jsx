import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Chart from './components/Chart';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/shaktids/stock_app_test/refs/heads/main/dump.csv'
    )
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = Papa.parse(csvText, { header: true }).data;

        console.log('Sample Row:', parsedData[0]); // Debugging: Inspect parsed data

        // Extract company/index names and set chart data
        const validData = parsedData.filter((row) => row['index_name']); // Ensure rows have 'index_name'
        const uniqueCompanies = [
          ...new Set(validData.map((row) => row['index_name'])),
        ]; // Extract unique index names

        setCompanies(uniqueCompanies);
        setChartData(validData);
      })
      .catch((error) => console.error('Error fetching CSV:', error));
  }, []);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const filteredData = chartData.filter(
    (data) => data['index_name'] === selectedCompany
  );

  return (
    <div
      style={{
        display: 'flex',
        fontFamily: 'Arial, sans-serif',
        height: '100vh',
        background: '#333',
        color: '#fff',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: '20%',
          borderRight: '1px solid #444',
          padding: '10px',
          overflowY: 'auto',
          background: '#222',
        }}
      >
        <h3>Companies</h3>
        {companies.length === 0 ? (
          <p>Loading companies...</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {companies.map((company, index) => (
              <li
                key={index}
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  marginBottom: '5px',
                  background: selectedCompany === company ? '#555' : '#444',
                  borderRadius: '5px',
                  textAlign: 'left',
                  color: '#ddd',
                }}
                onClick={() => handleCompanyClick(company)}
              >
                {company}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Chart Section */}
      <div style={{ width: '80%', padding: '20px', overflowY: 'auto' }}>
        <h3>
          {selectedCompany
            ? `Charts for ${selectedCompany}`
            : companies.length === 0
              ? 'No companies found in the data.'
              : 'Select a Company'}
        </h3>
        {selectedCompany ? (
          filteredData.length > 0 ? (
            <Chart data={filteredData} />
          ) : (
            <p>No data available for the selected company.</p>
          )
        ) : null}
      </div>
    </div>
  );
};

export default App;
