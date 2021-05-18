import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled(Field)`
  padding: ${props => props.theme.spacing(1)}px;
`