import PropTypes from 'prop-types';
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
};

export default ErrorBoundary;