export type ProfileReducerType = {};

let internalState: ProfileReducerType = {};

const profileReducer = (state: ProfileReducerType = internalState, action: any) => {

  switch (action.type) {
    default:
      return state;
  }
}

export default profileReducer