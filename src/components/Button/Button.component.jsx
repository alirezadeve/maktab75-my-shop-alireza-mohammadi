import PropTypes from 'prop-types';
import "assets/styles/components/Button/index.scss";

export const Button = ({text, type, Click, size}) => {
  return (
    <button className={`btn btn--${type} btn--${size}`} onClick={()=> Click()}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', "info", "warning"]).isRequired,
  Click: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}