import ReactPageScroller from 'react-page-scroller';
import { AboutMe } from '@/components/organisms/AboutMe';
import { Experiences } from '@/components/organisms/Experiences';
import { Home } from '../components/organisms/Home';
import { ContactMe } from '@/components/organisms/ContactMe';
import { getIntro } from '../services/intro.service';
import { getAllContent } from '../services/experience.service';
import { AboutMeModel, ContactMeModel, ExperienceModel, IntroModel, LinkModel, UserModel } from '@portfoliods/foundation/src/types';
import { useEffect, useRef, useState } from 'react';
import { getAboutMe } from '@/services/aboutme.service';
import { getContactMe } from '@/services/contactme.service';
import { Breakpoints, Constants } from '@portfoliods/foundation/src';
import { Background, Header } from '@portfoliods/react';
import '@portfoliods/scss/src/global.scss';
import i18n from '@/i18n';

export default function Index() {
  const [blockScroll, setBlockScroll] = useState<boolean>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [language, setLanguage] = useState<string>();
  const [intro, setIntro] = useState<IntroModel>();
  const [experiences, setExperiences] = useState<ExperienceModel[]>();
  const [aboutMe, setAboutMe] = useState<AboutMeModel>();
  const [contactMe, setContactMe] = useState<ContactMeModel>();
  const headerRef = useRef<any>();

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


  const initLanguageI18n = () => {
    const languageStorage = localStorage.getItem(Constants.LanguageKey);
    const lang = languageStorage ? languageStorage.split("-")[0] : "en"
    i18n.changeLanguage(lang);
  }

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

  useEffect(() => {
    initLanguageI18n();
    getIntroFromApi();
    getExperiencesFromApi();
    getAboutMeFromApi();
    getContactMeFromApi();
  }, [language])


  return (

    <>
      <Background></Background>
      <Header
        changeLanguageFunc={() => {
          initLanguageI18n();
          window.location.reload();
        }}
        ref={headerRef}></Header>
      <ReactPageScroller
        customPageNumber={pageNumber}
        pageOnChange={(nextPage) => {
          headerRef.current?.hideOrShowHeader(pageNumber === 0);
          blockScrollOnPageExperiencesMobile();
          setPageNumber(nextPage);
        }}
        renderAllPagesOnFirstRender={true}
        blockScrollDown={blockScroll}
        blockScrollUp={blockScroll}
        animationTimer={700}
      >
        <Home
          user={intro ?? {} as IntroModel}
          nextPageFunc={goToNextPage}
        ></Home>
        <AboutMe
          text={aboutMe?.text}
          imageUrl={aboutMe?.imageUrl ?? ""}
          nextPageFunc={goToNextPage}
          prevPageFunc={goToPrevPage}
        ></AboutMe>
        {mountExperiences()}
        <ContactMe
          contacts={contactMe?.contacts ?? []}
          prevPageFunc={goToPrevPage}
          thanksMessage={contactMe?.message1 ?? ""}
          visitMessage={contactMe?.message2 ?? ""}
        ></ContactMe>
      </ReactPageScroller>
    </>
  )
}
