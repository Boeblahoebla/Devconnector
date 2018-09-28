//////////////
// Imports //
////////////

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

////////////////
// Component //
//////////////

const TextAreaFieldGroup = (
    {name, placeholder, value, error, info, onChange}) => {
    return (
        <div className="form-group">

            {/* CSS classnames use the classnames npm package */}
            <textarea
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
            />

            {info && (<small className="form-text text-muted">{info}</small>)}

            {/* provide the error messages under the input that is not validated */}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
};

// Prop types of the component
TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

//////////////
// Exports //
////////////

export default TextAreaFieldGroup;