import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import SideMenu from './SideMenu';

import './styles.css';


class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handlePusher = this.handlePusher.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handlePusher() {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  }

  handleToggle() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div className="layout">
        <SideMenu
          leftItems={leftItems}
          onPusherClick={this.handlePusher}
          onToggle={this.handleToggle}
          rightItems={rightItems}
          visible={visible}
        >
          <Container style={{ paddingTop: "70px" }}>{children}</Container>
        </SideMenu>
      </div>
    );
  }
}

export default Layout;
