import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}