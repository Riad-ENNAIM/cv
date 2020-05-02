import React from 'react';
import PropTypes from 'prop-types';

const MilestonePeriod = ({ milestone }) => {
  const displayDate = (date) => {
    // const engMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const frMonthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const d = new Date(date);

    if(d.getFullYear() === new Date().getFullYear())
      return `${d.getDate()} ${frMonthNames[d.getMonth()]}`;

    return `${d.getDate()} ${frMonthNames[d.getMonth()]} ${d.getFullYear()}`;
  }

  return (
    <li className={`milestone-period ${milestone.isCurrent ? 'current-milestone' : ''}`}>
      <span></span>
      <div>
        <div className="title">{milestone.title}</div>
        <div className="info">{milestone.info}</div>
        <div className="type">{milestone.type}</div>
      </div>
      <span className="number">
        <span>{displayDate(milestone.end)}</span>
        <span>{displayDate(milestone.start)}</span>
      </span>

      {
        milestone.isCurrent ?
          <div className="tag-flash">En cours</div>
        :
          null
      }
    </li>
  );
}

MilestonePeriod.propTypes = {
  milestone: PropTypes.object.isRequired
};

export default MilestonePeriod;
