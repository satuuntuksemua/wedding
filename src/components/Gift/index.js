import React from 'react';

import IconBCA from './assets/bca.png';
import IconPermata from './assets/permata.png';
import IconEwallet from './assets/ewallet.png';
import SectionBox from './SectionBox';

function GiftSection() {
  return (
    <div id="fh5co-couple">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Kado Nikah</h2>
            <p className="info" style={{ marginBottom: '-16px' }}>
            Terima kasih atas doa dan restu yang telah teman-teman berikan, jika teman-teman ingin mengirimkan kado tetapi berhalangan hadir teman-teman bisa mengirimkan di tempat resepsi pernikahan kami. Atau bisa juga dengan kirim melalui rekening di bawah ini. Sebelumnya, kami mengucapkan banyak terima kasih
            </p>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row">
  <div className="col-md-6">
    <ul className="list-group mb-4">
      <div className="list-group-item bg-dark text-white py-0">
        <small><i className="fa fa-fw fa-maps"></i> Alamat </small>
      </div>
      <li className="list-group-item text-black">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <i className="fa fa-fw fa-maps"></i>
          </div>
          <div className="col lead">
            <div className="text-nowrap text-truncate" title="Alamat Pengiriman Kado">
              <small className="text-muted">Alamat pengiriman :   </small>
            </div>
            <code>Kp. Lio RT/RW 002/001 (Belakang Perum Lio) No. 113, Kel. Cireunghas, Kec. Cireunghas, Kab. Sukabumi, Jawa Barat, 43193</code>
            <div className="font-weight-bold">Siti Khotimatul Wildah (Wiwil) </div>
          </div>
          <div className="col-auto text-primary">
            <button className="btn btn-outline-secondary btn-copy" data-clipboard-text="Kp. Lio RT/RW 002/001 (Belakang Perum Lio) No. 113, Kel. Cireunghas, Kec. Cireunghas, Kab. Sukabumi, Jawa Barat, 43193">
              <i className="fa fa-fw fa-copy"></i> Copy
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div className="col-md-6">
    <ul className="list-group mb-4">
      <div className="list-group-item bg-dark text-white py-0">
        <small><i className="fa fa-fw fa-credit-card"></i> Bank Accounts</small>
      </div>
      <li className="list-group-item text-black">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <img src={IconBCA} className="img-fluid my-2" alt="" width="96" />
          </div>
          <div className="col lead">
            <div className="text-nowrap text-truncate" title="Bank Central Asia (BCA)">
              <small className="text-muted">Bank Central Asia (BCA)</small>
            </div>
            <code>0380043882</code>
            <div className="font-weight-bold">Siti Khotimatul Wildah</div>
          </div>
          <div className="col-auto text-primary">
            <button className="btn btn-outline-secondary btn-copy" data-clipboard-text="0380043882">
              <i className="fa fa-fw fa-copy"></i> Copy
            </button>
          </div>
        </div>
      </li>
      <li className="list-group-item text-black">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <img src={IconPermata} className="img-fluid my-2" alt="" width="96" />
          </div>
          <div className="col lead">
            <div className="text-nowrap text-truncate" title="Bank Permata">
              <small className="text-muted">Bank Permata</small>
            </div>
            <code>1227523820</code>
            <div className="font-weight-bold">Siti Khotimatul Wildah</div>
          </div>
          <div className="col-auto text-primary">
            <button className="btn btn-outline-secondary btn-copy" data-clipboard-text="1227523820">
              <i className="fa fa-fw fa-copy"></i> Copy
            </button>
          </div>
        </div>
      </li>
      <li className="list-group-item text-black">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <img src={IconEwallet} className="img-fluid my-2" alt="" width="96" />
          </div>
          <div className="col lead">
            <div className="text-nowrap text-truncate" title="E-Wallet : OVO, Dana, Gopay, ShopeePay dan LinkAjaa">
              <small className="text-muted">E-Wallet : OVO, Dana, Gopay, ShopeePay dan LinkAjaa</small>
            </div>
            <code>089650641822</code>
            <div className="font-weight-bold">Abdul Latif</div>
          </div>
          <div className="col-auto text-primary">
            <button className="btn btn-outline-secondary btn-copy" data-clipboard-text="089650641822">
              <i className="fa fa-fw fa-copy"></i> Copy
            </button>
          </div>
        </div>
      </li>
    </ul>

            
            {/* <SectionBox icon={IconMask} text="Wajib menggunakan masker dan dilakukan pengecekan suhu." />
            <SectionBox icon={IconSocialDistancing} text="Pembatasan jarak dan pembatasan jumlah tamu." />
            <SectionBox icon={IconGuest} text="Satu undangan hanya untuk 2 orang tamu." />
            <SectionBox
              icon={IconDoctor}
              text="Dipantau tim dokter dan disediakan hand sanitizer di berbagai titik. "
            />
            <SectionBox icon={IconQRcode} text="Wajib membawa QRCode untuk meminimalisir kontak fisik melalui pena. " />
            <SectionBox icon={IconClock} text="Wajib hadir sesuai sesuai waktu yang tertera di undangan." /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftSection;
