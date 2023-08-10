import { FcGoogle } from "react-icons/fc";
import { BsMeta } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

export const AuthSocialMediaPage = () => {
  const socialMediaIcons = [
    { icon: <FcGoogle />, id: "google" },
    { icon: <BsMeta />, id: "meta" },
    { icon: <AiFillApple />, id: "apple" },
  ];
  return (
    <>
      <main className="flex flex-row items-center justify-center lg:justify-start">
        <p className="mb-0 mr-4 text-lg">Sign in with</p>

        {socialMediaIcons.map(({ icon, id }) => (
          <button
            key={id}
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mx-1 h-9 w-9 rounded-full leading-normal shadow-[0_4px_9px_-4px_#3b71ca]  flex justify-center items-center"
          >
            {icon}
          </button>
        ))}
      </main>

      <article className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
          Or
        </p>
      </article>
    </>
  );
};
