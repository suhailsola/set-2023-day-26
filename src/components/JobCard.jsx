import React from "react";
import Button from "./ui/Button";

const JobCard = ({
  stack,
  title,
  company,
  posted_date,
  country,
  work_type,
  description,
}) => {
  return (
    <div className=" m-auto bg-white border w-4/5 h-4/5 rounded p-8 flex flex-col gap-5">
      <div>
        <ul className="flex gap-2">
          {stack.map((stack, index) => (
            <li className=" bg-gray-300 p-1 text-xs rounded" key={index}>
              {stack}
            </li>
          ))}
        </ul>
        <h1 className="text-[30px]">
          <strong>{title}</strong>
        </h1>
        <p>{company}</p>
        <div className="mt-2">
          <p>📅 Posted on {posted_date}</p>
          <p>🌏 {country}</p>
          <p>💼 {work_type}</p>
          <p>🕛 Unspecified</p>
        </div>
      </div>
      <div>
        <Button variant="solid">Apply Now 🚀</Button>
        <p className="mt-2 text-sm text-justify">
          Please mention that you found the job on Kerja-IT.com, this helps us
          get more companies to post here. Thanks.
        </p>
      </div>

      <div className="p-3">
        <div>
          <h4>✍️ Job Description</h4>
        </div>
        <ul className="w-4/5 m-auto mt-6">
          {description.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>

      <div>
        <Button variant="solid">Apply Now 🚀</Button>
        <p className="mt-2 text-sm text-justify">
          Please mention that you found the job on Kerja-IT.com, this helps us
          get more companies to post here. Thanks.
        </p>
      </div>
    </div>
  );
};

export default JobCard;
