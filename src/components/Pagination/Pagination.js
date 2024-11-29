import './pagination.css';
import { handlePageChange } from './pagination.helpers';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const handlePreviousButton = ()=>{
    handlePageChange(currentPage - 1,totalPages,onPageChange)
  }

  const handleNextButton = ()=>{
    handlePageChange(currentPage + 1,totalPages,onPageChange)
  }

  return (
    <div className="pagination">
      <button onClick={handlePreviousButton} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextButton} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
