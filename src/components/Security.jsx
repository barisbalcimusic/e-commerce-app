import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { updateUser } from "../utils/services/updateUser";
import { useRenderContext } from "../contexts/RenderContext";
import FormField from "./FormField";
import { deleteAccount } from "../utils/services/deleteAccount";

const Security = () => {
  const { userData } = useAuthContext();

  // STATES FOR CONTROLLED INPUTS
  const [firstname, setFirstname] = useState(userData.data.firstname);
  const [lastname, setLastname] = useState(userData.data.lastname);
  const [password, setPassword] = useState("");
  const fieldStates = { firstname, lastname, password };

  // STATES FOR EDIT MODE
  const [firstnameEditAktiv, setFirstnameEditAktiv] = useState(false);
  const [lastnameEditAktiv, setLastnameEditAktiv] = useState(false);
  const [passwordEditAktiv, setPasswordEditAktiv] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState(null);

  const [success, setSuccess] = useState(false);
  const { setRenderedComponent } = useRenderContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (fieldToEdit) {
      case "firstname":
      case "lastname":
      case "password":
        updateUser(fieldToEdit, fieldStates)
          .then((data) => {
            setSuccess(true);
            console.log(data);
          })
          .catch((err) => console.error(err))
          .finally(() => {
            setFieldToEdit(null);
            fieldToEdit === "firstname"
              ? setFirstnameEditAktiv(false)
              : fieldToEdit === "lastname"
              ? setLastnameEditAktiv(false)
              : fieldToEdit === "password"
              ? setPasswordEditAktiv(false)
              : null;
          });
        break;
      case "delete":
        deleteAccount()
          .then((data) => {
            setSuccess(true);
            console.log(data);
          })
          .catch((err) => console.error(err))
          .finally(() => setFieldToEdit(null));
        break;
    }
  };

  const fields = [
    {
      name: "firstname",
      value: firstname,
      setValue: setFirstname,
      edit: firstnameEditAktiv,
      setEdit: setFirstnameEditAktiv,
    },
    {
      name: "lastname",
      value: lastname,
      setValue: setLastname,
      edit: lastnameEditAktiv,
      setEdit: setLastnameEditAktiv,
    },
    {
      name: "password",
      value: password,
      setValue: setPassword,
      edit: passwordEditAktiv,
      setEdit: setPasswordEditAktiv,
    },
  ];

  return (
    <div>
      <h1>Login & Security</h1>
      <button onClick={() => setRenderedComponent(null)}>back</button>
      <form className="security-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label>Email</label>
            <div>{userData.data.email}</div>
          </div>

          {fields.map((field) => (
            <FormField
              key={field.name}
              fieldName={field.name}
              fieldValue={field.value}
              setFieldValue={field.setValue}
              setFieldToEdit={setFieldToEdit}
              fieldEditAktiv={field.edit}
              setFieldEditAktiv={field.setEdit}
            />
          ))}

          <div className="form-group">
            <label>Delete Account</label>
            <div className="input-group">
              <button type="submit" onClick={(e) => setFieldToEdit("delete")}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Security;
