import React from 'react';
import PropTypes from 'prop-types';

import Subtitle from '../subtitle/subtitle';

import './list_group.scss';

const ListGroup = ({ items, colour, chunk }) => {

  const groupArray = items.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item);

    return resultArray
  }, []);

  return (
     <div className="list-group">
      { groupArray.map((array, arrayIndex) => (
        <ul className="list-group__list" key={`ul-${arrayIndex}`}>
          { array.map((item, index) => (
            <li key={`list-item-${index}`}>
              <Subtitle
                text={item}
                colour={colour}
              />
            </li>
          )) }
        </ul>
      )) }
     </div>
  );
};

ListGroup.defaultProps = {
  colour: 'navy',
  chunk: 4
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  colour: PropTypes.string,
  chunk: PropTypes.number,
};

export default ListGroup;
