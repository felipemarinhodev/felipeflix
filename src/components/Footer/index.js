import React from 'react';
import logo from '../../assets/img/logo.png';
import { FooterBase, Logo } from './styles';

export default function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <Logo src={logo} alt="Logo FelipeFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}
