import { useState } from "react";
import { Image } from "./styles";
import { SpinnerLoad } from "../SpinnerLoad";

const CustomImage = ({ src, alt, title }) => {
  const [loadImg, setLoadImg] = useState(true);

  return (
    <>
      {loadImg && <SpinnerLoad />}
      <Image
        src={src}
        title={title}
        alt={alt}
        onLoad={() => setLoadImg(false)}
      />
    </>
  );
};
export default CustomImage;
