import {
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import Firebase from '../../config/Firebase';
import { generateSessionCookie, verifySessionCookie } from '../../config/api';
import {
  getCookie,
  setCookie,
  cleanCookies,
  removeCookie,
} from '../../config/cookies';
import { SESSION_TOKEN_KEY } from '../../constants/session';
import {
  SignInFormData,
  UserSessionStore,
  UserSession,
} from '../../interfaces/session';
import { AppDispatch, AppThunk } from '../index';
import { RootState } from '../rootReducer';

const initialState: UserSessionStore = {
  loggedIn: false,
  id: '',
  email: '',
  errorMessage: '',
  fetching: true,
};

const userSessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setFetching(state, action: PayloadAction<boolean>) {
      state.fetching = action.payload;
    },
    setSession(state, action: PayloadAction<UserSession>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.loggedIn = true;
    },
    resetSession(state) {
      state.id = '';
      state.email = '';
      state.loggedIn = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.id = '';
      state.email = '';
      state.loggedIn = false;
      state.errorMessage = action.payload;
    },
  },
});

export const userSignInEmailPassword =
  (userInfo: SignInFormData): AppThunk =>
  async (dispatch: AppDispatch) => {
    const { actions } = userSessionSlice;
    dispatch(actions.setFetching(true));
    const { email, password } = userInfo;
    try {
      const { user: authUser } = await signInWithEmailAndPassword(
        Firebase.auth,
        email,
        password,
      );

      if (authUser) {
        const user = {
          id: authUser.uid,
          email: authUser.email ?? '',
        };

        const tokenId = await authUser.getIdToken();
        if (tokenId) {
          const sessionId = await generateSessionCookie(tokenId);
          if (sessionId) {
            setCookie(SESSION_TOKEN_KEY, sessionId);
          }
        }

        dispatch(actions.setSession(user));
      } else {
        const errorCode = { code: 'auth/null-user' };
        const error: string = JSON.stringify(errorCode);
        throw new Error(error);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      let errorMessage: string;
      switch (error.code) {
        case 'auth/wrong-password':
          errorMessage = 'La contraseña es incorrecta.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'El correo es inválido.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'El correo no se encuentra registrado aún.';
          break;
        case 'auth/null-user':
          errorMessage = 'No se pudo encontrar el usuario';
          break;
        default:
          errorMessage = 'Hubo un error al iniciar sesión.';
      }
      dispatch(actions.setError(errorMessage));
    }
    dispatch(actions.setFetching(false));
  };

export const userSignInWithToken =
  (token: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const { actions } = userSessionSlice;
    dispatch(actions.setFetching(true));
    try {
      const { user: authUser } = await signInWithCustomToken(
        Firebase.auth,
        token,
      );

      if (authUser) {
        const user = {
          id: authUser.uid,
          email: authUser.email ?? '',
        };

        const tokenId = await authUser.getIdToken();
        if (tokenId) {
          const sessionId = await generateSessionCookie(tokenId);
          if (sessionId) {
            setCookie(SESSION_TOKEN_KEY, sessionId);
          }
        }

        dispatch(actions.setSession(user));
      } else {
        const errorCode = { code: 'auth/null-user' };
        const error: string = JSON.stringify(errorCode);
        throw new Error(error);
      }
    } catch (error) {
      const errorMessage = 'Hubo un error al iniciar sesión.';
      dispatch(actions.setError(errorMessage));
    }
    dispatch(actions.setFetching(false));
  };

export const verifySession = (): AppThunk => async (dispatch: AppDispatch) => {
  const { actions } = userSessionSlice;
  dispatch(actions.setFetching(true));
  try {
    const sessionCookie = getCookie(SESSION_TOKEN_KEY);

    if (sessionCookie) {
      const token = await verifySessionCookie(sessionCookie);

      if (token) {
        const { user: authUser } = await signInWithCustomToken(
          Firebase.auth,
          token,
        );

        if (authUser) {
          const user = {
            id: authUser.uid,
            email: authUser.email ?? '',
          };

          const tokenId = await authUser.getIdToken();
          if (tokenId) {
            const sessionId = await generateSessionCookie(tokenId);
            if (sessionId) {
              setCookie(SESSION_TOKEN_KEY, sessionId);
            }
          }

          dispatch(actions.setSession(user));
        }
      } else {
        removeCookie(SESSION_TOKEN_KEY);
      }
    }
  } catch (error) {
    console.error(`verifySession error`, error);
  }
  dispatch(actions.setFetching(false));
};

export const userSignOut = (): AppThunk => async (dispatch: AppDispatch) => {
  cleanCookies([SESSION_TOKEN_KEY]);
  dispatch(userSessionSlice.actions.resetSession());
};

const selectState = (state: RootState) => state['session'];

export const getUserLoggedIn = createSelector(
  selectState,
  state => state.loggedIn,
);

export const getUserId = createSelector(selectState, state => state.id);
export const getUserEmail = createSelector(selectState, state => state.email);
export const getUserErrorMessage = createSelector(
  selectState,
  state => state.errorMessage,
);
export const getUserFetching = createSelector(
  selectState,
  state => state.fetching,
);

export const useUserSessionStore = (): UserSessionStore => {
  return {
    id: useSelector(getUserId),
    email: useSelector(getUserEmail),
    loggedIn: useSelector(getUserLoggedIn),
    errorMessage: useSelector(getUserErrorMessage),
    fetching: useSelector(getUserFetching),
  };
};

export default userSessionSlice.reducer;
