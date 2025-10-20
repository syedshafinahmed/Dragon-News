import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';
import Loading from '../Components/Pages/Loading';

const HomeLayout = () => {
  const state = useNavigate();
  return (
    <div>
      <header>
        <Header></Header>
        <section className='w-11/12 mx-auto my-3'>
          <LatestNews></LatestNews>
        </section>
        <nav className='w-11/12 mx-auto my-3'>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className='w-11/12 mx-auto my-3 gap-5 grid grid-cols-12'>
        <aside className='col-span-3 sticky top-5 h-fit'>
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className='col-span-3 sticky top-5 h-fit'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;