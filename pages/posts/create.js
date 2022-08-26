import { Navbar } from "../../components/nav";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

function formSubmit(event) {
  event.preventDefault();
  console.log("here");
  title = document.getElementById("title").value;
  content = document.getElementById("content").value;

  console.log(title);
  console.log(content);
  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title: title, content: content }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      toast("Created post successfully!", {
        onClose: () => (window.location.href = "/"),
      });
      console.log(data);
    });
}
export default function CreatePost() {
  useEffect(() => {
      if (localStorage.getItem("access_token")) {
        console.log(localStorage.getItem("access_token"));
        fetch("/api/users/me", {
          headers: { Authorization: localStorage.getItem("access_token") },
        })
          .then((res) => {
            if (!res.ok){
              localStorage.removeItem("access_token");
              window.location.href = "/";
            }
          })
          .then((data) => {
            null;
          });
      } else {
        window.location.href = "/login";
      }

   
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <section className="bg-white classNamebg-gray-900 py-16">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 classNametext-white">
            Create Post
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 classNametext-gray-400 sm:text-xl">
            Make a post, whatever you want<br></br>
            Have something on mind? Let the whole world know.
          </p>
          <form id="form" className="space-y-8">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 classNametext-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 classNamebg-gray-700 classNameborder-gray-600 classNameplaceholder-gray-400 classNametext-white classNamefocus:ring-primary-500 classNamefocus:border-primary-500 classNameshadow-sm-light"
                placeholder="Title of your post"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 classNametext-gray-400"
              >
                Message
              </label>
              <textarea
                id="content"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 classNamebg-gray-700 classNameborder-gray-600 classNameplaceholder-gray-400 classNametext-white classNamefocus:ring-primary-500 classNamefocus:border-primary-500"
                placeholder="Content of your post"
              ></textarea>
            </div>
            <button
              onClick={formSubmit}
              className="py-3 mt-5 px-5 text-sm font-medium text-center text-white rounded-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 classNamebg-primary-600 classNamehover:bg-primary-700 classNamefocus:ring-primary-800"
            >
              Create
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
