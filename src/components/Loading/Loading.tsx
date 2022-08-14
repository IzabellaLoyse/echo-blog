import { LoaderContainer } from './style';

function Loading() {
  return (
    <LoaderContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: 'auto',
          background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%',
        }}
        width="200"
        height="200"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="#2161c3"
          strokeDasharray="164.93361431346415 56.97787143782138"
          strokeWidth="10"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </LoaderContainer>
  );
}

export default Loading;
