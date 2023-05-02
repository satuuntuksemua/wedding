import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  if (!isInvitation) return null;

  return (
    <div id="fh5co-started" classNameName="fh5co-bg" css={styWrapper}>
      <div classNameName="overlay"></div>
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 classNameName="main-font">{` Apakah kamu hadir, ${guestName}?`}</h2>
            <p>
              Atas kehadiran & do'a restu saudara/i, <br /> kami ucapkan terima kasih. Wassalamualaikum Warahmatullahi
              Wabarakatuh.
            </p>
          </div>
        </div>
        <div classNameName="row" css={styFlex}>
          <div classNameName="col-md-3">
            <Link to={`e-ticket?${codeLink}`}>
              <button classNameName="btn btn-default btn-block">Lihat e-Ticket</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
