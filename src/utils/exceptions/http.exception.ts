export enum errorStatus {
    notFound = 'NOT_FOUND',
    error = 'ERROR',
  }
  
export const notFound = (message: string) => ({ status: errorStatus.notFound, message });
export const error = (message: string) => ({ status: errorStatus.error, message });