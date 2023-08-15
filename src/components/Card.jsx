import React from "react";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

// Option 1

// const Card = (props) => {
//   return (
//     <div className="border w-[400] border-gray-600 p-4 rounded-md">
//       <h5>{props?.title || "Not stated"}</h5>
//       <p>{props?.workplace || "Not stated"}</p>
//       <p>{props?.description || "Not stated"}</p>
//       <p>{props?.date || "Not stated"}</p>
//     </div>
//   );
// };

// Option 2

const Card = ({
  id,
  title = "Not stated",
  workplace = "Not stated",
  date = "No date",
  country = "Unknown",
  work_type = "Not specified",
  stack,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("id", id);
    navigate(`/job/${id}`);
  };

  return (
    <div className=" flex flex-col justify-between gap-2 bg-white border w-[400px] border-gray-600 p-4 rounded-md">
      <div onClick={handleClick} className="hover:cursor-pointer">
        <h5>
          <strong>{title}</strong>
        </h5>
        <p>{workplace}</p>
      </div>
      <div className="text-sm">
        <p>📅 Posted on {date}</p>
        <p>🌏 {country}</p>
        <p>💼 {work_type}</p>
      </div>
      <div className="text-sm">
        <ul className="flex gap-2">
          {stack.map((stack, index) => (
            <li className=" bg-gray-300 p-1 text-xs rounded" key={index}>
              {stack}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-[12px]">
        <p>Added on {date}</p>
      </div>
      {/* <Button variant="solid"></Button> */}
      {/* <Button variant="outline">Outline</Button> */}
      {/* <Button
        variant="ghost"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        View job
      </Button> */}
      {/* Option 2 */}
      {/* <Button variant="solid">ViewJob</Button> */}
    </div>
  );
};

export default Card;
