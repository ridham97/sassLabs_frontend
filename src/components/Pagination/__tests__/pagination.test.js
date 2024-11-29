import { handlePageChange } from "../pagination.helpers";

describe('handlePageChange', () => {

  let mockOnPageChange;

  beforeEach(() => {
    mockOnPageChange = jest.fn();  // Create a mock function for onPageChange
  });

  it('should call onPageChange with the correct page when page is valid', () => {
    const page = 3;               
    const totalPages = 5;
    handlePageChange(page, totalPages, mockOnPageChange);

    expect(mockOnPageChange).toHaveBeenCalledWith(page);
    expect(mockOnPageChange).toHaveBeenCalledTimes(1); 
  });

  it('should not call onPageChange if page is less than 1', () => {
    const page = 0;               
    const totalPages = 5;         
    handlePageChange(page, totalPages, mockOnPageChange);
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  it('should not call onPageChange if page is greater than totalPages', () => {
    const page = 6;                
    const totalPages = 5;          

    handlePageChange(page, totalPages, mockOnPageChange);
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

});

