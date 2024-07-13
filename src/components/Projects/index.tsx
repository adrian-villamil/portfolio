import rickmortyImage from '../../assets/images/rickmorty-screenshot.png';
import avocadoImage from '../../assets/images/avocado-screenshot.png';
import tesloShopImage from '../../assets/images/tesloshop-screenshop.png';
import worldRanks from '../../assets/images/worldranks-screenshot.png';
import { NextPill, ReactPill, TypeScriptPill, ReduxPill, PrismaPill, TailwindCssPill } from '../Pills';
import { ProjectCard } from '../ProjectCard';
import styles from './projects.module.css';
import { ShadcnuiPill } from '../Pills/ShadcnuiPill';

const projects: Project[] = [
  {
    id: 1,
    name: 'Teslo Shop',
    description: 'Tesla e-commerce clone where you can buy different kind of clothes for men, women and kids.',
    image: tesloShopImage,
    pills: [
      <NextPill />,
      <ReactPill />,
      <TypeScriptPill />,
      <TailwindCssPill />,
      <PrismaPill />
    ],
    codeUrl: 'https://github.com/adrian-villamil/teslo-shop',
    demoUrl: 'https://tienda-teslo-shop-av.vercel.app/'
  },
  {
    id: 2,
    name: 'Rick And Morty App',
    description: 'A wiki of rick and morty tv show, where you can know everything about all the characters, locations and episodes.',
    image: rickmortyImage,
    pills: [
      <NextPill />,
      <ReactPill />,
      <TypeScriptPill />,
      <TailwindCssPill />,
      <ShadcnuiPill />
    ],
    codeUrl: 'https://github.com/adrian-villamil/nextjs-rickmorty-app',
    demoUrl: 'https://nextjs-rickmorty-app.vercel.app/'
  },
  {
    id: 3,
    name: 'World Ranks',
    description: "World Ranks's app gamifies learning about the world's countries. Users can browse a comprehensive list, sort by various criteria, filter by region or status, and search for specific countries. Clicking a country reveals a dedicated information page. This app is perfect for travelers, geography buffs, and students alike.",
    image: worldRanks,
    pills: [
      <NextPill />,
      <ReactPill />,
      <TailwindCssPill />,
      <TypeScriptPill />
    ],
    codeUrl: 'https://github.com/adrian-villamil/countrypage-worldranks',
    demoUrl: 'https://countrypage-worldranks.vercel.app/'
  },
  {
    id: 4,
    name: 'Avocado Store',
    description: 'An e-commerce where all products are avocados with different characteristics.',
    image: avocadoImage,
    pills: [
      <NextPill />,
      <ReactPill />,
      <ReduxPill />,
      <TypeScriptPill />
    ],
    codeUrl: 'https://github.com/adrian-villamil/platzi-nextjs-basico-avocado',
    demoUrl: 'https://platzi-nextjs-basico-avocado.vercel.app/'
  },
];

export const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <h1 className='section-title'>Projects</h1>
      <section className={styles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};