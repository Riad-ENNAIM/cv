import React from 'react';
import HeaderTitle from '../layout/HeaderTitle';

export default () => {
  return (
    <div id="smallScreen">
      <div class="small-screen-header">
        <HeaderTitle />
      </div>

      <div class="small-screen-body">
        <p>
          Merci d'ouvrire la page dans une ecrant plus large
        </p>
      </div>
    </div>
  )
}
