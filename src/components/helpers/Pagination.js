import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //currentPage, perPage, totalProductCount
  }

  render() {
    if (this.props.totalProductCount > this.props.perPage) {
      return(
        <ul className="pagination product-pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active"><a className="page-link" href="javascript:void(0);">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      );
    }
    else {
      return(
        <ul className="pagination product-pagination">
          <li className="page-item disabled"><a className="page-link" href="#">1</a></li>
        </ul>
      );
    }
  }
}
