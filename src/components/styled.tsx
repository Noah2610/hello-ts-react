import styled from "styled-components";

/* --- Container --- */
export const Container = styled.div.attrs({ className: "container" })`
    border: 1px solid gray;
    border-radius: 4px;
`;

/* --- Spacing --- */
interface ISpacingProps {
    height?: string;
    width?: string;
}

export const Spacing = styled.div`
    width: ${(p: ISpacingProps): string => (p.width ? p.width : "0px")};
    height: ${(p: ISpacingProps): string => (p.height ? p.height : "0px")};
`;

/* --- Checkbox --- */
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

/* --- DeleteButton --- */
interface IDeleteButtonProps {
    s?: string;
}
const defaultDeleteButtonSize = "16px";

export const DeleteButton = styled.span.attrs({
    className: "glyphicon glyphicon-remove",
    ariaHidden: true,
})`
    -webkit-appearance: none;
    width: ${(p: IDeleteButtonProps): string =>
        p.s ? p.s : defaultDeleteButtonSize};
    height: ${(p: IDeleteButtonProps): string =>
        p.s ? p.s : defaultDeleteButtonSize};
`;
