import React from 'react';
import styled from 'styled-components';

const Badge = ({ list }) => {
  if (list) {
    const badgeDivs = list.map((obj, index) => <BadgeDiv key={index}>{obj.badgeName}</BadgeDiv>);
    return <BadgeWrap>{badgeDivs}</BadgeWrap>;
  }
  return <></>;
};

const BadgeWrap = styled.div`
  text-align: center;
`;

const BadgeDiv = styled.div`
  display: inline-block;
  background-color: var(--beige);
  margin: 0 0.25rem !important;
  padding: 0.25rem 0.4rem;
  font-size: 0.75rem;
  color: var(--white);
`;

export default Badge;
