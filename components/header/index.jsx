import TopNavbar from "@/components/header/navbar/TopNavbar/index";
import MainNavbar from "./navbar/MainNavbar";
import HeaderUtilityBar from "./HeaderUtilityBar";

export default function Header() {
  return (
    <div>
      <TopNavbar />
      <HeaderUtilityBar />
      <MainNavbar />
    </div>
  );
}
