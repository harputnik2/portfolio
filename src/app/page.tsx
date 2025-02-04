import Head from 'next/head';
import type { NextPage } from 'next';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  { title: 'The Swarm App', description: 'Connections Network Management SaaS', link: 'https://app.theswarm.com' },
  { title: 'Mattermotion', description: 'Company Portfolio built on top of headless cms', link: 'https://mattermotion.com/robocza/' },
  { title: 'Bike Studio' , description: 'Tool for bike customization - 5 sprites, endless combinations', link: 'http://smialy.bdl.pl/bike-studio/'},
  { title: 'Bee Tale' , description: 'JS animation created in Adobe Edge', link: 'http://smialy.bdl.pl/bee/'},
    { title: 'Peace Health Rides' , description: 'One of many Bike Network landing pages. Operating in Eugene, Oregon', link: 'https://www.peacehealthrides.com/'},
];

const Home: NextPage = () => {
  return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center p-6">
        <Head>
          <title>Karolina Różańska - React Developer</title>
          <meta name="description" content="Portfolio - a tiny next.js project" />
        </Head>

        <header className="text-center">
          <img src='http://smialy.bdl.pl/imgs/1.jpg' alt='Karolina Różańska' className='size-24 rounded-full inline mb-4' />
          <h1 className="text-4xl font-bold">Karolina Różańska</h1>
          <p>Experienced in React.</p>
          <p>Well oriented in UX, composition, and RWD.</p>
          <p>Builds apps on top of the APIs.</p>
        </header>

        <section className="mt-6">
          <a
              href="http://smialy.bdl.pl/cv"
              className="px-6 py-3 bg-[#B85D7E] text-white font-semibold rounded-lg shadow-md hover:bg-[#c67d98]"
              target="_blank"
              rel="noopener noreferrer"
          >
            View My CV
          </a>
        </section>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {projects.map((project, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                    href={project.link}
                    className="text-blue-500 hover:underline mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
          ))}
        </section>

        <footer className="mt-10 text-gray-500 text-sm">
          <p>Connect with me: <a href="https://github.com/yourgithub" className="text-blue-500">GitHub</a> | <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-500">LinkedIn</a></p>
        </footer>
      </div>
  );
};

export default Home;
