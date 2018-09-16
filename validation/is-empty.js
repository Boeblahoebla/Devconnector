// Returns true in the following conditions:
// * if the value is undefined,
// * if its value is null,
// * when it is empty object
// * when it is an empty string
function isEmpty(value) {
    if (value === undefined || value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0 ) ||
        (typeof value === 'string' && value.trim().length === 0)) {
        return true;
    } else {
        return false;
    };
}

module.exports = isEmpty;