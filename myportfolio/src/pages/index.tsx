import ReactPageScroller from 'react-page-scroller';
import { AboutMe } from '@/components/organisms/AboutMe';
import { Experiences } from '@/components/organisms/Experiences';
import { Home } from '../components/organisms/Home';
import { ContactMe } from '@/components/organisms/ContactMe';
import { getIntro } from '../services/intro.service';
import { getAllContent } from '../services/experience.service';
import '@portfoliods/scss/src/global.scss';
import { AboutMeModel, ContactMeModel, ExperienceModel, IntroModel, LinkModel } from '@portfoliods/foundation/src/types';
import { useEffect, useState } from 'react';
import { getAboutMe } from '@/services/aboutme.service';
import { getContactMe } from '@/services/contactme.service';
import { Breakpoints } from '@portfoliods/foundation/src';

export default function Index() {
  const [blockScroll, setBlockScroll] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [intro, setIntro] = useState({} as IntroModel);
  const [experiences, setExperiences] = useState({} as ExperienceModel[]);
  const [aboutMe, setAboutMe] = useState({} as AboutMeModel);
  const [contactMe, setContactMe] = useState({} as ContactMeModel);

  const getIntroFromApi = () => {
    getIntro().then((result: IntroModel) => {
      setIntro(result);
    });
  };

  const getExperiencesFromApi = () => {
    getAllContent().then((result: ExperienceModel[]) => {
      setExperiences(result);
    });
  };

  const getAboutMeFromApi = () => {
    getAboutMe().then((result: AboutMeModel) => {
      setAboutMe(result);
    });
  };

  const getContactMeFromApi = () => {
    getContactMe().then((result: ContactMeModel) => {
      setContactMe(result);
    });
  };

  const goToNextPage = () => {
    console.log(pageNumber);
    setPageNumber(pageNumber + 1);
  }

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1);
  }

  const blockScrollPageOnText = (block: boolean) => {
    setBlockScroll(block);
  }


  useEffect(() => {
    console.log("refresh api");

    getIntroFromApi();
    getExperiencesFromApi();
    getAboutMeFromApi();
    getContactMeFromApi();
  }, [])

  const mountExperiences = () => {
    if (experiences && experiences.length > 0) {
      return <Experiences
        blockScrollFunc={blockScrollPageOnText}
        experiences={experiences}
        nextPageFunc={goToNextPage}
        prevPageFunc={goToPrevPage}
      ></Experiences>
    }
  }

  const blockScrollOnPageExperiencesMobile = () => {
    if (window.innerWidth < Breakpoints.phone)//experiences
    {
      setBlockScroll(true);
    }
  }

  return (
    <>
      <ReactPageScroller
        customPageNumber={pageNumber}
        pageOnChange={(pageNumber) => {
          setPageNumber(pageNumber);
          blockScrollOnPageExperiencesMobile();
        }}
        blockScrollDown={blockScroll}
        blockScrollUp={blockScroll}
        animationTimer={700}
      >
        <Home
          user={intro}
          nextPageFunc={goToNextPage}
        ></Home>
        <AboutMe
          text={aboutMe.text}
          imageUrl={aboutMe.imageUrl}
          nextPageFunc={goToNextPage}
          prevPageFunc={goToPrevPage}
        ></AboutMe>
        {mountExperiences()}
        <ContactMe
          contacts={contactMe.contacts}
          prevPageFunc={goToPrevPage}
          thanksMessage={contactMe.message1}
          visitMessage={contactMe.message2}
        ></ContactMe>
      </ReactPageScroller>
    </>
  )
}
