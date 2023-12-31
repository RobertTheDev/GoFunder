import { ReactElement } from "react";
import CreateCharityForm from "../../components/CreateCharityForm";
import Seo from "../../../seo/components/Seo";

export default function CreateCharityRoute(): ReactElement {
  return (
    <div>
      <Seo title="Create Charity" />
      <p>Create Charity</p>
      <CreateCharityForm />
    </div>
  );
}
