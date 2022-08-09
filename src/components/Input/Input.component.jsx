import PropTypes from "prop-types";
import "assets/styles/components/Input/index.scss";

export const Input = ({ type, holder, onChnage, value }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={holder}
      onChange={onChnage}
      value={value}
      required
    />
  );
};

Input.prototype = {
  type: PropTypes.string.isRequired,
  holder: PropTypes.string.isRequired,
  onChnage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
