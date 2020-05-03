import React from 'react';
import PropTypes from 'prop-types';
import useFormatDate from '../../hooks/useFormatDate';
import Notes from './Notes';

const Card = ({ data }) => {
  const start = useFormatDate(data.start);
  const end = useFormatDate(data.end);

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{data.title}</h3>
        {
          data.isCurrent && <span className="tag-flash">En cours</span>
        }
      </div>

      <div className="card-body">
        <span className="card-description">{data.description}</span>
        <br />
        {
          data.start || data.end ?
            <span className="card-date tag">
              { data.start && !data.end ? `Depuis ${start}` : data.start && data.end ? start : '' } 
              { data.end && data.start ? ` à ${end}` : data.end && !data.start ? end : '' }
            </span>
          :
            null
        }
        <span className="card-info tag">{data.info}</span>
      
        <Notes notes={data.notes} />
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
