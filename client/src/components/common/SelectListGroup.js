//////////////
// Imports //
////////////

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

////////////////
// Component //
//////////////

const SelectListGroup = (
    {name, value, error, info, onChange, options}) => {

    // Loop through the options (prop) to generate an option tag for each option
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ));

    return (
        <div className="form-group">

            {/* selectOptions is an array of option tags obtained by looping
            the options array (prop). Using the .map method selectOptions creates
            an HTML option tag to place in the HTML select element below...
            this for each element in the options array */}
            <select
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                name={name}
                onChange={onChange}
                value={value}>
                {selectOptions}
            </select>

            {info && (<small className="form-text text-muted">{info}</small>)}

            {/* provide the error messages under the input that is not validated */}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
};

// Prop types of the component
SelectListGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

//////////////
// Exports //
////////////

export default SelectListGroup;