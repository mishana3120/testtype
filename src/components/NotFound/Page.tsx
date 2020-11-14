import React from "react";
import styled from "styled-components";

const ErrorPage: React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorText>Page Not Found</ErrorText>
    </ErrorContainer>
  );
};

const ErrorText = styled.text`
  color: red;
  font-size: 25pt;
`;

const ErrorContainer = styled.div`
  text-align: center;
`;

export default ErrorPage;
