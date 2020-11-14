import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { RouteComponentProps } from "react-router";
import * as Yup from "yup";

interface Props extends RouteComponentProps<{}> {
  title?: string;
}

const FormikComponent: React.FC<Props> = ({ history }) => {
  const cardSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .max(19)
      .matches(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/, "Invalid Card Number")
      .required("Заполните поле"),
    date: Yup.string()
      .max(5)
      .matches(/([0-9]{2})\/([0-9]{2})/, "invalid date")
      .required("Заполните поле"),
    cvv: Yup.string()
      .max(3)
      .matches(/([0-9]{3})/, "invalid cvv")
      .required("Заполните поле"),
  });

  return (
    <div className="block">
      <Formik
        initialValues={{ cardNumber: "", date: "", cvv: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={cardSchema}
      >
        {({ values, errors, touched }) => (
          <Form className="block__form">
            <FormElement className="form__cardNumber">
              <label>Card number</label>
              <Field name="cardNumber" value={values.cardNumber} />
              {errors.cardNumber && touched.cardNumber ? (
                <span className="error">{errors.cardNumber}</span>
              ) : values.cardNumber ? (
                <span className="success">Ok</span>
              ): null}
            </FormElement>

            <div className="form__small">
              <FormElement className="form__date">
                <label>Date</label>
                <Field name="date" value={values.date} />
                <ErrorMessage name="date" component="span" className="error" />
              </FormElement>

              <FormElement className="form__cvv">
                <label>CVV</label>
                <Field name="cvv" />
                <ErrorMessage name="cvv" component="span" className="error" />
              </FormElement>
            </div>

            <div className="form__buttons">
              <button type="button" onClick={() => history.goBack()}>
                Назад
              </button>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const FormElement = styled.div`
  margin-top: 15px;
`;

export default FormikComponent;
