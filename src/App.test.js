// app.helpers.test.js
import { calculateTotalPages, getPaginatedData, handlePageChange } from './app.helpers';

describe('Pagination Helpers', () => {
  // Test for calculateTotalPages
  describe('calculateTotalPages', () => {
    it('should calculate the correct total number of pages', () => {
      const data = [1, 2, 3, 4, 5];  // Example data array
      const rowsPerPage = 2;         // Rows per page

      // Expected output: 3 pages, because 5 items / 2 rows per page = 2.5, rounded up to 3
      expect(calculateTotalPages(data, rowsPerPage)).toBe(3);
    });

    it('should calculate the correct total number of pages for a single page', () => {
      const data = [1, 2, 3];      // 3 items
      const rowsPerPage = 3;       // 3 rows per page

      // Expected output: 1 page
      expect(calculateTotalPages(data, rowsPerPage)).toBe(1);
    });
  });

  // Test for getPaginatedData
  describe('getPaginatedData', () => {
    it('should return the correct data for the first page', () => {
      const data = [1, 2, 3, 4, 5];
      const currentPage = 1;
      const rowsPerPage = 2;

      // Expected output: First 2 items [1, 2]
      expect(getPaginatedData(data, currentPage, rowsPerPage)).toEqual([1, 2]);
    });

    it('should return the last item for the last page', () => {
      const data = [1, 2, 3, 4, 5];
      const currentPage = 3; // Last page
      const rowsPerPage = 2;

      // Expected output: Last item [5]
      expect(getPaginatedData(data, currentPage, rowsPerPage)).toEqual([5]);
    });

    it('should return an empty array for an out-of-range page', () => {
      const data = [1, 2, 3];
      const currentPage = 10; // Out of range page
      const rowsPerPage = 2;

      // Expected output: Empty array because page 10 does not exist
      expect(getPaginatedData(data, currentPage, rowsPerPage)).toEqual([]);
    });
  });

  // Test for handlePageChange
  describe('handlePageChange', () => {

    it('should return 1 if the page is less than 1', () => {
      const currentPage = 0;
      const totalPages = 5;

      // Expected output: 1, because page numbers can't go below 1
      expect(handlePageChange(currentPage, totalPages)).toBe(1);
    });

    it('should return the last page if the page is greater than the total pages', () => {
      const currentPage = 6;  // Page 6 is out of range, total pages are 5
      const totalPages = 5;

      // Expected output: 5, as it's the last valid page
      expect(handlePageChange(currentPage, totalPages)).toBe(5);
    });
  });
});
