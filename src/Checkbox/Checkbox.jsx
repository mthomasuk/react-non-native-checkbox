import React from 'react';
import './Checkbox.css';

export default class Checkbox extends React.PureComponent {

  constructor(props) {
    super(props);

    const checked = 'checked' in props
      ? props.checked
      : false;

    this.state = {
      checked
    };
  }

  onClick = () => {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const {classNameModifier, labelText, disabled, readOnly} = this.props;
    const {checked} = this.state;

    return (
      <label className={`checkbox${classNameModifier ? ' ' + classNameModifier : ''}`} onClick={this.onClick}>
        {labelText}
        <div readOnly={readOnly} disabled={disabled} className={`checkbox-input`} data-checked={!!checked} onClick={this.onClick}>
          <span>{checked
              ? "✓"
              : null}</span>
        </div>
      </label>
    );
  }
}
