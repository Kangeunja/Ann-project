import { useQuery } from "@tanstack/react-query";
import "./Program.scss";
import { supabase } from "../../supabaseClient";

const Program = () => {
  const { data: programDetailImages } = useQuery({
    queryKey: ["program_detail_content"],
    queryFn: async () => {
      const { data } = await supabase
        .from("program_detail_content")
        .select("*");
      console.log(data);
      return data;
    },
  });

  return (
    <div className="program">
      <div className="program-container">
        <div className="program-title">Program</div>

        {programDetailImages?.map((item, index) => (
          <div className="program-box" key={index}>
            <div className="program-img">
              <img src={item.image_urls} alt="" />
            </div>
            <div className="program-info">
              <div className="program-info__title">{item.title}</div>
              <div className="program-info__description">
                {item.description}
              </div>
              <button className="program-info__btn">
                {`${item.type} 자세히보기`}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
