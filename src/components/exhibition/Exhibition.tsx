import { useState } from "react";
import "./Exhibition.scss";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabaseClient";

// const exhibition_tabs = [
//   {
//     id: "preview",
//     label: "전시 미리보기",
//   },

//   {
//     id: "zons",
//     label: "존 구성",
//   },
// ];

const Exhibition = () => {
  const [activeTab, setActiveTab] = useState("preview");

  // 전시 미리보기 데이터 가져오기
  const { data: previewImages } = useQuery({
    queryKey: ["previewImages"],
    queryFn: async () => {
      const { data } = await supabase
        .from("preview_content")
        .select("image_urls");
      return data;
    },
  });

  // 존 구성 데이터 가져오기
  const { data: zoneImages } = useQuery({
    queryKey: ["zoneImages"],
    queryFn: async () => {
      const { data } = await supabase.from("zone_content").select("*");
      // console.log(data);
      return data;
    },
  });

  // 챕터 데이터 가져오기
  const { data: chapterImages } = useQuery({
    queryKey: ["chapterImages"],
    queryFn: async () => {
      const { data } = await supabase
        .from("chapter_content")
        .select("*")
        .order("id", { ascending: true });
      console.log(data);
      return data;
    },
  });

  const getChapterType = (title: string) => {
    if (
      [
        "1. 불쌍한 고아소녀",
        "3. 낭만적인 자연 속에서",
        "6. 에이번리의 다정한 이웃들",
        "9. 사랑하는 가족, 매튜와 마릴라",
      ].includes(title)
    )
      return "DESC_INFO";

    if (["내 이름은 빨강머리 앤", "10. 길 모퉁이"].includes(title))
      return "GRID_INSERT";

    if (title.includes("2. 공상가의 방")) return "GRID_FULL_ROW";

    if (
      [
        "4. 영원한 친구, 다이애나",
        "5. 빨강머리",
        "6. 에이번리의 다정한 이웃들",
        "7. 말할 수 없는 친구, 길버트",
      ].includes(title)
    )
      return "GRID_COLUMN";

    return "BASIC";
  };

  return (
    <div className="exhibition">
      <div className="exhibition-container">
        <div className="exhibition-title">
          각 Chapter 별로 주제와 함께 전시회를 소개합니다
        </div>
        {chapterImages?.map((item, index) => {
          const type = getChapterType(item.title);

          return (
            <div key={index} className="exhibition-top__wrap">
              <div className="exhibition-top">
                <div className="exhibition-top__box">{item.type}</div>
                <div className="exhibition-top__title">{item.title}</div>
              </div>

              <div className="exhibition-img__wrap">
                <img src={item.image_urls} alt="" />

                <div className="exhibition-desc">
                  <p>{item.description}</p>
                  {(type === "DESC_INFO" || type === "GRID_COLUMN") && (
                    <p>{item.info}</p>
                  )}
                </div>
              </div>

              {type === "GRID_INSERT" && (
                <div className="exhibition-prologue__wrap">
                  {item.image_detail.map((url: string, idx: number) => (
                    <img src={url} alt="" key={idx} />
                  ))}
                  <div className="exhibition-prologue__info">{item.info}</div>
                </div>
              )}

              {type === "GRID_FULL_ROW" && (
                <div className="exhibition-chapter2__wrap">
                  {item.image_detail.map((url: string, idx: number) => (
                    <img src={url} alt="" key={idx} />
                  ))}
                  <div className="exhibition-chapter2__info">{item.info}</div>
                </div>
              )}

              {type === "DESC_INFO" && (
                <div className="exhibition-chapters__wrap">
                  {item.image_detail.map((url: string, idx: number) => (
                    <img src={url} alt="" key={idx} />
                  ))}
                </div>
              )}

              {item.title === "4. 영원한 친구, 다이애나" && (
                <div className="exhibition-chapter4__wrap">
                  {item.image_detail.map((url: string, idx: number) => (
                    <div className="img-item" key={idx}>
                      <img src={url} alt="" />
                    </div>
                  ))}
                </div>
              )}

              {item.title === "5. 빨강머리" && (
                <div className="exhibition-chapter5__wrap">
                  {item.image_detail.map((url: string, idx: number) => (
                    <div className="img-item" key={idx}>
                      <img src={url} alt="" />
                    </div>
                  ))}
                </div>
              )}

              {item.title === "8. 주체적 여성" && (
                <div className="exhibition-chapter6__wrap">
                  {item.image_detail.map((url: string, idx: number) => (
                    <div className="img-item" key={idx}>
                      <img src={url} alt="" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* <div className="tab-content">
          {activeTab === "preview" && (
            <div className="preview-content__img-wrap">
              {previewImages?.[0]?.image_urls.map(
                (item: any, index: number) => (
                  <div className="preview-content__img" key={index}>
                    <img src={item} alt="" />
                  </div>
                ),
              )}
            </div>
          )}

          {activeTab === "zons" && (
            <div className="zone-content__img-wrap">
              {zoneImages?.map((item: any, index: number) => (
                <div className="zone-content__box">
                  <div className="zone-content__title" key={index}>
                    {item.title}
                  </div>
                  <div className="zone-content__img">
                    <img src={item.image_urls} alt="" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Exhibition;
