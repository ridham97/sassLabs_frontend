import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import Pagination from './components/Pagination';
import { calculateTotalPages, getPaginatedData, handlePageChange } from './app.helpers';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);


  const rowsPerPage = 5;  // Define how many data per page
  const totalPages = calculateTotalPages(data, rowsPerPage);


  useEffect(()=>{
    fetch('/data/frontend-assignment.json')
    .then((response) => response.json())
    .then((data) =>setData(data));
  },[])

  const currentPageData = getPaginatedData(data, currentPage, rowsPerPage);

  const handlePageChangeWrapper = (page) => {
    setCurrentPage(handlePageChange(page, totalPages));
  };

  const columns=[
    { field: 's.no', headerName: 'S.No.'},
    { field: 'percentage.funded', headerName: 'Percentage funded' },
    { field: 'amt.pledged', headerName: 'Amount pledged' },
  ];

  return (
    <div className="App">
      <Table 
      rows={currentPageData}
      columns={columns}
      />
       <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChangeWrapper}
      />
    </div>
  );
}

export default App;
