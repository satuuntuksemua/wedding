import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Akad Nikah" time="09.00 WIB (Live di Instagram)" date=", 09 Juli 2023" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Acara Pernikahan dan Ngunduh Mantu</h2>
              <span className="sub-title sub-title__wedding">In Sya Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah dan Syukuran"
                  date="Minggu, 09 Juli 2023"
                  time="Akad     : 09.00 WIB <br>Syukuran : Sesuai jadwal undangan di e-ticket "
                  description="Mahoni Leisure Sukabumi <br/>Jl Gandasoli - Cireunghas, Selawangi, Kec. Sukaraja, Kabupaten Sukabumi, Provinsi Jawa Barat, Kode Pos 43194"
                />
                <WeddingInfoBox
                  title="Ngunduh Mantu"
                  time="09.00 WIB"
                  date="Minggu, 16 Juli 2023"
                  description="Kediaman Mempelai Priaimage.pngKp. Bugelan RT. 003/ RW 006, Kelurahan Gunung Tandala, Kecamatan Kawalu, Kota Tasikmalaya, Provinsi Jawa Barat, Kode Pos 46182"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
