import BioCard from "components/ad-hoc/about/bio-card";
import ResumeCard from "components/ad-hoc/about/resume-card";
import HobbiesCard from "components/ad-hoc/about/hobbies-card";
import WhereILivedCard from "components/ad-hoc/about/where-i-lived-card";
import LanguagesCard from "components/ad-hoc/about/languages-card";

const AboutPage = () => {
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

export default AboutPage;
