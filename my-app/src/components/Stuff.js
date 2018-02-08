import React, { Component } from "react"

export default class Hero extends Component {
  render() {
    return (<img src={this.props.image} alt={this.props.name} fluid/>)
  }
}
