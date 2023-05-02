import React from 'react';

import IconBCA from './assets/bca.png';
import IconPermata from './assets/permata.png';
import IconEWallet from './assets/ewallet.png';
import SectionBox from './SectionBox';


const CopyButton = ({text}) => {
  const handleClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Could not copy text: ', error);
      });
  }

  return (
    <button className="btn btn-outline-secondary btn-copy" onClick={handleClick}>
      Copy
    </button>
  )
}

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
          <div className="col-md-12" style={{border: '3px solid pink'}}>
            <SectionBox icon={IconBCA} text="Bank Central Asia (BCA) : " />
            <span style={{fontWeight: 500, fontSize: '1.2em'}}>Siti Khotimatul Wildah: <b>0380043882 </b> <CopyButton text="0380043882" /></span>
            <SectionBox icon={IconPermata} text="Bank Permata : " /> 
            <span style={{fontWeight: 500, fontSize: '1.2em'}}>Siti Khotimatul Wildah : <b>1227523820 </b> <CopyButton text="1227523820" /></span>
            <SectionBox icon={IconEWallet} text="E-Wallet (Dana, OVO, Gopay, ShopeePay, dan LinkAja) : " />
            <span style={{fontWeight: 500, fontSize: '1.2em'}}>Abdul Latif            : <b>089650641822</b> <CopyButton text="089650641822" /> </span> 
          </div>
        </div>
        <div>&nbsp;
        &nbsp;
        &nbsp;</div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 fh5co-heading" style={{border: '3px solid pink'}}>
            <h4>
              Jika teman-teman ingin mengirimkan kado ke Alamat di bawah ini:
            </h4>
          <p>Kp. Lio RT/RW 002/001 (Belakang Perum Lio) No. 113, Kel. Cireunghas, Kec. Cireunghas, Kab. Sukabumi, Jawa Barat, 43193 
          <CopyButton text="Kp. Lio RT/RW 002/001 (Belakang Perum Lio) No. 113, Kel. Cireunghas, Kec. Cireunghas, Kab. Sukabumi, Jawa Barat, 43193" />  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftSection;
