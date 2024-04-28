import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const FORM_INITIAL_VALUES = {
  searchTerm: "",
};

const searchFormSchema = Yup.object({
  searchTerm: Yup.string().required("Search term is reguired"),
});

const SearchForm = ({ onAddUsers }) => {
  const handleSubmit = (values) => {
    onAddUsers(values);
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={searchFormSchema}
    >
      <Form>
        <h2>Search product by brand or name</h2>
        <label>
          <span>User email</span>
          <br />
          <Field type="text" name="searchTerm" placeholder="Enter search guery" />
          <ErrorMessage component="p" name="searchTerm" />
        </label>
        <br />
        <button type="submit" aria-label="Search">
          Search 🔎
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
