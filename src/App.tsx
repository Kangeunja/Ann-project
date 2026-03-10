import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface Post {
  id: number;
  title: string;
  content: string;
}
function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      // 'posts' 테이블에서 모든 데이터를 가져옵니다.
      const { data, error } = await supabase.from("posts").select("*");

      if (error) {
        console.error("데이터를 가져오는데 실패했어요:", error.message);
      } else {
        console.log("연결 성공! 가져온 데이터:", data);
        setPosts(data);
      }
      setLoading(false);
    }

    getPosts();
  }, []);

  return (
    <div>
      <h1>Supabase 연결 테스트 📡</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>: {post.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          연결은 성공했으나, 테이블에 데이터가 없습니다. Table Editor에서
          데이터를 추가해 보세요!
        </p>
      )}
    </div>
  );
}

export default App;
