import img1 from "../assets/images/1.jpg";
import icon from "../assets/images/done.svg";

const EditPopup = ({ close }) => (
  <div className="bg-black p-4 rounded-2xl">
    Hello, you can edit your profile now
    <div className="text-center">
      <button
        className="rounded-xl border border-six px-2 text-white hover:bg-six transition duration-500 ease-in-out text-[.8rem] rounded-xl"
        onClick={close}
      >
        Close
      </button>
    </div>
  </div>
);

export default EditPopup;
