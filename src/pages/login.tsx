import { signIn } from "next-auth/react";
import Image from "next/image";
import Layout from "../components/Layout";

const Login = () => {
    const handleLoginWithFacebook = () => {
      signIn("facebook", { callbackUrl: '/' });
    }

    const handleLoginWithGoogle = () => {
        signIn('google', { callbackUrl: '/' })
    }

    const handleLoginWithGithub = () => {
        signIn("github", { callbackUrl: '/' });
    }

    return(
      <Layout>
          <div className="p-5">
            <h1 className="text-3xl font-semibold text-white mb-6 flex items-center gap-2 before:inline-block before:w-6 before:h-1 before:bg-blue-500">Faça seu login com : </h1>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={handleLoginWithFacebook}
                className="duration-200 border border-zinc-900 text-white w-full py-2.5 rounded text-sm font-normal flex justify-center items-center gap-2 transition-transform hover:translate-y-1"
              >
                <Image src='/facebook-logo.svg' alt="Logo from facebook" height={18} width={18}/>
                Facebook
              </button>
              <button
                type="button"
                onClick={handleLoginWithGoogle}
                className="duration-200 border border-zinc-900 text-white w-full py-2.5 rounded text-sm font-normal flex justify-center items-center gap-2 transition-transform hover:translate-y-1"
              >
                <Image src='/google-logo.svg' alt="Logo from google" height={18} width={18}/>
                Google
              </button>
              <button
                type="button"
                onClick={handleLoginWithGithub}
                className="duration-200 border border-zinc-900 text-white w-full py-2.5 rounded text-sm font-normal flex justify-center items-center gap-2 transition-transform hover:translate-y-1"
              >
                <Image src='/github-logo.svg' alt="Logo from github" height={18} width={18}/>
                Github
              </button>
            </div>
          </div>
      </Layout>
    )
}



export default Login;