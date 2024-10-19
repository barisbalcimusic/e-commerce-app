import React from "react";

const FormField = ({
  fieldName,
  fieldValue,
  setFieldValue,
  setFieldToEdit,
  fieldEditAktiv,
  setFieldEditAktiv,
}) => {
  return (
    <div className="form-group">
      <label>{fieldName}</label>
      <div className="input-group">
        <input
          type="text"
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          disabled={!fieldEditAktiv}
          placeholder={fieldName === "password" && "********"}
        />
        {!fieldEditAktiv ? (
          <button type="button" onClick={() => setFieldEditAktiv(true)}>
            Edit
          </button>
        ) : (
          <button
            tye="submit"
            onClick={() => setFieldToEdit(fieldName.toLowerCase())}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
