import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Container } from '../../global/Container/Container';
import { Input } from '../../global/Input/Input';
import { SubTitle } from '../../global/Titles/Titles';
import { Button } from '../../global/Button/Button';

const Form = ({ className, addTransaction, converter }) => {
  return (
    <Container className={className}>
      <SubTitle>Add transaction</SubTitle>
      <Formik
        initialValues={{
          transaction: '',
          euro: ''
        }}

        validationSchema={yup.object().shape({
          transaction: yup.string().required('Required value'),
          euro: yup.number('Type number').positive('Only positive numbers').required('Required value')
        })}

        onSubmit={(values, { resetForm }) => {
          const { transaction, euro } = values;
          addTransaction(transaction, euro, converter);
          resetForm();
        }}

        render={({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <Input
                onChange={handleChange}
                value={values.transaction}
                name="transaction"
                placeholder="Transaction name"
              />
              <ErrorMessage component="p" name="transaction" />
            </div>
            <div>
              <Input
                type="number"
                onChange={handleChange}
                value={values.euro}
                name="euro"
                placeholder="Euro"
              />
              <ErrorMessage component="p" name="euro" />
            </div>
            <Button type="submit">Add</Button>
          </form>
        )}
      />
    </Container>
  )
}

export default Form;