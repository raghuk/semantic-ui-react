import React, { Component } from 'react';
import { Sidebar, Menu, Icon, Image } from 'semantic-ui-react';

import { map } from 'lodash';
import NavBar from './NavBar';

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      width: window.innerWidth
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    const { children, leftItems, onPusherClick, onToggle, rightItems, visible } = this.props;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width='thin'
        >
          {map(leftItems, item => {
            return (
              <Menu.Item as='a' href={item.url} key={item.label} name={item.key}>
                <Icon name={item.icon} />
              {item.label}
              </Menu.Item>
            )
          })}
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={onPusherClick}
          style={{ minHeight: "100vh" }}
        >
          {width <= 768 ? (
            <Menu fixed="top" inverted>
              <Menu.Item>
                <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
              </Menu.Item>
              <Menu.Item onClick={onToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
          ): (
            <NavBar leftItems={leftItems} rightItems={rightItems} />
          )}
    
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>  
    );
  }
}

export default SideMenu;
