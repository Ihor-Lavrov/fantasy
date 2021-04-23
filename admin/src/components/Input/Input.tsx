import React from 'react';
import { Wrapper } from "./Input.styles";
import { FieldAttributes } from "formik";


export const Input = (props: FieldAttributes<any>) => {
  return (
    <Wrapper {...props} />
  )
}