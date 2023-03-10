import { useEffect, useRef } from 'react';

export const useHasChangedIgnoreUndefined = (val: any) => {
  const stringifiedVal = JSON.stringify(val);
  const prevVal = usePrevious(stringifiedVal);
  if (!val || !prevVal) {
    return false;
  }
  return prevVal !== stringifiedVal;
};

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
export { useProcess } from './useProcess';
export { useAppSelector } from './useAppSelector';
export { useAppDispatch } from './useAppDispatch';
export { useInstanceIdParams } from './useInstanceIdParams';
