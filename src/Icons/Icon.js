import React from "react";
import HomeIcon from "../../assets/images/Home.svg";
import CategoryIcon from "../../assets/images/Categories.svg";
import HeartIcon from "../../assets/images/like.svg";
import ProfileIcon from "../../assets/images/Profile.svg";

const icons = {
    home: HomeIcon,
    category: CategoryIcon,
    heart: HeartIcon,
    profile: ProfileIcon,
};

const Icon = ({ name, color = "gray", size = 24 }) => {
    const SvgIcon = icons[name];
    if (!SvgIcon) return null;
    return <SvgIcon width={size} height={size} fill={color} />;
};

export default Icon;
