import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Postcontent from "../../components/postexpanded";
import { Navbar } from "../../components/nav";
export default function Post() {
  const router = useRouter();

  let [Post, setPost] = useState({
    title: "",
    content: "",
    owner_id: "",
  });
  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    console.log(id);
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.owner_id
        setPost(data)});
  }, [router.isReady]);
  return (
    <>
      <Navbar></Navbar>
      <div className="relative py-28 before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:">
            <Postcontent
              title={Post.title}
              author={Post.owner_id}
              content={Post.content}
            ></Postcontent>
          </div>
        </div>
      </div>
      
    </>
  );
}
