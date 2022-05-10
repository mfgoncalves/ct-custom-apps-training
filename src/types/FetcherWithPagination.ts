import PaginationState from './PaginationState';
import TableSortingState from './TableSortingState';

export default interface FetcherWithPagination {
  page: PaginationState['page'];
  perPage: PaginationState['perPage'];
  tableSorting: TableSortingState;
}
