import React, { useState } from "react";
import EditModal from "./EditModal";
import DeletePassengerDetails from "./DeletePassengerDetails";

const ShowPassengerList = () => {
  const [showList, setShowList] = useState(false);
  const handleListClick = () => {
    setShowList(!showList);
  };

  return (
    <>
      <div className="text-center items-center mt-10">
        <button
          className="cursor-pointer border px-4 py-2 rounded-lg"
          onClick={handleListClick}
        >
          List
        </button>
      </div>
      {showList && (
        <div className="flex justify-center items-center gap-3">
          <EditModal />
          <DeletePassengerDetails />
        </div>
      )}
    </>
  );
};

export default ShowPassengerList;
