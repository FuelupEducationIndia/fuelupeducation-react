import React from "react";
import EditIntro from "../Components/maincomponents/EditIntro";
import EditForm from "../Components/maincomponents/EditForm";
import FingerPrint from "../Components/maincomponents/FingerPrint";
import QrCode from "../Components/maincomponents/QrCode";
import FaceId from "../Components/maincomponents/FaceId";
import { Switch, Route } from "react-router-dom";
const EditPage = () => {
  return (
    <>
      <EditIntro />
      <EditForm />
      <Switch>
        <Route path="/fingerprint" exact>
           <FingerPrint/>
        </Route>
        <Route path="/qrcode" exact>
           <QrCode />
        </Route>
        <Route path="/faceid" exact>
           <FaceId />
        </Route>
        
      </Switch>
      
    </>
  );
};

export default EditPage;
