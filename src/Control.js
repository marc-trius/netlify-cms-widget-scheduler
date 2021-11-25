import PropTypes from 'prop-types';
import moment from 'moment';
import React from 'react';
import Datetime from 'react-datetime';

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  handleChange(value) {
    console.log(`handleChange (${moment(value)})`);

    const { onChange } = this.props;

    onChange(moment(value).format());
  }

  render() {
    const {
      forID,
      value,
      classNameWrapper,
    } = this.props;

    return (
      <div class={classNameWrapper}>
          <Datetime
            id={`${forID}-startDate`}
            value={value || new Date()}
            onChange={e => this.handleChange(e)}
          />
          Start Date
      </div>
    );
  }
}