import { useCallback, useMemo, useState } from 'react';

const useIterator = (items = [], initialValue = 0) => {
  const [index, setIndex] = useState(initialValue);

  const prev = useCallback(() => {
    if (index === 0) return setIndex(items.length - 1);
    setIndex(index - 1);
  }, [index]);

  const next = useCallback(() => {
    if (index === items.length - 1) return setIndex(0);
    setIndex(index + 1);
  }, [index]);

  const item = useMemo(() => items[index], [index]);

  return [item || items[index], prev, next];
};

export default useIterator;