import React, { Component } from 'react';
import styled from 'styled-components'
import {
  base,
} from '../utils'
import {
  SelectCountry, 
  Nav,
} from '../components'

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

class Allocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zones: {},
      players: {},
    }
  }

  componentDidMount() {
    this.zoneRef = base.syncState('zones', {
      context: this,
      state: 'zones',
    })
    this.playerRef = base.syncState('players', {
      context: this,
      state: 'players',
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.zoneRef)
    base.removeBinding(this.playerRef)
  }

  render() {
    if (Object.keys(this.state.zones).length < 1) return <div>Loading...</div>
    if (Object.keys(this.state.players).length < 1) return <div>Loading...</div>

    return (
      <Container>
        <Nav />
        <Row>
          <Cell>
            <h1>Zone</h1>
          </Cell>
          <Cell>
            <h1>GDP</h1>
          </Cell>
          <Cell>
            <h1>Owner</h1>
          </Cell>
        </Row>
        {Object.keys(this.state.zones).map(key => (
          <Row key={`zones-${key}`}>
            <Cell>
              {key}
            </Cell>
            <Cell>
              {this.state.zones[key].gdp}
            </Cell>
            <Cell>
              <SelectCountry 
                value={this.state.zones[key].owner} 
                // when someone selects a new country, set the value
                onChange={v => this.setState({
                  zones: {
                    [key]: {
                      owner: v,
                    }
                  }
                })} />
            </Cell>
          </Row>
        ))}
      </Container>
    )
  }
}

export default Allocation;