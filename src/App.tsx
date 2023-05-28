import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxForm from "./redux-form/ReduxForm";
import RetrieveForm from "./redux-form/RetrieveForm";
import MultiForm from "./redux-multi-input/MultiForm";
import RetrieveMultiForm from "./redux-multi-input/RetrieveMultiForm";
function App() {
  return (
    <>
      {/* <ReduxForm />
      <RetrieveForm/> */}
      <MultiForm/>
      <RetrieveMultiForm/>
    </>
  );
}

export default App;
