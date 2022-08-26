import { Navbar } from "../../components/nav";
import { useEffect, useState } from "react";
import Postcontent from "../../components/post";
export default function ProfileSelf() {
  let [User, setUser] = useState({ email: "", posts: [] });
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      console.log(localStorage.getItem("access_token"));
      fetch("/api/users/me", {
        headers: { Authorization: localStorage.getItem("access_token") },
      }).then((res) => {
        if (!res.ok) {
          localStorage.removeItem("access_token");
          window.location.href = "/login";
        } else {
          res.json().then((data) => {
            setUser(data);
          });
        }
      });
    } else {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-24 pb-4 bg-gray-200">
        {" "}
        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md :bg-gray-800 :border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src="https://github.com/identicons/vg08.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 :text-white">
              {User.email}
            </h5>
            <span className="text-sm text-gray-500 ">
              {User.posts.length} posts
            </span>
          </div>
        </div>
      </div>
      <section className="text-gray-700 body-font">
        <div>
          <div className="container mx-auto flex px-5 py-24 flex-col items-center">
            <div className="grid  gap-6 md:w-8/12 md:mx-auto">
              {User.posts.map((post) => (
                <Postcontent
                  title={post.title}
                  id={post.id}
                  content={post.content}
                  key={post.id}
                ></Postcontent>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
