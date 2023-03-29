import { Header, Footer } from "../../components";
import { RateForm, RateCheck, Faq, GetApp } from "../../sections";

function Home() {
  return (
    <>
      <Header />
      <RateForm />
      <RateCheck />
      <Faq />
      <GetApp />
      <Footer />
    </>
  )
}

export default Home;