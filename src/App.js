import React from 'react';
import { RecoilRoot, useRecoilValue} from 'recoil';
import styles from './App.module.scss';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import C from './constants/C'
import { SignIn, Register, Settings, General } from './pages';
import { Main } from './containers'
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from "./components/Loader/Loader";

const AppBody = () => {

  const [user, loading] = useAuthState(getAuth());
  console.log('user ', user);
  // 'B7ZdjqwX5PagYrTjhdAz9azptLk1'

  if (loading) {
    // console.log('Loader ', Loader)
    return (
      <div className={styles.Loading}>
        <Loader />
      </div>
    )
  }

  return (
    <>
      <Routes basename={C.routes.MAIN}>
        {/*<Routes basename={process.env.PUBLIC_URL}> //TODO: вот тут потом поставить норм переменную*!/*/}
        <Route exact path={C.routes.MAIN} element={!user ? <Navigate to={C.routes.SIGN_IN} replace /> : <Main/>} >
          <Route path={C.routes.SETTINGS} element={!user ? <Navigate to={C.routes.SIGN_IN} replace /> : <Settings/>} />
          <Route exact path={C.routes.REGISTER} element={!user ? <Navigate to={C.routes.SIGN_IN} replace /> : <Register />} />
          <Route index element={!user ? <Navigate to={C.routes.SIGN_IN} replace /> : <General />} />
        </Route>
        <Route path={C.routes.SIGN_IN} element={<SignIn />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </>
  )
};

const App = () =>
  (
    <div className={styles.App}>
      <RecoilRoot>
        <Router basename={'/'}>
          <AppBody />
        </Router>
      </RecoilRoot>
    </div>
  );

export default App;
