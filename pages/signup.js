import { Navbar } from "../components/nav";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Signup() {
  const onSignup = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      if (res.ok) {
        window.location.href = "/login";
      } else {
        toast("Username already exists!", { type: "error" });
      }
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="relative py-16 before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:">
            <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Register for your account
                </h2>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">
                      Username
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
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
                      name="pwd"
                      id="pwd"
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                        focus:ring-2 focus:ring-sky-300 focus:outline-none
                                        invalid:ring-2 invalid:ring-red-400"
                    />
                  </div>

                  <button
                    onClick={onSignup}
                    className="w-full py-3 px-6 rounded-md bg-sky-600
                                    focus:bg-sky-700 active:bg-sky-500"
                  >
                    <span className="text-white">Continue</span>
                  </button>

                  <p className="border-t pt-6 text-sm">
                    Already have an account?
                    <Link href="/login">
                      <a className="text-cyan-500">Sign up</a>
                    </Link>
                  </p>
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
      <ToastContainer></ToastContainer>
    </>
  );
}
