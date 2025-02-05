import type { NextPage } from 'next';
import {Content, Footer, Header} from "@/app/sections";

const Home: NextPage = () => {
  return (
      <div className="min-h-screen flex flex-col items-center p-6">
          <Header />
          <Content />
          <Footer />
      </div>
  );
};

export default Home;
