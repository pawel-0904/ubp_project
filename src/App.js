import React from 'react';
import { RecoilRoot, useRecoilValue} from 'recoil';
import styles from './App.module.scss';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import C from './constants/C'
import { SignIn, Register, Settings, General } from './pages';
import { Main } from './containers'
import { isAuthState } from './recoil/atoms';

const AppBody = () => {

  const isAuth = useRecoilValue(isAuthState);

  return (
    <>
      <Routes basename={C.routes.MAIN}>
        {/*<Routes basename={process.env.PUBLIC_URL}> //TODO: вот тут потом поставить норм переменную*!/*/}
        <Route exact path={C.routes.MAIN} element={isAuth ? <Navigate to={C.routes.SIGN_IN} replace /> : <Main/>} >
          <Route path={C.routes.SETTINGS} element={isAuth ? <Navigate to={C.routes.SIGN_IN} replace /> : <Settings/>} />
          <Route exact path={C.routes.REGISTER} element={isAuth ? <Navigate to={C.routes.SIGN_IN} replace /> : <Register />} />
          <Route index element={isAuth ? <Navigate to={C.routes.SIGN_IN} replace /> : <General />} />
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
