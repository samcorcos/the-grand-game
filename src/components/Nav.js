import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Link = styled.a`
  margin: 10px;
`

class Nav extends React.PureComponent {
  render() {
    return (
      <Row>
        <Link href="/">Dashboard</Link>
        <Link href="/players">Players</Link>
        <Link href="/allocation">Allocation</Link>
      </Row>
    )
  }
}

export default Nav