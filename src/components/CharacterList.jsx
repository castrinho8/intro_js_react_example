import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import ListItem from './ListItem';
import simpsonList from '../constants/simpsonList';
import SimpsonListActions from '../actions/simpson-list-actions';

class CharacterList extends Component {
  constructor () {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.resetList = this.resetList.bind(this);
  }

  onDelete(id) {
    const { removeItem } = this.props.actions;
    if (removeItem) {
      removeItem(id);
    }
  }

  resetList() {
    const { resetList } = this.props.actions;
    if (resetList) {
      resetList();
    }
  }

  render() {
    const { characters } = this.props;
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

CharacterList.propTypes = {
  actions: PropTypes.object.isRequired,
  characters: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    characters: state.simpsonListReducer.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SimpsonListActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
