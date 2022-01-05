import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default function asyncComponent(importComponent) {
  class AsyncFunc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
        loading: true,
      };
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    async componentDidMount() {
      if (window.location.pathname === "/") this.setState({ loading: false });
      this.mounted = true;
      const { default: Component } = await importComponent();
      if (this.mounted) {
        this.setState({
          component: <Component {...this.props} />,
          loading: false,
        });
      }
    }

    render() {
      const { component, loading } = this.state;
      const Component = component || (
        <main>
          <Helmet>
            <title>{"Page Title"}</title>
          </Helmet>
        </main>
      );
      return loading ? <div>{"Loading..."}</div> : Component;
    }
  }

  return AsyncFunc;
}
