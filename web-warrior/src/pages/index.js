import * as React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="relative text-white h-[85vh] lg:h-screen flex items-end">
        <img
          className="absolute object-cover w-full h-full "
          src="https://multinetcom.ch/wp-content/uploads/2020/07/banner-img-2-scaled.jpg"
          alt=""
        />
        <Container className="lg:pb-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-light">
              <p>
                BE <strong className="font-semibold">LINKED!</strong>
              </p>
            </h1>
            <h4 className=" leading-5 pb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
              MultiNet Communication, your partner for planning, realisation and
              maintenance of wired telecommunication networks.
            </h4>
          </div>
        </Container>
      </section>
      <section className="h-screen bg-black"></section>
    </Layout>
  );
}
