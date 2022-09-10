import { useRef } from "react";
import { useSharedValue as REAuseSharedValue } from "react-native-reanimated";

export const useSharedValue = <T>(value: T) => {
  const ref = useRef<T | null>(null);
  if (ref.current === null) {
    ref.current = value;
  }

  return REAuseSharedValue<T>(ref.current);
};
