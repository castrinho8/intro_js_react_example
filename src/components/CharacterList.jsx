import React, { Component } from 'react';
import ListItem from './ListItem';
import simpsonList from '../constants/simpsonList';

class CharacterList extends Component {
  constructor () {
    super();
    this.state = {
      characters: simpsonList,
    };
    this.onDelete = this.onDelete.bind(this);
    this.resetList = this.resetList.bind(this);
  }

  onDelete(id) {
    const filteredUsers = this.state.characters.filter((element) => element.id !== id);
    this.setState({
      characters: filteredUsers,
    });
  }

  resetList() {
    this.setState({
      characters: simpsonList,
    });
  }

  render() {
    const { characters } = this.state;
    const renderElements = characters.map((element) => (
      <ListItem
        key={element.id}
        element={element}
        onDelete={this.onDelete}
      />
    ));

    return (
      <div>
        <h1>Best simpsons characters</h1>
        {renderElements}
        <button className="btn btn-danger" onClick={this.resetList}>Reset list</button>
      </div>
    );
  }
}

export default CharacterList;
