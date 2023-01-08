import React from "react";
import { Oval } from  'react-loader-spinner';

const Loader = () => {
  return (
    <div className="image-search-loader-container">
      <Oval
        height={80}
        width={80}
        color="#303B4C"
        wrapperStyle={{}}
        wrapperClass="image-search-loader"
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#ccc"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  )
}

export default Loader