import React from 'react';
// import {useNavigate} from 'react-router-dom';
import './OrangeBtn.scss';

type btnTypes = {
  txt: string;
  clickEvent: () => void;
};

function WriteBtn({txt, clickEvent}: btnTypes) {
  //   const navigate = useNavigate();
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
