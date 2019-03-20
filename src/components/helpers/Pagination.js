import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //currentPage, perPage, totalProductCount
  }

  generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.totalProductCount / this.props.perPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  generatePageMarkUp = () => {
    const pageMarkUp1 = <li className="page-item"><a className="page-link" href="#">Previous</a></li>;
    const pageMarkUp2 = this.generatePageNumbers().map(number => {
      return <li className="page-item"><a className="page-link" href="#">{number}</a></li>;
    });
    const pageMarkUp3 = <li className="page-item"><a className="page-link" href="#">Next</a></li>;

    return (
      <React.Fragment>
        {pageMarkUp1}
        {pageMarkUp2}
        {pageMarkUp3}
      </React.Fragment>
    );
  }

  render() {
    if (this.props.totalProductCount > this.props.perPage) {
      return(
        <ul className="pagination product-pagination">
          {this.generatePageMarkUp()}
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
