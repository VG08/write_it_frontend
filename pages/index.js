import Head from "next/head";
import { useEffect, useState } from "react";
import { Navbar } from "../components/nav";
import Postcontent from "../components/post";
export default function Home() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      
      <div className="relative py-24 bg-white">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12">
          <div className="grid  gap-6 md:w-8/12 md:mx-auto">
            {posts.map((post) => (
              <Postcontent title={post.title} author={post.owner_id}id={post.id} content={post.content} key={post.id}></Postcontent>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
