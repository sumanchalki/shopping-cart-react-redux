import { Component } from 'react';

export default class ReadMore extends Component {
  truncateStr = (text, length) => {
    if (text.length > length)
      return text.substring(0, length - 3) + '...';
    else
      return text;
  }

  render() {
    const text = this.props.text;
    const length = this.props.length;

    return this.truncateStr(text, length);
  }
}
