"use client";
import { useForm } from "react-hook-form";
import { CustomInputField } from "@/app/_components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import AuthSocialMediaPage from "@/app/(features)/(auth)/authSocialMedia/page";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const RegisterPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const router = useRouter();

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title:
        "Sign up successful. Please check your email to confirm your account",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    router.push("/goalsetting");
  };

  return (
    <section className="min-h-screen  py-6 flex flex-col justify-center sm:py-12 ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <section className="max-w-md mx-auto">
            <article>
              <h1 className="text-2xl font-semibold">
                Sign in for the best of zenvira
              </h1>
            </article>
            <AuthSocialMediaPage />
            <div className="divide-y divide-gray-200">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <CustomInputField
                    label="Email"
                    placeholder="Your active email address"
                    name="email"
                    control={form.control}
                    className="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                  />
                  <CustomInputField
                    label="Password"
                    placeholder="Your password"
                    name="password"
                    control={form.control}
                    className=" w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                  />
                  <div className="mb-6 flex items-center justify-between">
                    <a href="#!">Forgot password?</a>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-[#262d4f] px-7 pb-2.5 pt-3 text-sm font-medium  text-white  transition duration-150 ease-in-out hover:bg-gray-900"
                    >
                      Register
                    </button>

                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                      Already have an account?
                      <Link href="login">Log in instead</Link>
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
