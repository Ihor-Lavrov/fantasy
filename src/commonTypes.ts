export interface SagaAction<T = {}> {
  type: string;
  payload: T;
}
