/* @flow */

declare module 'hard-reducer' {
  declare export type Action<T> = {
    type: string,
    payload: T,
  }

  declare export type ActionCreator<Input, Payload = Input> = Input => Action<Payload>

  declare export type Reducer<State> = {
    (State, Action<*>): State,
    get: () => Reducer<State>,
    case<Input, Payload>(
      ActionCreator<Input, Payload> | string,
      (State, Payload) => State,
    ): Reducer<State>,
    else((State, Action<*>) => State): Reducer<State>,
  }

  declare export function createReducer<T>(initalState: T): Reducer<T>

  declare export function buildActionCreator(?{ prefix?: string }): {
    createAction<Input, Payload>(
      t?: string | void,
      fn?: (Input) => Payload,
    ): ActionCreator<Input, Payload>,
  }
}
