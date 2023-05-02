import React from 'react';
import { styBoxWrapper } from './styles';

function SectionBox({ icon, text, kopi }) {
  return (
    <div className="col-md-4" css={styBoxWrapper}>
      <div className="img-section">
        <img src={icon} alt="icon" className="img" />
      </div>
      <div className="text__section">
        <span className="text__info">{text}</span>
        <button className="btn btn-outline-secondary btn-copy" data-clipboard-text={kopi}>
              <i className="fa fa-fw fa-copy"></i> Copy
        </button>
      </div>
    </div>
  );
}

export default SectionBox;
