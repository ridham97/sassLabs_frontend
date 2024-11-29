export const handlePageChange = (page, totalPages, onPageChange) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page); 
    }
  };