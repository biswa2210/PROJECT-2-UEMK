import { ErrorMessage, Field } from 'formik';
/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
export const FormField = ({ name, label, type = 'text' }) => (
  <label>
    {label}
    <Field name={name} type={type} />
    <ErrorMessage className="error" component="div" name={name} />
  </label>
);
