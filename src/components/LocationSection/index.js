import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={"https://goo.gl/maps/B4NRkn7FTc2oH1KZ7"}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Mahoni Leisure Sukabumi</strong>
                </a>{' '}
                <br />
                Jl Gandasoli - Cireunghas, Selawangi, Kec. Sukaraja, Kabupaten Sukabumi, 
                Provinsi Jawa Barat, Kode Pos 43194
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6437696406874!2d106.981977314773!3d-6.933110994990776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6848bfcc1c601b%3A0x5eb1219edae929f1!2sMahoni%20Leisure!5e0!3m2!1sid!2sid!4v1682797343434!5m2!1sid!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Wiwil & Latif Wedding Party"
              ></iframe>
            </div>
            <div class="col-md-3"><a href="https://goo.gl/maps/B4NRkn7FTc2oH1KZ7"><button class="btn btn-primary btn-block">Lihat Lokasi</button></a></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
