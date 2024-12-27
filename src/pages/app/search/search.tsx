import Layout from '@/app/layout'
import { Helmet } from 'react-helmet-async';


export default function Search() {
  return (
    <>
    <Helmet title="Pesquisar"/>
    <Layout>
        <div className="mt-10">
            <h1 className="text-center">Pesquise sobre seus registros</h1>
            <p>Listagens dos seus registros no sistema.</p>
        </div>
      
    </Layout>
    </>
  );
}