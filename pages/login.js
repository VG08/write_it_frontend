import { Navbar } from "../components/nav";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
function formSubmit(event) {
  event.preventDefault();
  console.log("here");
  const form = document.getElementById("form");
  const formData = new FormData(form);
  fetch("/api/token", { method: "POST", body: formData })
    .then((res) => res.json())
    .then((data) => {
      if (data.access_token) {
        
        console.log(data);
        localStorage.setItem("access_token", `Bearer ${data.access_token}`);
        toast("Logged in successfully!", {onClose: () => window.location.href = "/"});
    
      }
    });
}
export default function Login() {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative py-16 before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:">
            <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Sign in to your account
                </h2>
                <form
                  id="form"
                  onSubmit={(event) => formSubmit(event)}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="pwd" className="text-gray-700">
                        Password
                      </label>
                      <button className="p-2 -mr-2" type="reset"></button>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                        focus:ring-2 focus:ring-sky-300 focus:outline-none
                                        invalid:ring-2 invalid:ring-red-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-md bg-sky-600
                                    focus:bg-sky-700 active:bg-sky-500"
                  >
                    <span className="text-white">Continue</span>
                  </button>

                  <p className="border-t pt-6 text-sm">
                    Don't have an account?
                    <Link href="/signup">
                      <a className="text-cyan-500">Sign up</a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="text-center space-x-4">
              <span>&copy; WriteIT</span>
              <a href="#" className="text-sm hover:text-sky-900">
                Contact
              </a>
              <a href="#" className="text-sm hover:text-sky-900">
                Privacy & Terms
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <ToastContainer />
    </>
  );
}
