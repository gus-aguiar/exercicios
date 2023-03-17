import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../src/redux/actions/actions';



class App extends React.Component {
  state = {
    endpoint:'',
  }
  handleClick = () => {
    const { endpoint } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchAPI(endpoint));
  }
  
  handleChange = ({ target }) => {
    this.setState({ endpoint: target.value });
  }
  render(){
    const { character } = this.props;
  return (
    <div className="divzona">
    <input type="text" onChange={ this.handleChange }></input>
      <button tybe="submit" onClick={ this.handleClick }>
      Procurar
      </button>
      {character?
      <p>{ character.name }</p>:
      <p>digite seu personagem</p>}
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  character : state.charecter,
});

export default connect(mapStateToProps)(App);

