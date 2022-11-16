import React from 'react';
import './OrangeBtn.scss';

type btnTypes = {
  txt: string;
  clickEvent: () => void;
};

function WriteBtn({txt, clickEvent}: btnTypes) {
  return (
    <button
      type="button"
      className="title-box-submit-btndiv-btn"
      onClick={clickEvent}>
      {txt}
    </button>
  );
}
export default WriteBtn;
