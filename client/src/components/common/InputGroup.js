//////////////
// Imports //
////////////

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

////////////////
// Component //
//////////////

const InputGroup = (
    {name, placeholder, value, error, icon, type, onChange}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group text">
                    <i className={icon} />
                </span>
            </div>

            {/* CSS classnames use the classnames npm package */}
            <input
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
            />

            {/* provide the error messages under the input that is not validated */}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
};

// Prop types of the component
InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

// Default prop type when none given
InputGroup.DefaultProps = {
    type: 'text'
};

//////////////
// Exports //
////////////

export default InputGroup;