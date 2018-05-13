/* @flow */

declare module 'hard-reducer' {
  declare type Action<T> = {
    type: string,
    payload: T,
  }

  declare type ActionCreator<Input, Payload = Input> = (Input) => Action<Payload>

  declare type Reducer<State> = {
    (State, Action<*>): State,
    get: () => Reducer<State>,
    case<Input, Payload>(
      ActionCreator<Input, Payload> | string,
      (State, Payload) => State,
    ): Reducer<State>,
    else((State, Action<*>) => State): Reducer<State>,
  }

  declare module.exports: {
    buildActionCreator: (
      ?{ prefix?: string },
    ) => {
      createAction<Input, Payload>(
        t?: string | void,
        fn?: (Input) => Payload,
      ): ActionCreator<Input, Payload>,
    },
    createReducer: <T>(T) => Reducer<T>,
  }
}
