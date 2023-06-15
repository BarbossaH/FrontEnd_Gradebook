import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import MyComponent from './MyCompenent';
// import Nav from './Nav';

const Home = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      {/* <MyComponent /> */}
    </div>
  );
};
export default Home;
