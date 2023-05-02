import React from 'react';

import IconBCA from './assets/bca.png';
import IconPermata from './assets/permata.png';
import IconEWallet from './assets/ewallet.png';
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
          <div className="col-md-12">
            <SectionBox icon={IconBCA} text="Bank Central Asia (BCA) a.n Siti Khotimatul Wildah : " /> <code id="bca-account">0380043882</code>
            <button class="btn btn-outline-secondary" onclick="copyToClipboard('bca-account')">Copy</button>
            <SectionBox icon={IconPermata} text="Bank Permata a.n Siti Khotimatul Wildah : " /> <code id="permata-account">1227523820</code>
            <button class="btn btn-outline-secondary" onclick="copyToClipboard('permata-account')">Copy</button>
            <SectionBox icon={IconEWallet} text="E-Wallet (Dana, OVO, Gopay, ShopeePay, dan LinkAja) : " /> <code id="ewallet-account">089650641822</code>
            <button class="btn btn-outline-secondary" onclick="copyToClipboard('ewallet-account')">Copy</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <p className="info" style={{ marginBottom: '-16px' }}>
              Jika teman-teman ingin mengirimkan kado ke Alamat di bawah ini:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <br /><code id="address">Kp. Lio RT/RW 002/001 (Belakang Perum Lio) No. 113, Kel. Cireunghas, Kec. Cireunghas, Kab. Sukabumi, Jawa Barat, 43193</code>
          <button class="btn btn-outline-secondary" onclick="copyToClipboard('address')">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
  function copyToClipboard(id) {
    const element = document.getElementById(id);
    const text = element.innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Could not copy text: ', error);
      });
  }
  
}

export default GiftSection;
