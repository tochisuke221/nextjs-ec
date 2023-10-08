import styled from "styled-components";
import Image, { ImageProps } from "next/image";
import React from "react"

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }

const ImageWithShape = styled(Image)<ShapeImageProps>`
  border-radius: ${(props) => (props.shape === 'circle' ? '50%' : '0')}
`

const ShapeImage: React.FC<ShapeImageProps> = (props) => {
  const { shape, ...imageProps } = props

  return <ImageWithShape shape={shape} {...imageProps} />
}

export default ShapeImage
