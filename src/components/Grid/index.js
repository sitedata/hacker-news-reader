import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GridItem from 'components/GridItem';

import { GridWrapper } from './styles';

class Grid extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  render() {
    const { stories } = this.props;
    return (
      <GridWrapper>
        {stories.map(story => (
          <GridItem key={story.id} {...story} />
        ))}
      </GridWrapper>
    );
  }
}

export default Grid;
