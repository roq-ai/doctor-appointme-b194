import * as yup from 'yup';

export const doctorValidationSchema = yup.object().shape({
  name: yup.string().required(),
  availability: yup.string().required(),
  user_id: yup.string().nullable(),
});
