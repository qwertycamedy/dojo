import React from "react";
import ContentLoader from "react-content-loader";
import cl from "./Post.module.scss";

const PostSceleton = ({ props }) => {
  return (
    <div className={cl.post}>
      <ContentLoader
        speed={1.5}
        width={300}
        height={305}
        viewBox="0 0 300 305"
        backgroundColor="#141414"
        foregroundColor="#374151"
        {...props}
      >
        <circle cx="22" cy="24" r="22" />
        <rect x="48" y="0" rx="7" ry="7" width="142" height="24" />
        <rect x="48" y="32" rx="7" ry="7" width="150" height="18" />
        <rect x="0" y="70" rx="7" ry="7" width="240" height="30" />
        <circle cx="279" cy="12" r="3" />
        <circle cx="279" cy="23" r="3" />
        <circle cx="279" cy="33" r="3" />
        <rect x="0" y="120" rx="7" ry="7" width="300" height="140" />
        <rect x="115" y="275" rx="15" ry="15" width="70" height="29" />
      </ContentLoader>
    </div>
  );
};

export default PostSceleton;
