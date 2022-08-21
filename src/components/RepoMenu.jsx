import React from 'react';
import useIterator from '../hooks/useIterator';

const RepoMenu = ({ repositories, selected, onSelect = f => f }) => {
  const [{ name }, previous, next] = useIterator(
    repositories,
    selected ? repositories.findIndex(repo => repo.name === selected) : null
  );

  onSelect(name);

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
};

export default RepoMenu;