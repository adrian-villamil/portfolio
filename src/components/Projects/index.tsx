import rickmortyImage from '../../assets/images/rickmorty-screenshot.png';
import avocadoImage from '../../assets/images/avocado-screenshot.png';
import todoappImage from '../../assets/images/todoapp-screenshot.png';
import tesloShopImage from '../../assets/images/tesloshop-screenshop.png';
import { NextPill, ReactPill, TypeScriptPill, ReduxPill, MuiPill, PrismaPill, TailwindCssPill } from '../Pills';
import { ProjectCard } from '../ProjectCard';
import styles from './projects.module.css';

const projects: Project[] = [
  {
    id: 2,
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
    id: 1,
    name: 'Rick And Morty App',
    description: 'A wiki of rick and morty tv show, where you can know everything about all the characters, locations and episodes.',
    image: rickmortyImage,
    pills: [
      <NextPill />,
      <ReactPill />,
      <TypeScriptPill />
    ],
    codeUrl: 'https://github.com/adrian-villamil/nextjs-rickmorty-app',
    demoUrl: 'https://nextjs-rickmorty-app.vercel.app/'
  },
  {
    id: 2,
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
  {
    id: 3,
    name: 'To Do App',
    description: 'A to do app where you can create task, complete them or delete them.',
    image: todoappImage,
    pills: [
      <ReactPill />,
      <MuiPill />,
      <TypeScriptPill />
    ],
    codeUrl: 'https://github.com/adrian-villamil/todoapp',
    demoUrl: 'https://todoapp-mocha.vercel.app/'
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