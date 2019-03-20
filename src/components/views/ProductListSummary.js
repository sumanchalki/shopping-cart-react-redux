import React from 'react';

export default (props) => {
  const start = props.currentPageItemStart + 1;
  let end = props.currentPageItemEnd;
  if (props.currentPageItemEnd > props.totalProductCount) {
    end = props.totalProductCount;
  }
  return(
    <div>
      <p>Showing {start} - {end} of {props.totalProductCount} products</p>
    </div>
  );
}
