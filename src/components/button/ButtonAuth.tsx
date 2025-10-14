import { useEffect, useState } from "react";
import GitHubSignInButton from "../ButtonSignWithGithub";
import { GoogleSignInButton } from "../ButtonSignWithGoogle";
import { signIn, useSession } from "next-auth/react";
import { useAuthStore } from "@/store/authStore";

const ButtonAuth = () => {  
    const { data: session } = useSession();  
    const [loadingSignGoogle, setLoadingSignGoogle] = useState(false);
    const [loadingSignGithub, setLoadingSignGithub] = useState(false);
    const { login, logout } = useAuthStore();

     const handleSign = async () => {
      setLoadingSignGoogle(true)
      
      const result = await signIn("google", { redirect: false })
      
      setLoadingSignGoogle(false)
      
      if (result?.error) {
        console.error(result.error)
      } else if (result?.url) {
        window.location.href = result.url
      }
    }
  
      const handleSignGithub = async () => {
      setLoadingSignGithub(true)
      
      const result = await signIn("github", { redirect: false })
      
      setLoadingSignGithub(false)
      
      if (result?.error) {
        console.error(result.error)
      } else if (result?.url) {
        window.location.href = result.url
      }
    }

    useEffect(() => {
        if (session?.user) {
        login({
            user: {
            id: session.user.id || "",
            name: session.user.name || "",
            email: session.user.email || "",
            image: session.user.image || "",
            },
        });
        } else {
        logout();
        }
    }, [session, login, logout]);

  return (
    <div className="flex justify-center gap-4 border-t pt-4">
      <GoogleSignInButton
        onClick={handleSign}
        isLoading={loadingSignGoogle}
        fullWidth
        text="Sign in with Google"
      />
      <GitHubSignInButton
        loading={loadingSignGithub}
        onClick={handleSignGithub}
      />
    </div>
  );
};

export default ButtonAuth;
