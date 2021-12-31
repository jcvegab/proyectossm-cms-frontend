import { Dispatch, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { Action, AnyAction } from 'redux';

// TODO: temporal type, check: https://redux-toolkit.js.org/usage/usage-with-typescript
export interface Payload {
  [key: string]: string | number | Payload;
}

export const useAction = (
  action: (payload: Payload) => Action,
  payloadFn: (payload: Payload) => Payload,
  extraPayload: Payload,
): Dispatch<AnyAction> => {
  const dispatch = useDispatch();

  const dispatchAction = useCallback(
    payload => {
      const finalPayload = extraPayload
        ? { ...extraPayload, ...payloadFn(payload) }
        : payloadFn(payload);
      return dispatch(action(finalPayload));
    },
    [action, dispatch, extraPayload, payloadFn],
  );

  return dispatchAction;
};

export const useAsyncAction = (
  action: (payload: Payload) => Action,
): Dispatch<AnyAction> => {
  const dispatch = useDispatch();

  const dispatchAction = useCallback(
    payload => dispatch(action(payload)),
    [action, dispatch],
  );

  return dispatchAction;
};
