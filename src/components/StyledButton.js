// components/StyledButton.js

import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: darken(#007BFF, 10%);
    }
`;

export default StyledButton;