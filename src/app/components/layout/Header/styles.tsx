import Link from 'next/link';
import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
    align-items: center;
    background-color: white;
    box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 10%),
        0 2px 4px -2px rgb(0 0 0 / 10%);
    display: flex;
    height: 6.4rem;
    padding: 0 var(--spacer-lg1);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 22;
`;

export const StyledHeaderLogo = styled(Link)`
    color: black;
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: none;
`;
