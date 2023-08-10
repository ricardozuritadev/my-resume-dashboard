import EducationCard from "components/ad-hoc/education/education-card";
import EducationTimeline from "components/ad-hoc/education/education-timeline";
import { education_data } from "utils/data/education";

const EducationPage = () => {
  return (
    <div className="p-education">
      <EducationTimeline />
      <div className="p-education__cards">
        {education_data.map((education) => (
          <EducationCard key={education.id} {...education} />
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
