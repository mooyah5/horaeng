import React from 'react';
import btnImg from '../../assets/images/btn.png';

type btnTypes = {
  txt: string;
  clickEvent: any;
};

function WriteBtn({txt, clickEvent}: btnTypes) {
  return (
    <button
      type="button"
      onClick={clickEvent}
      className="flex preMid fs-16 align-center justify-center">
      <img
        alt="btn"
        src={btnImg}
        className="write_btn_img"
        style={{position: 'absolute', zIndex: -2}}
      />
      <div>{txt}</div>
    </button>
  );
}
export default WriteBtn;
