import { Component } from 'react';
import PropTypes from 'prop-types';


class Counter extends Component {
  state = { count: this.props.initialCount ? this.props.initialCount : 0 };

  increase = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      };
    });
  };

  decrease = () => {
    this.setState(previousState => {
      return {
        count: previousState.count - 1
      };
    });
  };

  getStateAndHelpers() {
    return {
      count: this.state.count,
      increase: this.increase,
      decrease: this.decrease
    };
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}


Counter.propTypes = {
  /**
    Use the loading state to indicate that the data Avatar needs is still loading.
    */
  loading: PropTypes.bool,
  /**
    Avatar falls back to the user's initial when no image is provided. 
    Supply a `username` and omit `src` to see what this looks like.
    */
  username: PropTypes.string,
  /**
    The URL of the Avatar's image.
    */
  src: PropTypes.string,
  /**
    Avatar comes in four sizes. In most cases, you'll be fine with `medium`.
    */
  size: PropTypes.oneOf(Object.keys(Counter)),
};

export default Counter;
