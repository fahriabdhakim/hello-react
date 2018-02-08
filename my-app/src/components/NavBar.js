import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid centered columns={1} padded>
        <Grid.Column>
      <Segment textAlign="center" inverted>
        <Menu inverted pointing secondary fluid={true} >
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='shoes' active={activeItem === 'shoes'} onClick={this.handleItemClick} />
          <Menu.Item name='clothes' active={activeItem === 'clothes'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
      </Grid.Column>
      </Grid>
    )
  }
}
