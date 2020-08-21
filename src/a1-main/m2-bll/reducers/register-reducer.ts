export type RegisterReducerType = {};

let internalState: RegisterReducerType = {};

const registerReducer = (state: RegisterReducerType = internalState, action: any) => {

  switch (action.type) {
    default:
      return state;
  }
}

export default registerReducer