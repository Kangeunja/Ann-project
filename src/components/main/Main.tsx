import { supabase } from "../../supabaseClient";
import "./Main.scss";
import phoneIcon from "../../assets/img/main/contact-phone.png";
import faxIcon from "../../assets/img/main/contact-fax.png";
import emailIcon from "../../assets/img/main/contact-email.png";
import { useQuery } from "@tanstack/react-query";
import { CHAPTER_DATA } from "../../data/chapter";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="main">
        <div className="main-bg-image"></div>
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
          <div className="section-top__wrap">
            <div className="section-img"></div>
            <div className="section-title__wrap">
              <div className="section-title">
                들어가기 전에 전시소개를 하자면...
              </div>
              <p>
                내 이름은 빨강머리 앤 ANNE은 출간 이래 100여년이 넘는 시간
                변함없이 전 세계적으로 뜨거운 사랑을 받고 있는 소설 ‘빨강머리
                앤'(원제 ‘Anne of Green Gables')을 현대적으로 재해석한
                전시입니다. 우리 각자의 마음 속에 추억으로 남아있는‘빨강머리
                앤’을 회화, 애니메이션,대형 설치 작품, 음악과 영상 등을 통해
                새롭게 만나볼수 있으며, 국내 핫한 일러스트 작가들이 새롭게
                재해석해 이번 전시를 통해 관람객들은 어린 시절의 친구 ‘앤’을
                다시 꺼내어보며, 긍정적이고 상상력이 풍부한 앤처럼 즐겁고
                흥미로운 일상을 만들어갈 힘을 얻을 수 있을 것입니다.
              </p>
            </div>
          </div>

          <div className="section-top__bar">
            <p>
              Isn't it wonderful that there are so many things to like in this
              world?
            </p>
            <p>이 세상엔 좋아할 것이 이렇게 많다는게 너무 근사하지 않나요?</p>
          </div>

          <div className="chapter">
            <div className="chapter-list__box">
              <div className="chapter-title">전시 순서</div>
              <ul className="chapter-list">
                {CHAPTER_DATA.map((item) => (
                  <li>{item.title}</li>
                ))}
              </ul>
            </div>

            <div className="chapter-img"></div>
          </div>

          <div className="section-program">
            <div className="section-program__title">프로그램</div>
            <div className="section-program__sub-title">
              더 자세한 내용이 궁금하다면{" "}
              <span onClick={() => navigate("/program")}>여기</span>를
              클릭해주세요.
            </div>
            <div className="section-program__con-wrap">
              {programs?.map((item, index) => (
                <div className="section-program__con">
                  <div className="section-program__img" key={index}>
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

          <div className="section-work">
            <div className="section-work__title">
              다양한 일러스트 작품모음전
            </div>
            <div className="section-work__img-wrap">
              {illustrations?.[0]?.image_urls?.map(
                (item: any, index: number) => (
                  <div className="section-work__img" key={index}>
                    <img src={item} alt="" />
                  </div>
                ),
              )}
            </div>
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

      <div className="top" onClick={scrollToTop}></div>
    </>
  );
};

export default Main;
