import spaceXLogo from "../../assets/images/spaceXLogo.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <img src={spaceXLogo} alt="SpaceX Logo" width="350" height="250" />
      </div>
      <hr className="relative w-screen text-gray-300" />
    </>
  );
};

export default Header;
