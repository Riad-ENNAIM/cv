import React from 'react';
import HeaderTitle from '../layout/HeaderTitle';

export default () => {
  return (
    <div id="smallScreen">
      <div className="small-screen-header">
        <HeaderTitle />
      </div>

      <div className="small-screen-body">
        <p>
          Merci d'ouvrir la page dans un écrant plus large
        </p>
      </div>
    </div>
  )
}
