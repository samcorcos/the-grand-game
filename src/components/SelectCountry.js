import React from 'react'
import {
  base,
} from '../utils'

class SelectCountry extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      countries: {}
    }
  }

  componentDidMount() {
    this.countriesRef = base.bindToState('countries', {
      context: this,
      state: 'countries',
      asArray: true,
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.countriesRef)
  }

  render() {
    if (!Object.keys(this.state.countries).length > 0) return null
    return (
      <select value={this.props.value} onChange={v => this.props.onChange(v.target.value)}>
        <option value={0}>Unoccupied</option>
        {this.state.countries.map(c => 
          <option key={c.name} value={c.name}>
            {c.name}
          </option>)}
      </select>
    )
  }
}

export default SelectCountry