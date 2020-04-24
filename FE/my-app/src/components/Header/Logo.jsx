import React from 'react';
import styled from 'styled-components';

const LogoH1 = styled.h1`
  font-size: 0;
`;

const LogoSvg = styled.object`
  pointer-events: none;
  width: 194px;
`;

const Logo = () => {
  return (
    <LogoH1>
      강남구 넘버원 반찬가게 코쿼찬
      <LogoSvg type="image/svg+xml" data="/images/logo.svg"></LogoSvg>
    </LogoH1>
  );
};

export default Logo;
