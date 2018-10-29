import React, { Component } from 'react';

class CreateUser extends Component {
  
  state = {
    firstName: '',
    lastName: '',
    userName: ''
  }

  createUser = event => {
    this.props.onCreate(this.state.firstName, this.state.lastName, this.state.userName)
  }
  
  handleChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  handleChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  handleChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  inputEmpty = () => {
    return (this.state.userName === '' || this.state.firstName === '' || this.state.lastName === '');
  }
  
  render() {
   return (
     <form onSubmit={this.createUser}>
	   <input type="text" placeholder="First Name" value={this.state.firstName} onChange=      		
			{this.handleChangeFirstName}/>
	   <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChangeLastName}/>
	   <input type="text" placeholder="Username" value={this.state.userName} onChange={this.handleChangeUserName}/>
	   <button disabled={this.inputEmpty()}>Add</button>
	 </form>
   );
  }
}

export default CreateUser;