import { useCallback, useState } from 'react';
import type { LayoutChangeEvent, ViewProps } from 'react-native';
import { ISize } from './Constants';

type OnLayout = ViewProps['onLayout'];

export const useLayout = (): [ISize, OnLayout] => {
  const [size, setSize] = useState<ISize>({ width: 0, height: 0 });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};
