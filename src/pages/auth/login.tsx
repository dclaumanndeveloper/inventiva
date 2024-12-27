import { LoginForm } from "@/components/login-form";
import { Helmet } from "react-helmet-async";

export function LoginPage (){
    return (
        <>      
        <Helmet title="Login" />
        <LoginForm/>
        </>
  
    )
}