import { AboutMe } from '@/components/organisms/AboutMe';
import { Experiences } from '@/components/organisms/Experiences';
import { Home } from '../components/organisms/Home';
import { ContactMe } from '@/components/organisms/ContactMe';
import { getIntro } from '../services/intro.service';
import { getAllContent } from '../services/experience.service';
import '@portfoliods/scss/src/global.scss';
import { ExperienceModel, IntroModel, LinkModel } from '@portfoliods/foundation/src/types';
import { useEffect, useState } from 'react';

export default function Index() {
  const [intro, setIntro] = useState({} as IntroModel);
  const [experiences, setExperiences] = useState({} as ExperienceModel[]);

  const getIntroFromApi = () => {
    getIntro().then((result: IntroModel) => {
      setIntro(result);
    });
  };

  const getExperiencesFromApi = () => {
    getAllContent().then((result: ExperienceModel[]) => {
      setExperiences(result);
      console.log(result);
    });
  };


  useEffect(() => {
    getIntroFromApi();
    getExperiencesFromApi();
  }, [])

  const mountExperiences = () => {
    if (experiences && experiences.length > 0) {
      return <Experiences links={homeLinks} experiences={experiences}></Experiences>
    }
  }

  const homeLinks: LinkModel[] = [{ href: "#aboutme", name: "About me" }, { href: "#experiences", name: "Experiences" }, { href: "contactme", name: "Contact me" }];

  return (
    <>
      <Home
        user={intro}
        links={homeLinks}></Home>
      <AboutMe links={homeLinks} text="teste"></AboutMe>
      {mountExperiences()}
      {/* <ContactMe></ContactMe> */}
    </>
  )
}
