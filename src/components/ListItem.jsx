import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class ListItem extends React.Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.element.id);
  }

  render() {
    const { id, name, famousStatement, url } = this.props.element;
    return (
      <div>
        <div className="row">
          <img className="col-sm-2 col-md-2 img-rounded" alt="User avatar" src={url} width="10%" />
          <div className="col-sm-6 col-md-6">
            <h3><Link to={`/edit/${id}`}>{name}</Link></h3>
            <p>{famousStatement}</p>
          </div>
          <button className="col-sm-2 col-md-2 btn btn-default" onClick={this.onDelete} >Delete</button>
        </div>
        <hr />
      </div>
    );
  }
}

ListItem.defaultProps = {
  element: {
    famousStatement: null,
    url: null,
  },
};

// Más PropTypes: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
ListItem.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    famousStatement: PropTypes.string,
    url: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default ListItem;
