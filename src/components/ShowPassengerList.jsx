import { useNavigate } from "react-router";

const ShowPassengerList = () => {
  const navigate = useNavigate();
  const handleListClick = () => {
    navigate("/bookinghistory");
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
    </>
  );
};

export default ShowPassengerList;

{
  /* {showList && (
        <div className="flex justify-center items-center gap-3">
          <EditModal />
          <DeletePassengerDetails />
        </div>
      )} */
}
