import React, { Component } from 'react'
import { Segment, Button, Icon, Label } from 'semantic-ui-react'

export default class BuyButton extends Component {
render() {
  return(
    <div inverted>
      <Button
        color='black'
        content='buy'
        icon='cart'
      />
    </div>
  )

}
}
