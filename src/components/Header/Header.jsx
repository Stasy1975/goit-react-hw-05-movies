import { Link, Head, Container } from './Header.styled';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Head>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Head>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Header;