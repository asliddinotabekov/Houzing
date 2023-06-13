import React, { forwardRef } from 'react';
import { Container,Icon,Wrapper } from './style';

export const Input = forwardRef(({
  type,
  onChange,
  value,
  defalutValue,
  placeholder,
  name,
  w,
  h,
  icon
},ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
    <Container
    ref={ref}
      icon={icon}
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defalutValue}
      onChange={onChange}
      type={type}
      w={w}
      h={h}
      ></Container>
      </Wrapper>
  )
}
)

export default Input;