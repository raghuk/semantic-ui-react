import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

import { map } from 'lodash';

const NavBar = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image as='a' href='/' size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>

    {map(leftItems, item => {
      return <Menu.Item as='a' href={item.url} key={item.key} name={item.key}>{item.label}</Menu.Item>
    })}

    <Menu.Menu position="right">
      {map(rightItems, item => {
        return <Menu.Item as='a' href={item.url} key={item.key} name={item.key}>{item.label}</Menu.Item>
      })}
    </Menu.Menu>
  </Menu>
);

export default NavBar;
