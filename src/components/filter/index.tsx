import { useState } from 'react';
import * as styled from './styles';

export const Filter = ({
  onClick,
  categories,
  setCategories,
}: {
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  categories: any;
  setCategories: any;
}) => {

  const handleCheckboxChange = (target: any) => {
    const found = categories.filter((elem: string) => elem === target)
  
    if (found.length > 0) {
      return setCategories(categories.filter((elem: string) => elem !== target))
    }
    setCategories([target,...categories])
 }

  return (
    <styled.CheckboxContainer>

        <styled.Checkbox
          id='Aerosol'
          value='Aerosol'
          onChange={(e) => handleCheckboxChange(e.target.value)}
        />
        <styled.Title htmlFor='Aerosol'>Aerosol</styled.Title>


        <styled.Checkbox
          id='Roll On'
          value='Roll On'
          onChange={(e) => handleCheckboxChange(e.target.value)}
        />
        <styled.Title htmlFor='Roll On'>Rollon</styled.Title>

      <styled.Checkbox
        id='Jabón Líquido'
        value='Jabón Líquido'
        onChange={(e) => handleCheckboxChange(e.target.value)}
      />
      <styled.Title htmlFor='Jabón Líquido'>Sabonete Líquido</styled.Title>
      
      
      <styled.Checkbox
        id='Jabón Barra'
        value='Jabón Barra'
        onChange={(e) => handleCheckboxChange(e.target.value)}
      />
      <styled.Title htmlFor='Jabón Barra'>Sabonete em barra</styled.Title>
      
      
      <styled.Checkbox
        id='Crema Soft Solid'
        value='Crema Soft Solid'
        onChange={(e) => handleCheckboxChange(e.target.value)}
      />
      <styled.Title htmlFor='Crema Soft Solid'>Creme stick</styled.Title>
      
      
      <styled.Checkbox
        id='Alcohol en Gel'
        value='Alcohol en Gel'
        onChange={(e) => handleCheckboxChange(e.target.value)}
      />
      <styled.Title htmlFor='Alcohol en Gel'>Alcool em gel</styled.Title>
      
      <styled.Checkbox
        id='Talco'
        value='Talco'
        onChange={(e) => handleCheckboxChange(e.target.value)}
      />
      <styled.Title htmlFor='Talco'>Talco</styled.Title>
      <styled.Button onClick={onClick}>FILTRAR</styled.Button>
 </styled.CheckboxContainer>
  )
}