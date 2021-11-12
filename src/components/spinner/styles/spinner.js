import styled from "styled-components/macro";
import { keyframes } from "styled-components";

const animate = keyframes`
  100% {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div`
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Circle = styled.div`
  position: relative;
	width: 54px;
	height: 54px;
	overflow: hidden;
	background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 100%);
	border-radius: 100%;
	animation: ${animate} 1s infinite linear;
`;

export const CircleGradient = styled.div`
  position: absolute;
	width: 44px;
	height: 44px;
	transform: translate(-50%, -50%);

  top: -24px;
	left: 6px;
	background-color: var(--black-1);
	background-image:  var(--black-1);
	transform: rotate(-45deg);
`;

export const CircleInner = styled.div`
  position: absolute;
	width: 44px;
	height: 44px;
	transform: translate(-50%, -50%);

  top: 50%;
	left: 50%;
	background-color: var(--black-1);
	border-radius: 100%;
`;
