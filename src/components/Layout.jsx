// import Header from './Header';
import Login from './Login';
import Menu from './Menu';
import Students from './Students';
import UploadFile from './UploadFile';

const Layout = (props) => {
  return (
    <div>
      {/* <Menu />
      <Login />
      <Students /> */}
      {/* <Header /> */}
      {/* <UploadFile /> */}
      {props.children}
    </div>
  );
};
export default Layout;
