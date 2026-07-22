import { Fragment } from 'react';
import Head from 'next/head';
import Hero from 'components/Hero';
import Services from 'components/Services';
import Facts from 'components/Facts';
import PageProgress from 'components/PageProgress';

const Home = () => (
  <Fragment>
    <PageProgress />
    <Head>
      <title>Medical Clinic</title>
      <meta
        name="description"
        content="Next.js Medical Template for Clinics & Healthcare Professionals – Built with Bootstrap"
      />
    </Head>

    <main className="content-wrapper overflow-hidden">
      <Hero />
      <section className="wrapper">
        <div className="container py-10 py-md-12">
          <Services />
        </div>
      </section>
      <section className="wrapper facts">
        <div className="container py-12 py-md-14 justify-content-center">
          <Facts />
        </div>
      </section>
    </main>
  </Fragment>
);

export default Home;
