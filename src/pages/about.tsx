import BioCard from "components/about/bio-card";
import ResumeCard from "components/about/resume-card";
import HobbiesCard from "components/about/hobbies-card";
import WhereILivedCard from "components/about/where-i-lived-card";
import LanguagesCard from "components/about/languages-card";

const About = () => {
  return (
    <div className="p-about">
      <BioCard />
      <ResumeCard />
      <HobbiesCard />
      <WhereILivedCard />
      <LanguagesCard />
    </div>
  );
};

export default About;
