import { CustomLink } from "./styles";

export const LinkReactRouter = ({
  linkClass = "",
  to,
  text,
  color = "default",
  border = undefined,
  background = "default",
  icon = "",
  wrapLink = "",
  padding = "",
  borderRadius = ""
}) => {
  return (
    <div className={wrapLink}>
      <CustomLink
        className={linkClass}
        color={color}
        background={background}
        padding={padding}
        to={to}
        border={border}
        borderradius={borderRadius}
      >
        {icon} {text}
      </CustomLink>
    </div>
  );
};
