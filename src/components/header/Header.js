import HeaderCss from "./Header.module.css";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import TimeCategoryItemCount from "./timeDateCategory/TimeCategoryItemCount";

function Header() {
  return (
    <div>
      <section className={HeaderCss.headerSection}>
        <Logo />
        <Navigation />
      </section>
      <TimeCategoryItemCount />
    </div>
  );
}

export default Header;
