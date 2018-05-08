import React, { Component } from 'react';
import styled from 'styled-components'
import base from './base'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Cell = styled.div`
  width: 20%;
`

class Players extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: {},
    }
  }

  componentWillMount() {
    this.playersRef = base.syncState('players', {
      context: this,
      state: 'players',
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.playersRef)
  }

  render() {
    if (Object.keys(this.state.players).length < 1) return <div>Loading...</div>

    return (
      <Container>
        <Row>
          <a href="/">Dashboard</a>
        </Row>
        <Row>
          <Cell>
            <h1>Name</h1>
          </Cell>
          <Cell>
            <h1>Country</h1>
          </Cell>
          <Cell>
            <h1>Something?</h1>
          </Cell>
        </Row>
        {Object.keys(this.state.players).map(key => (
          <Row key={`players-${key}`}>
            <Cell>
              {this.state.players[key].name}
            </Cell>
          </Row>
        ))}
      </Container>
    )
  }
}

export default Players;