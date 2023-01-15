import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AuthActionTypeEnum } from '@routes/auth/store/auth-action-type.enum';

// This function is a metareducer that is used to reset the entire store to its initial state when the LOGOUT action is dispatched.
export function storeResetMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    if (action.type === AuthActionTypeEnum.LOGOUT) {
      state = undefined; // ==> Emptying state here
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [storeResetMetaReducer];
