import { supabase } from "../../supabaseClient";
import "./Main.scss";
import phoneIcon from "../../assets/img/main/contact-phone.png";
import faxIcon from "../../assets/img/main/contact-fax.png";
import emailIcon from "../../assets/img/main/contact-email.png";
import { useQuery } from "@tanstack/react-query";

const Info = [
  {
    icon: phoneIcon,
    title: "Tel. 123-456-7890",
  },

  {
    icon: faxIcon,
    title: "Fax. 123-456-7890",
  },

  {
    icon: emailIcon,
    title: "Email: info@my-domain.com",
  },
];

const Main = () => {
  const { data: mainImages } = useQuery({
    // 메인 데이터 가져오기
    queryKey: ["mainImages"],
    queryFn: async () => {
      const { data } = await supabase.from("main_content").select("image_urls");
      return data;
    },
  });

  // 프로그램 데이터 가져오기
  const { data: programs } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const { data } = await supabase.from("program_content").select("*");
      return data;
    },
  });

  // 일러스트 데이터 가져오기
  const { data: illustrations } = useQuery({
    queryKey: ["illustration"],
    queryFn: async () => {
      const { data } = await supabase
        .from("illustration_content")
        .select("image_urls");
      return data;
    },
  });

  return (
    <>
      <div className="main">
        <div className="main-wrap">
          <div className="main-title">
            My Name Is Anne, <br />
            With an E
          </div>
          <div className="main-sub__title">
            앤의 전시회에 오신걸 환영합니다!
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="section-title">Chapter1 전시소개</div>
          <div className="section-con__wrap">
            <div className="section-img"></div>
            <div className="section-info">
              내 이름은 빨강머리 앤 ANNE은 출간 이래 100여년이 넘는 시간
              변함없이 전 세계적으로 뜨거운 사랑을 받고 있는 소설 ‘빨강머리
              앤'(원제 ‘Anne of Green Gables')을현대적으로 재해석한 전시입니다.
              우리 각자의 마음 속에 추억으로 남아있는‘빨강머리 앤’을 회화,
              애니메이션,대형 설치 작품, 음악과 영상 등을 통해 새롭게 만나볼수
              있으며, 국내 핫한 일러스트 작가들이 새롭게 재해석해 이번 전시를
              통해 관람객들은 어린 시절의 친구 ‘앤’을 다시 꺼내어보며,
              긍정적이고 상상력이 풍부한 앤처럼 즐겁고 흥미로운 일상을 만들어갈
              힘을 얻을수 있을 것입니다.
            </div>
          </div>
        </div>
      </div>

      <div className="section-bottom">
        <div className="icon top"></div>
        <p>이 세상엔 좋아할 것이 이렇게 많다는게 너무 근사하지 않나요?</p>
        <div className="icon bottom"></div>
      </div>

      <div className="section-exhibition">
        <div className="section-exhibition__container">
          <div className="section-exhibition__title">전시회 미리보기</div>
          <div className="section-exhibition__img-wrap">
            {mainImages?.[0]?.image_urls?.map((item: any, index: number) => (
              <div className="section-exhibition__img" key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-program">
        <div className="section-program__container">
          <div className="section-program__title">Chapter2 프로그램</div>
          <div className="section-program__box-wrap">
            {programs?.map((item, index) => (
              <div className="section-program__box" key={index}>
                <div className="section-program__img">
                  <img src={item.image_urls} alt="" />
                </div>

                <div className="section-program__info">
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-program__bottom">
        <p>
          그대는 아름다운 별아래 태어나 영혼과 불꽃, 이슬로 만들어졌도다
          <br /> -로버트 브라우닝-
        </p>
      </div>

      <div className="section-work">
        <div className="section-work__container">
          <div className="section-work__title">다양한 일러스트 작품모음전</div>
          <div className="section-work__img-wrap">
            {illustrations?.[0]?.image_urls?.map((item: any, index: number) => (
              <div className="section-work__img" key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>

          <div className="contact">
            <div className="contact-title">CONTACT</div>
            <div className="contact-title__sub">
              미디어 관련 문의 사항은 에이전트에게 문의하세요!
            </div>
            <div className="contact-info__wrap">
              {Info.map((item, index) => (
                <div className="contact-info" key={index}>
                  <div className="contact-img">
                    <img src={item.icon} alt="" />
                  </div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
