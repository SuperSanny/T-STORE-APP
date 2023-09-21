/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
const Meta = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
      </Helmet>
    </>
  );
};

export default Meta;
