import Image from '../node_modules/next/image';
const NextImage = (props) =>
typeof props.src === 'string' ? (
  <Image {...props} unoptimized blurDataURL={props.src} />
) : (
  <Image {...props} unoptimized />
)
export default NextImage;
