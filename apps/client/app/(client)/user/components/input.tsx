import { Field } from 'formik';

export default function Input(props: { name: string; type?: string }) {
  return (
    <Field
      className="border-2 rounded-xl border-gray-200 p-3"
      type={props.type ?? 'text'}
      name={props.name}
    />
  );
}
