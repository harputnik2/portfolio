import type { NextPage } from 'next';
import {Content, Footer, Header} from "@/app/sections";

const Home: NextPage = () => {
  return (
      <div className="min-h-screen flex flex-col items-center p-2 sm:p-4 md:p-6">
          <div className='px-2 sm:px-4 md:px-8 lg:px-16 py-8 lg:pt-16 flex flex-col items-center gap-8 xl:flex-row-reverse xl:justify-between xl:w-[1300px] max-w-full'>
              <Header />
              <Content />
          </div>
          <Footer />
      </div>
  );
};

export default Home;
