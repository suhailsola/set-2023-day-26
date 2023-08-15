import Card from "../components/Card";
import JOB_DATA from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";

const Home = () => {
  // can write normal js here
  //   console.log("Job data", JOB_DATA);

  // end here
  return (
    <div className="relative">
      <Header />
      <div className="m-auto w-3/5 flex flex-col gap-4 pt-5">
        <div className="px-3 flex flex-col justify-center items-center">
          <h2>
            <strong>Find Tech Jobs In Malaysia 🇲🇾</strong>
          </h2>
          <p>Let employers find you. Or apply to companies directly.</p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Button variant="outline">🎯 I want companies to find me</Button>
          <Button variant="outline">🔍 Search Jobs</Button>
        </div>
        <div>
          <a href="" className="text-xl pl-5">
            <strong>⏳ Latest Jobs ➡️</strong>
          </a>
          <div className="flex gap-4 flex-wrap  justify-between p-5 mb-3">
            {/* <Card
          title="Node JS Developer"
          workplace="Touch N Go"
          description="Become a software developer"
          date="14 August 2023"
        /> */}

            {JOB_DATA.map((element, index) => {
              console.log(index, element);
              return (
                <Card
                  key={index}
                  id={element.id}
                  title={element.job}
                  workplace={element.company}
                  country={element.company_country}
                  date={element.post_date}
                  work_type={element.work_type}
                  stack={element.stacks}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
