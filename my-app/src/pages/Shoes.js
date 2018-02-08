import React from "react"
import { Grid, Card, Image } from 'semantic-ui-react'
import { Route } from "react-router-dom"
import Shoesdata from "../data/Shoesdata"
import BuyButton from "../components/BuyButton"

const Shoes = ({ match }) => (
  <div className="container">
    <Grid centered="centered" columns={6} padded="padded">


          {Shoesdata.map((shoes) => {
            return (
              <Grid.Column mobile={6} tablet={4} computer={3}>
              <Card>

                <Card.Header>
                <Image src={shoes.image}/>
                </Card.Header>
                <Card.Content textAlign="center">
                  <b>{shoes.name}</b>
                  <p>{shoes.Type}</p>
                  <p>{shoes.Price}</p>
                </Card.Content>
                <Card.Content extra textAlign="center">
                  <BuyButton/>
                </Card.Content>
              </Card>
              </Grid.Column>
            )
          })}

    </Grid>
  </div>
)

export default Shoes
