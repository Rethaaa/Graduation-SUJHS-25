import Theme from './Theme';
import Navbar from './navbar';
import Banner from './banner';
import YB from './YB';
import Classes from './Classes';
import Teacher from './Teacher';
import Info from './infoKegiatan';
import Footer from './Footer';
import './App.css';

export default function App() {
  return (
    <Theme>
      <Navbar />

      <section id="home">
        <Banner />
      </section>

      <section id="yearbook">
        <YB />
      </section>

      <section id="students">
        <Classes />
      </section>

      <section id="teachers">
        <Teacher />
      </section>

      <section id="memories">
        <Info />
      </section>

      <Footer />
    </Theme>
  );
}
