import PropTypes from 'prop-types';
import { Fragment } from 'react';
import 'assets/styles/components/Loading/index.scss';

export const Loading = ({type}) => {
  return(
    <Fragment>
      {
        type === "spinner" ?
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        : type === "ripple" ?
          <div className="lds-ripple"><div></div><div></div></div>
        : type === "roller" ?
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        : ""
      }
    </Fragment>
  )
}

Loading.propTypes = {
  type: PropTypes.oneOf(['spinner', 'ripple', 'roller']).isRequired
}