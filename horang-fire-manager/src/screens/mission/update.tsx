import React, {useState, useEffect, ChangeEvent} from 'react';
import './update.scss';
import {useLocation, useNavigate} from 'react-router-dom';
import api from '../../api/api';

function MissionUpdate() {
  const location = useLocation();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    img: '',
  });

  const {title, content} = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onChangeImage = (e?: any) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setInputs({
      ...inputs,
      img: fileUrl,
    });
    console.log(inputs);
  };

  const readDetail = async (id: number) => {
    try {
      const res = await api.mission.read(id);
      setInputs({
        ...inputs,
        title: res.data.title,
        content: res.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    readDetail(location.state.id);
    console.log(inputs);
  }, []);

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const HandleSubmit = async () => {
    try {
      await api.mission.update(inputs, location.state.id);
      navigate(`/mission`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div id="mission_update">
      <div className="create-body">
        <div className="container">
          <div className="input-box">
            <div className="title-box">
              <div className="title-box-text">
                <p className="title">공통미션 수정</p>
              </div>
              <div className="title-box-submit">
                <button
                  type="button"
                  className="login-btn flex align-center justify-center preMid fs-16"
                  onClick={HandleSubmit}>
                  작성 완료
                </button>
              </div>
            </div>
          </div>
          <div className="input-box">
            <p className="input-text">제목</p>
            <input
              name="title"
              className="input-title"
              type="text"
              placeholder="공통미션 제목을 입력해주세요."
              onChange={onChange}
              value={inputs.title}
            />
          </div>
          <div className="input-box">
            <p className="input-text">미션사항</p>
            <textarea
              name="content"
              className="input-content"
              placeholder="공통미션의 규칙, 내용 등을 입력해주세요."
              rows={5}
              cols={5}
              onChange={onChange}
              value={inputs.content}
            />
          </div>
          <div className="input-box">
            <p className="input-text">미션 이미지 예시</p>
            <div className="imageFileBox">
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={onChangeImage}
              />
              {inputs.img && (
                <div>
                  <img className="image_preview" src={inputs.img} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionUpdate;
