import React from 'react';
import './App.css';
import Home from './home/Home';
import AboutUs from './aboutus/AboutusComp';
import Coding from './Coding/Coding';
import Navigation from './navigation/Navigation';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Footer from './footer/Footer';
// import PrivateRoute from './ProtectedRoute/ProtectedRoute';
// import Class9CBSE from './../src/subjectsCard/Class9CBSE';
// import Class9CommerceICSE from './../src/subjectsCard/Class9CommerceICSE';
// import Class9MathICSE from './../src/subjectsCard/Class9MathICSE';
// import Class10CBSE from './../src/subjectsCard/Class10CBSE';
// import Class10CommerceICSE from './../src/subjectsCard/Class10CommerceICSE';
// import Class10MathsICSE from './../src/subjectsCard/Class10MathsICSE';
// import Class11BioCBSE from './../src/subjectsCard/Class11BioCBSE';
// import Class11BioISC from './../src/subjectsCard/Class11BioISC';
// import Class11CommerceCBSE from './../src/subjectsCard/Class11CommerceCBSE';
// import Class11CommerceISC from './../src/subjectsCard/Class11CommerceISC';
// import Class11MathsCBSE from './../src/subjectsCard/Class11MathsCBSE';
// import Class11MathsISC from './../src/subjectsCard/Class11MathsISC';
// import Class12BioCBSE from './../src/subjectsCard/Class12BioCBSE';
// import Class12BioISC from './../src/subjectsCard/Class12BioISC';
// import Class12CommerceCBSE from './../src/subjectsCard/Class12CommerceCBSE';
// import Class12CommerceISC from './../src/subjectsCard/Class12CommerceISC';
// import Class12MathsCBSE from './../src/subjectsCard/Class12MathsCBSE';
// import Class12MathsISC from './../src/subjectsCard/Class12MathsISC';
// import JEE from './../src/subjectsCard/JEE';
// import NEET from './../src/subjectsCard/NEET';
import Admin from './Admin/Admin';
import OurProgram from './ourprogram/OurProgram';
import Login from './home/Login'
import SignUp from './home/SignUp';
import GetTutor from './getTutorForm/GetTutor';
import PayLaterForm from './home/PayLaterForm';
import ContactUs from './contactForm/ContactUs';
import NotFound from './NotFound/NotFound';
import ComingSoon from './ComingSoon/ComingSoon';
function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/aboutus" component={AboutUs} />
          {/* <Route exact path="/coding" component={Coding} /> */}
          {/* <Route exact path="/class9CBSE" component={Class9CBSE} />
          <Route exact path="/class9CommerceICSE" component={Class9CommerceICSE} />
          <Route exact path="/class9MathICSE" component={Class9MathICSE} />
          <Route exact path="/Class10CBSE" component={Class10CBSE} /> */}
          <Route exact path="/our-program" component={OurProgram} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/get-tutor" component={GetTutor} />
          <Route exact path="/paylater-form" component={PayLaterForm} />
          {/* <Route exact path="/Class10CommerceICSE" component={Class10CommerceICSE} />
          <Route exact path="/Class10MathsICSE" component={Class10MathsICSE} />
          <Route exact path="/Class11BioCBSE" component={Class11BioCBSE} />
          <Route exact path="/Class11BioISC" component={Class11BioISC} />
          <Route exact path="/Class11CommerceCBSE" component={Class11CommerceCBSE} />
          <Route exact path="/Class11CommerceISC" component={Class11CommerceISC} />
          <Route exact path="/Class11MathsCBSE" component={Class11MathsCBSE} />
          <Route exact path="/Class11MathsISC" component={Class11MathsISC} />
          <Route exact path="/Class12BioCBSE" component={Class12BioCBSE} />
          <Route exact path="/Class12BioISC" component={Class12BioISC} />
          <Route exact path="/Class12CommerceCBSE" component={Class12CommerceCBSE} />
          <Route exact path="/Class12CommerceISC" component={Class12CommerceISC} />
          <Route exact path="/Class12MathsCBSE" component={Class12MathsCBSE} />
          <Route exact path="/Class12MathsISC" component={Class12MathsISC} /> 
          <Route exact path="/JEE" component={JEE} />
          <Route exact path="/NEET" component={NEET} />*/}
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/comingSoon" component={ComingSoon}/>
           <Route component={Admin} paths="/admin"/> 
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
