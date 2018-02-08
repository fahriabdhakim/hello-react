import React, {Component} from "react"
import {Card} from 'semantic-ui-react'
import Stuff from "./Stuff"
import BuyButton from "./BuyButton"

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increaseVote = this.increaseVote.bind(this)
  }

  increaseVote = () => {
    const count = this.state.count + 1
    this.setState({count})
  }

  render() {
    return (<div>
      <Card fluid={true}>

        <Stuff image={this.props.image} name={this.props.name}/>
        <Card.Content>
          <Card.Header textAlign='center'>
            <h2>
              {this.props.name}
            </h2>
          </Card.Header>
          <Card.Description textAlign='center'>
            <p>
              {this.props.type}
            </p>
            <p>
              {this.props.price}
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra="extra" textAlign='center'>
        <BuyButton/>
        </Card.Content>

      </Card>
    </div>)
  }
}
