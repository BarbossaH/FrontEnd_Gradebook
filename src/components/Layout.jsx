// import Header from './Header';
import Login from './Login';
import Menu from './Menu';
import Students from './Students';

const Layout = (props) => {
  return (
    <div>
      <Menu />
      <Login />
      <Students />
      {/* <Header /> */}
      {props.children}
    </div>
  );
};
export default Layout;
