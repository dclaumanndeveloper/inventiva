import Layout from '@/app/layout'
import { Helmet } from 'react-helmet-async'


export default function Calendar() {
  return (
    <>
    <Helmet title="Calendário"/>
    <Layout>
        <div className="mt-10">
            <h1 className="text-center">Sua agenda</h1>
            <p>Sua agenda em forma de calendário.</p>
        </div>
      
    </Layout>
    </>
  );
}