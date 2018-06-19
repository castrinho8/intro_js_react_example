import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SimpsonCreateOrEditActions from '../actions/simpson-create-or-edit-actions';

class CharacterList extends Component {
  constructor () {
    super();
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.params;
    if (id) {
      const character = _.find(this.props.simpsonList, (item) => item.id === parseInt(id));
      if (character) {
        this.props.actions.initialize(character);
      }
    }
  }

  componentWillUnmount() {
    this.props.actions.resetForm();
  }

  onChange(e) {
    const { actions: { updateField } } = this.props;
    if (updateField) {
      updateField(e.target.name, e.target.value);
    }
  }

  onBlur(e) {
    const { actions: { validateField } } = this.props;
    if (validateField) {
      validateField(e.target.name);
    }
  }

  onSaveClick() {
    const { actions: { saveCharacter } } = this.props;
    if (saveCharacter) {
      saveCharacter();
    }
  }

  render() {
    const { character: { id, name, famousStatement, url, errors} } = this.props;

    return (
      <div>
        <div className="row">
          <h4>Name</h4>
          <input
            className="form-control"
            name='name'
            value={name}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </div>
        <div className="row">
          <h4>Famous statement</h4>
          <input
            className="form-control"
            name='famousStatement'
            value={famousStatement}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </div>
        <div className="row">
          <h4>Url</h4>
          <input
            className="form-control"
            name='url'
            value={url}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </div>
        <br/>
        {
          !_.isEmpty(errors) &&
          <div className="alert alert-danger" role="alert">
            {
              _.map(errors, (error) => <p>{error}</p>)
            }
          </div>
        }
        <br/>
        <button className="btn btn-success" onClick={this.onSaveClick}>Save</button>
      </div>
    );
  }
}

CharacterList.propTypes = {
  actions: PropTypes.object.isRequired,
  character: PropTypes.object.isRequired,
  simpsonList: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    character: state.simpsonCreateOrEditReducer,
    simpsonList: state.simpsonListReducer.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SimpsonCreateOrEditActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
