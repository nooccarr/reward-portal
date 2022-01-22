import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      occupation: '',
      state: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const invalidReasons = [];
    // var reason = `The ${} is in invalid format.`
    // if (invalidName) invalidReasons.push()
    // if (invalidEmail)
    // if (invalidPassword)
    // if (invalidState)
    // if (invalidOccupation)
    if (invalidReasons.length) {
      console.log('list all reasons');
    } else {
      console.log('successfully loaded');
    }
  }

  render() {
    const { occupations, states } = this.props;

    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        {console.log(this.state)}
        <label>Name: </label>
        <input
          name='name'
          type='text'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <label>Email: </label>
        <input
          name='email'
          type='text'
          value={this.state.email}
          onChange={e => this.handleChange(e)}
        />
        <label>Password: </label>
        <input
          name='password'
          type='password'
          value={this.state.password}
          onChange={e => this.handleChange(e)}
        />
        <label>Occupation: </label>
        <select
          name='occupation'
          onChange={e => this.handleChange(e)}
        >
          <option value="">-Choose an occupation-</option>
          {occupations.map((occupation, idx) => {
            return (
              <option value={occupation} key={idx}>
                {occupation}
              </option>
            );
          })}
        </select>

        <label>State: </label>
        <select
          name='state'
          onChange={e => this.handleChange(e)}
        >
          <option value="">-Choose a state-</option>
          {states.map((state, idx) => {
            return (
              <option value={state.abbreviation} key={idx}>
                {state.name}
              </option>
            );
          })}
        </select>
        <button>Sign Up!</button>
      </form>
    );
  }
}

export default SignUpForm;