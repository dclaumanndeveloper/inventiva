import { Helmet } from "react-helmet-async";
import Layout from "../../../app/layout";


export default function Home() {
  return (
    <>
    <Helmet title="Dashboard"/>
       <Layout>
        <div className="mt-10">
            <h1 className="items-start">Bem-vindo à minha página inicial!</h1>
            <p>O primeiro sistema do gênero.</p>
        </div>
      
    </Layout>
    </>
  );
}