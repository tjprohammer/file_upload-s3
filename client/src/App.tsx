
import * as React from "react";
import FormLayout from "./components/FileUpload";

export interface IAppProps {}

function App(props: IAppProps) {
  return (
    <div>
      File Upload to AWS S3
      <FormLayout />
    </div>
  );
}

export default App;
