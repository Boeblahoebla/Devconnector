//////////////
// Imports //
////////////

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

////////////////
// Component //
//////////////

const TextFieldGroup = (
    {name, placeholder, value, label, error, info, type, onChange, disabled, registerEmail}) => {
    return (
        <div className="form-group">

            {/* CSS classnames use the classnames npm package */}
            <input
                type={type}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />

            {registerEmail === true && (
                <small className="form-text text-muted">This site uses Gravatar so if you want a
                    profile image, use a Gravatar email
                </small>)
            }

            {/* provide the error messages under the input that is not validated */}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
};

// Proptypes of the component
TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
    registerEmail: PropTypes.bool
};

// Default proptype when none given
TextFieldGroup.defaultProps = {
    type: 'text'
};

//////////////
// Exports //
////////////

export default TextFieldGroup;