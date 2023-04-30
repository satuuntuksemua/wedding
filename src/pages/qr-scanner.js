import React, { useState, Fragment } from 'react';
import useGuestData from '@/hooks/useGuestData';

function CekKehadiran() {
  const [name, setName] = useState();
  const [showResult, setShowResult] = useState(false);
  const [successCopy, setSuccessCopy] = useState(false);
  const [isInvitation, setIsInvitation] = useState(false);

  const { data, loading } = useGuestData();

  const URL = 'https://latiefdole.my.id?to=${encodeURIComponent(name)}';

  const renderResult = () => {
    if (!showResult) return null;
        <div className="col-md-10 col-md-offset-1" style={{ marginTop: '28px' }}>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Keterangan</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => {
                  const offlineInvitation = isInvitation ? `&type=invitation&code=${d.code}` : '';
                  const mapURL = `https://latiefdole.my.id?to=${encodeURIComponent(d.name)}${offlineInvitation}`;
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{d.name}</td>
                      <td>{d.desc}</td>
                      <td> hadir </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
    }
  return (
    <div>
      <h2 className="title">Cek Kehadiran</h2>
      <h3 className="title__sub">Latif & Wiwil Wedding</h3>

      {loading && <h4 style={{ textAlign: 'center' }}>Memuat data..</h4>}

      {!loading && (
        <Fragment>
          <div className="row">
          <script src="https://unpkg.com/html5-qrcode"></script>
            <div className="col-md-4 col-md-offset-4">
              <div id="qr-reader" style="width: 600px"></div>
            </div>
          </div>
          <div className="row">{renderResult()}</div>
        </Fragment>
      )}
    </div>
  );
}

export default CekKehadiran;
