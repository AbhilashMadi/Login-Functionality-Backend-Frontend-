import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../scss/layout.scss';

interface ILayout {
  child: ReactNode;
}

const Layout: FC<ILayout> = (props) => {
  const { child } = props
  return (
    <>
      <Header />
      <main className='container'>
        {child}
      </main>
      <Footer />
    </>
  )
}

export default Layout;