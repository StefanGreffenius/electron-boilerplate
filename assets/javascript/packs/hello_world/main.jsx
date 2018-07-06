import React from 'react'
import { Button, Col, Grid, Row } from 'react-bootstrap'

type Props = { }
type State = {
  name: string
}

export default class HelloWorld extends React.Component<Props, State> {
  state = {
    name: 'Electron'
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col className="m-auto">
            <h1>Hello {this.state.name}</h1>
            <p>Features:</p>
            <ul>
              <li>React</li>
              <li>Babel => ES6+ (stage-0)</li>
              <li>Sass</li>
              <li>Bootstrap</li>
              <li>Live-Reload</li>
            </ul>
            <Button bsStyle='success'>
              Nice Bootstrap Button
            </Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
