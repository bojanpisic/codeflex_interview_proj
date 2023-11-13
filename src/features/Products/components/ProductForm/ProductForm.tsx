import { ErrorMessage, Field, Form, Formik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";
import { Product } from "../../types/product";
import FormInput from "components/FormInput/FormInput";
import Button from "components/Button/Button";
import { useGetCategories } from "features/Categories/hooks/useGetProducts";

const updateProductValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required field"),
  description: Yup.string().required("Description is required field"),
  image: Yup.string().required("Image is required field"),
  price: Yup.number().min(0),
  category: Yup.string().required("Select category"),
});

type ProductFormProps = {
  initialVal: Product;
  onFormSubmit: (values: Product) => void;
};

const ProductForm = ({ initialVal, onFormSubmit }: ProductFormProps) => {
  const { data: categories } = useGetCategories();

  return (
    <Formik
      initialValues={initialVal}
      validationSchema={updateProductValidationSchema}
      onSubmit={onFormSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <Field label="title" component={FormInput} name="title" type="text" />
          <Field
            label="description"
            component={FormInput}
            name="description"
            type="text"
          />
          <Field label="image" component={FormInput} name="image" type="text" />
          <Field
            label="price"
            component={FormInput}
            name="price"
            type="number"
          />
          <label htmlFor="category">Category</label>
          <Field as="select" name="category">
            <option disabled selected>
              Select category
            </option>
            {categories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Field>
          <ErrorMessage name="category" component="span" className="error" />
          <div>
            <Button
              disabled={!(dirty && isValid) || isSubmitting}
              type="submit"
            >
              Add Product
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
