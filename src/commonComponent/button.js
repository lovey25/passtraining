import React from "react";
import styled, { css } from "styled-components";

const St = {
  Btn: styled.button`
    width: ${({ btnWidth }) => btnWidth || null};
    min-width: 20px;
    text-align: center;
    white-space: nowrap;
    line-height: 74px;
    font-size: 1em;
    @media (max-width: ${({ theme }) => theme.viewSize.mobileS}px) {
      font-size: 0.8em;
    }
    cursor: pointer;
    border: solid;
    border-width: 0px;
    border-radius: 6em;
    background-color: #ffffff00;
    ${({ priority }) =>
      priority === "primary" &&
      css`
        border-color: ${({ theme }) => theme.colorSet.primary};
        color: ${({ theme }) => theme.colorSet.primaryFocused};
        &:disabled {
          color: ${({ theme }) => theme.colorSet.primaryDisabled};
          border-color: ${({ theme }) => theme.colorSet.primaryDisabled};
        }
        /* &:hover:not([disabled]) {
          color: #fff;
          background-color: ${({ theme }) => theme.colorSet.primary};
          border-color: ${({ theme }) => theme.colorSet.primaryFocused};
        } */
      `}
    /* ${({ selected }) =>
      selected &&
      css`
         {
          background-color: ${({ theme }) => theme.colorSet.primary};
          color: #fff;
        }
      `} */
    ${({ priority }) =>
      priority === "alternative" &&
      css`
        color: ${({ theme }) => theme.colorSet.alternativeFocused};
        border-color: ${({ theme }) => theme.colorSet.alternative};
        &:hover:not([disabled]) {
          color: #fff;
          background-color: ${({ theme }) => theme.colorSet.alternative};
          border-color: ${({ theme }) => theme.colorSet.alternative};
        }
        &:disabled {
          color: ${({ theme }) => theme.colorSet.alternativeDisabled};
          border-color: ${({ theme }) => theme.colorSet.alternativeDisabled};
        }
      `}
    ${({ priority }) =>
      priority === "secondary" &&
      css`
        color: ${({ theme }) => theme.colorSet.gray4};
        border-color: ${({ theme }) => theme.colorSet.gray3};
        &:hover:not([disabled]) {
          color: #fff;
          background-color: ${({ theme }) => theme.colorSet.gray3};
          border-color: ${({ theme }) => theme.colorSet.gray3};
        }
        &:disabled {
          color: ${({ theme }) => theme.colorSet.gray2};
          border-color: ${({ theme }) => theme.colorSet.gray2};
        }
      `}
  `,
};

/**
 * 메인 버튼
 * @param {Object} p
 * @param {string} p.label - 버튼 라벨
 * @param {string} [p.priority] - 계층 구분 "primary / alternative / secondary"
 * @param {string} [p.state] - 상태 "default / selected"
 * @param {string} [p.btnWidth] - 버튼 폭
 */
export const Button = ({
  label,
  priority,
  btnWidth,
  disabled,
  selected,
  children,
  ...props
}) => {
  return (
    <>
      <St.Btn
        btnWidth={btnWidth}
        priority={priority}
        disabled={disabled}
        selected={selected}
        {...props}
      >
        {label}
        {children}
      </St.Btn>
    </>
  );
};

Button.defaultProps = {
  priority: "primary",
  state: "default",
  label: null,
  children: null,
};
