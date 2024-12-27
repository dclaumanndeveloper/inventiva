import Layout from '@/app/layout'
import { Helmet } from 'react-helmet-async';


export default function Settings() {
  return (
    <>
    <Helmet title="Configurações"/>
    <Layout>
        <div className="mt-10">
            <h1 className="text-center">Suas configurações</h1>
            <p>Suas definições de uso.</p>
        </div>
      
    </Layout>
    </>
  );
}