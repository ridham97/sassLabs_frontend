
// Helper function to calculate total pages based on the number of rows and rows per page.
export const calculateTotalPages = (data, rowsPerPage) => {
    return Math.ceil(data.length / rowsPerPage);
  };

  // Helper function to slice data based on current page and rows per page.
  export const getPaginatedData = (data, currentPage, rowsPerPage) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Helper function to handle page changes.
  export const handlePageChange = (page, totalPages) => {
    if (page < 1) return 1;
    if (page > totalPages) return totalPages; 
    return page;
  };
  