import { Oval, ThreeCircles } from 'react-loader-spinner';

export function Loader() {
  return (
    <ThreeCircles
      height="80"
      width="80"
      color="white"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
}

export function LoaderBtn() {
  return (
    <Oval
      height={11}
      width={11}
      color="white"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#blue"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
}
