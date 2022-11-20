import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../../api/api';
import '../../screens/mission/index.scss';

interface mission {
  id: number;
  title: string;
  content: string;
  type: string;
  img: string;
}

function MissionList() {
  const navigate = useNavigate();
  const [list, setList] = useState<mission[]>([]);
  const fetchMissions = async () => {
    try {
      const res = await api.mission.readAll();
      setList(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  return (
    <div id="mission_items">
      <ul className="list_table">
        <li className="fs-16 preMid list_table_top">
          <ul className="flex">
            <li>No.</li>
            <li>내용</li>
            <li>유형</li>
          </ul>
        </li>
        {list &&
          list.map((item, i) => (
            <li key={item.id}>
              <ul className="flex">
                <li className="flex align-center justify-center preReg fs-14">
                  {i + 1}
                </li>

                <li className="flex align-center justify-center list_table_items_subject">
                  <button
                    type="button"
                    className="preReg fs-14"
                    onClick={() =>
                      navigate(`/mission/detail/${item.id}`, {
                        state: {id: item.id},
                      })
                    }>
                    {item.title}
                  </button>
                </li>
                <li className="flex align-center justify-center preReg fs-14">
                  {item.type}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MissionList;
