import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from './auth.reducer';

export const selectFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const selectAuthContext = createSelector(
  selectFeatureSelector,
  (authStateInterface: AuthStateInterface) => authStateInterface.data
);

export const selectCurrentUser = createSelector(selectFeatureSelector, (authStateInterface: AuthStateInterface) =>
  authStateInterface.data ? authStateInterface.data.currentUser : null
);

export const selectLoginLoading = createSelector(
  selectFeatureSelector,
  (authStateInterface: AuthStateInterface) => authStateInterface.status === 'LOADING'
);
