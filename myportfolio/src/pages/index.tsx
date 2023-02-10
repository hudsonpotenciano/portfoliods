import { AboutMe } from '@/components/organisms/AboutMe';
import { Experiences } from '@/components/organisms/Experiences';
import { Home } from '../components/organisms/Home';
import { ContactMe } from '@/components/organisms/ContactMe';
import '@portfoliods/scss/src/global.scss';

export default function Index() {

  // document.documentElement.className = "theme-dark"

  const test = `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
  Lorem Ipsum Lorem Ipsum Lorem Ipsum 
  Lorem Ipsum Lorem Ipsum Lorem Ipsum 
  
  Title
  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
  `;

  return (
    <>
      <Home
        user={{ Name: "Hudson Potenciano", Subtitle: "a Full Stack Developer", AvatarUrl: "https://i.pinimg.com/originals/dd/df/75/dddf75ab05410bad848609bf84f7635b.jpg" }}
        links={[{ Href: "", Name: "About me" }, { Href: "", Name: "Experiences" }, { Href: "", Name: "Contact me" }]}></Home>
      <AboutMe links={[]} text=""></AboutMe>
      <Experiences xpContents={[{
        LogoUrl: "https://i.pinimg.com/originals/dd/df/75/dddf75ab05410bad848609bf84f7635b.jpg", Name: "Lorem Ipsum", Text: test, Level: 3,
      }, {
        LogoUrl: "https://i.pinimg.com/originals/dd/df/75/dddf75ab05410bad848609bf84f7635b.jpg", Name: "Lorem Ipsum 2", Text: test, Level: 3,
      },
      {
        LogoUrl: "https://i.pinimg.com/originals/dd/df/75/dddf75ab05410bad848609bf84f7635b.jpg", Name: "Lorem Ipsum 3", Text: test, Level: 3,
      }]}></Experiences>
      <ContactMe thanksMessage='You can contact me
 through these links below.' visitMessage='Thanks for the visit!' contacts={[{ LogoUrl: "https://s3-alpha-sig.figma.com/img/7a84/5734/147971a0b59cc9a081686864cbe9250f?Expires=1676851200&Signature=U9d-xdztaqpF1f04CakJuihyUjMUwWtSjXgy5GheZlRVUKu-t7rwcVXsm0L3V2IEhR129j6Mi0frURQkharRR1xNx~FcOICnJ8vT00-6Th08Jps67VDc8apnp-Qu-1nrANAv8mhQtkqAolazH1XTDa0FAEhLIVtoOtoiDRX~zMRerCP5fJHZS~vDosE19NL6qnR9~6TleiDxU-bXFNqQlnCu1tfqJsSdoyzvhyRshGRSedsjY36czb6SkHPAKkdZHRtD1u1wHdP6wE8n-kRVwdzE7bGR1jy9BSn13f1TeALPuqi~Z578pS~N8oIeQDLfNdZlqC6plIe7b2jvnVhXtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", Name: "GitHub" }]}></ContactMe>
    </>
  )
}
