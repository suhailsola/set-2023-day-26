import { useParams } from "react-router-dom";
import JOB_DATA from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const params = useParams();
  const FILTERED_DATA = JOB_DATA.find((element) => {
    return element.id === parseInt(params.id);
  });
  // console.log(FILTERED_DATA);
  return (
    <div className="flex h-auto flex-col justify-between items-center">
      <Header />
      <div className="w-3/5 flex h-auto flex-col justify-between items-center py-7 gap-7">
        <div>
          <h1>
            Jobs / {FILTERED_DATA.job} - {FILTERED_DATA.company}
          </h1>
        </div>
        <JobCard
          stack={FILTERED_DATA.stacks}
          title={FILTERED_DATA.job}
          company={FILTERED_DATA.company}
          posted_date={FILTERED_DATA.post_date}
          country={FILTERED_DATA.company_country}
          work_type={FILTERED_DATA.work_type}
          description={FILTERED_DATA.details.job_description}
        />
        {/* <pre>{JSON.stringify(FILTERED_DATA)}</pre> */}
        <div>
          <a href="http://" className="hover:underline">
            Applied but no response? Drop your resume here 📥
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
