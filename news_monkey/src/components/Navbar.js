// import React, { Component } from 'react'

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-light bg-light justify-content-between">
//   <a className="navbar-brand" href='/'>News Application</a>
//   <form className="form-inline">
//     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </nav>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'

export default class ParentComponent extends Component {
  state = {
    inputValue: ''
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  render() {
    return (
      <div>
        <Navbar inputValue={this.state.inputValue} onInputChange={this.handleInputChange} />
      </div>
    )
  }
}
//
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand" href='/'>News Application</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                   value={this.props.inputValue} onChange={this.props.onInputChange} />
            <a href = "/"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></a>
          </form>
        </nav>
      </div>
    )
  }
}