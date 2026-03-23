import { useEffect, useState } from "react";
import "./TheWorks.scss";
import { supabase } from "../../supabaseClient";

interface Artist {
  id: string;
  name: string;
}

interface Work {
  id: number;
  artist_id: number;
  title: string;
  image_url: string;
  artists?: {
    name: string;
  };
}

const TheWorks = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [works, setWorks] = useState<Work[]>([]);
  const [activeTab, setActiveTab] = useState<string>("전체");

  const displayWorks =
    activeTab === "전체"
      ? works
      : works.filter((work) => work.artists?.name === activeTab);

  useEffect(() => {
    const fetchData = async () => {
      const { data: artistData } = await supabase
        .from("artists")
        .select("id, name");
      if (artistData) {
        // console.log(artistData);
        setArtists([{ id: "all", name: "전체" }, ...artistData]);
      }

      const { data: worksData } = await supabase.from("artist_content").select(`
    *,
    artists (
      name
    )
  `);
      if (worksData) {
        console.log(worksData);
        setWorks(worksData);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="theworks">
      <div className="theworks-container">
        <div className="theworks-title">
          현대적인 감각으로 빨강머리앤을 재해석한 작가님들의 Artwork을
          소개합니다.
        </div>

        <ul className="tab-menu">
          {artists.map((item, idx) => (
            <li
              className={item.name === activeTab ? "active" : ""}
              key={idx}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="works-list">
          {displayWorks.map((item, idx) => (
            <div key={idx}>
              <div className="">
                <img src={item.image_url} alt={item.title} />
              </div>
              <div className="works-title">{item.title}</div>
              <div className="works-artist">{item.artists?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheWorks;
