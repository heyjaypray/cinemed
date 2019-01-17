import classnames from "classnames/bind";
import globalStyles from "styles/main.css";

// import "normalize.css";
import "styles/vendor.css";

/**
 * Global template css definitions
 * - This is necessary for CSModule
 * @see https://github.com/css-modules/css-modules
 * @package utils
 * @type {Function}
 */
const cx = classnames.bind(globalStyles);

export default cx;
