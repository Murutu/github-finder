import Spinner from "./assets/spinner.gif";

function Spinners() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Spinner}
        alt=""
        loading
      />
    </div>
  );
}
export default Spinners;
