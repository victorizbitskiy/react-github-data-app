import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

const useIterator = (items = [], initialIndex - 0) => {
  const [index, setIndex] = useState(initialIndex);

  const prev = () => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }

  const next = () => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  }

  return [items[i], prev, next];
};

export default useIterator;