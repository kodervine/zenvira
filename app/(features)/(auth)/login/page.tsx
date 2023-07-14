"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { IAuthFormInput } from "@/app/(features)/(auth)";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<IAuthFormInput>();
  const onSubmit: SubmitHandler<IAuthFormInput> = (data) => alert(data);
  return (
    <section className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <section className="max-w-md mx-auto">
            <div>
              <h3 className="text-2xl font-semibold">Welcome back</h3>
              <h1 className="text-2xl font-semibold">Zenvira</h1>
            </div>
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <p className="mb-0 mr-4 text-lg">Sign in with</p>

              {["App", "G+", "FB"].map((provider, index) => (
                <button
                  key={index}
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-purple-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 "
                >
                  {provider}
                </button>
              ))}
            </div>

            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                Or
              </p>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="relative">
                  <input
                    id="email"
                    // name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    {...register("email", { required: true, maxLength: 20 })}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    // name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    {...register("password", { pattern: /^[A-Za-z]+$/i })}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                {/* <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                  </div> */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                      Remember me
                    </label>
                  </div>

                  <a href="#!">Forgot password?</a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-[#262d4f] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-purple-900"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Login
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <Link
                      href="register"
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
