import "./Information.scss";

const Information = () => {
  const data = [
    {
      name: "작가",
      info: "마담롤리나 외 9명",
    },
    {
      name: "장소",
      info: "서울숲 갤러리아포레 서울숲 갤러리아포레 B1",
    },
    {
      name: "기간",
      info: "2019-06-28 ~ 2019-10-31",
    },
    {
      name: "시간",
      info: "10:00 ~ 19:00",
    },
    {
      name: "관람료",
      info: "15,000원",
    },
    {
      name: "주최",
      info: "(주) 미디어앤아트",
    },
    {
      name: "주관",
      info: "(주) 미디어앤아트",
    },
  ];

  return (
    <div className="information">
      <div className="information-img"></div>
      <div className="information-container">
        <div className="information-title">
          자세한 전시 정보 및 관람 안내는 인터파크 티켓 홈페이지에서 확인하시기
          바랍니다.
        </div>

        {data.map((item, idx) => (
          <div key={idx} className="information-info">
            <p>{item.name}</p>
            <p>{item.info}</p>
          </div>
        ))}

        <div className="information-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.404172314045!2d127.04156669311524!3d37.54554037545988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca49dac3280a3%3A0x35e3f0ccd62166f7!2z6rCk65-s66as7JWE7Y-s66CI!5e0!3m2!1sko!2skr!4v1774252689889!5m2!1sko!2skr"
            width="990"
            height="390"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="map-info">
            <p>서울숲 갤러리아포레</p>
            <p>서울특별시 성동구 서울숲2길 32-14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
