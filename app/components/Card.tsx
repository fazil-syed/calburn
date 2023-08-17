import React from "react";

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
      {!isReply && `Hello! How can I assist you?`}
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
