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
      <Navbar></Navbar>
      <Banner id="home"></Banner>
      <YB id="yearbook"></YB>
      <Classes></Classes>
      <Teacher></Teacher>
      <Info></Info>
      <Footer></Footer>
    </Theme>
  );
}
