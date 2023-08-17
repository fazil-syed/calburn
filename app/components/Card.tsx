import React from "react";
// import { DM_Sans } from "next/font/google";

// const montserrat = DM_Sans({
//   subsets: ["latin"],
//   weight: "400",
// });
const Card = ({
  content,
  isReply = false,
}: {
  content?: JSX.Element[];
  isReply?: boolean;
}) => {
  return (
    <div
      className={`flex w-[46rem] justify-center items-center text-gray-200 bg-dark-4  p-4 rounded-lg `}
    >
      {!isReply &&
        "Welcome to the AI Fitness Bot App – your personalized fitness companion powered by artificial intelligence. This app seamlessly blends cutting-edge technology with health and wellness to help you achieve your fitness goals through an interactive and engaging experience."}
      {isReply && (
        <div>
          {content?.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
