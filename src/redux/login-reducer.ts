export type LoginReducerType = {};

let internalState: LoginReducerType = {};

const loginReducer = (state: LoginReducerType = internalState, action: any) => {

  switch (action.type) {
    default:
      return state;
  }
}

export default loginReducer