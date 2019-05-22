import styled from "styled-components";

export const Container = styled.div.attrs({ className: "container" })`
    border: 1px solid gray;
    border-radius: 4px;
`;

interface ISpacingProps {
    height?: string;
    width?: string;
}

export const Spacing = styled.div<ISpacingProps>`
    width: ${(p: ISpacingProps): string => (p.width ? p.width : "0px")};
    height: ${(p: ISpacingProps): string => (p.height ? p.height : "0px")};
`;

interface ICheckboxProps {
    s?: string;
}

const defaultCheckboxSize = "16px";
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    -webkit-appearance: none;
    width: ${(p: ICheckboxProps): string => (p.s ? p.s : defaultCheckboxSize)};
    height: ${(p: ICheckboxProps): string => (p.s ? p.s : defaultCheckboxSize)};
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 50%;
    outline: none;
    :checked {
        background-color: lightgray;
    }
`;
