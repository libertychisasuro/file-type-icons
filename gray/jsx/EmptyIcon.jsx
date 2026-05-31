export const EmptyIcon = (props) => (
      <svg {...props} width="40" height="40" fill="none" viewBox="0 0 40 40" aria-hidden="true">
        <mask id="empty_svg__b" width="32" height="40" x="4" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
        <path fill="url(#empty_svg__a)" d="M4 4a4 4 0 0 1 4-4h16l12 12v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path></mask>
        <g mask="url(#empty_svg__b)">
        <path fill="#F5F5F5" d="M4 4a4 4 0 0 1 4-4h16l12 12v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path></g>
        <path fill="#E9EAEB" d="m24 0 12 12h-8a4 4 0 0 1-4-4z"></path>
        <defs>
        <linearGradient id="empty_svg__a" x1="20" x2="20" y1="0" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopOpacity="0.4"></stop>
        <stop offset="1"></stop></linearGradient></defs>
      </svg>
);

export default EmptyIcon;
