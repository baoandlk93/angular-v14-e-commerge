export interface PageData<T> {
  content: T[];
  pagination: {
    number: number,
    size: number
  };
  totalElements: number;
}
