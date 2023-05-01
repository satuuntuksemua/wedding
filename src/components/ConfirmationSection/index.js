import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  if (!isInvitation) return null;

  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{` Apakah kamu hadir, ${guestName}?`}</h2>
            <p>
              Atas kehadiran & do'a restu saudara/i, <br /> kami ucapkan terima kasih. Wassalamualaikum Warahmatullahi
              Wabarakatuh.
            </p>
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <Link to={`e-ticket?${codeLink}`}>
              <button className="btn btn-default btn-block">Lihat e-Ticket</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
      <div class="position-relative container">
  <div class="d-flex align-items-center justify-content-center position-absolute w-100 h-100" style="top: 0; left: 0;"></div>

  <h2 data-aos="fade-down" class="aos-init aos-animate">Wedding Gift</h2>

  <div class="row d-flex justify-content-center">
    <div class="col-lg-10 col-xl-8 text-center">
      <div class="lead aos-init aos-animate" data-aos="fade-down">
        <p>Jika memberi adalah ungkapan tanda kasih Anda, silahkan mengirim amplop digital pada nomor rekening di bawah ini:</p>
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-lg-10 col-xl-8 py-5 text-left">
      <ul class="list-group mb-4">
        <div class="list-group-item bg-dark text-white py-0">
          <small><i class="fa fa-fw fa-credit-card"></i> Bank Accounts</small>
        </div>
          <li class="list-group-item text-black">
          <div class="row align-items-center">
            <div class="col-12 col-md-auto">
              <img src="https://storage.wedew.id/uploads/public/635/21a/a99/thumb_1923468_96_0_0_0_auto.png" class="img-fluid my-2" alt="" width="96" />
            </div>
            <div class="col lead">
              <div class="text-nowrap text-truncate" title="Bank Central Asia (BCA)">
                <small class="text-muted">Bank Central Asia (BCA)</small>
              </div>
              <code>0380043882</code>
              <div class="font-weight-bold">Siti Khotimatul Wildah</div>
            </div>
            <div class="col-auto text-primary">
              <button class="btn btn-outline-secondary btn-copy" data-clipboard-text="0380043882">
                <i class="fa fa-fw fa-copy"></i> Copy
              </button>
            </div>
          </div>
        </li>
      </ul>
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
