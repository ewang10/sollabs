import { Link as InternalLink } from "react-router-dom";
import { Text, Link as ExternalLink } from "../../chakra";

interface propsType {
  text: string,
  to?: string,
  externalLink?: string
};

const MenuItem = ({ text, to = "/", externalLink }: propsType) => {
  const renderText = (
    <Text display="block">
      {text}
    </Text>
  );
  
  return externalLink
    ? (
      <ExternalLink href={externalLink} isExternal={true}>
        {renderText}
      </ExternalLink>
    )
    : (
      <InternalLink to={to}>
        {renderText}
      </InternalLink>
    );
}

export default MenuItem;
