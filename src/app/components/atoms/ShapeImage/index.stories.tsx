import { Meta, StoryObj } from "@storybook/react";
import ShapeImage from "./index";

const meta: Meta<typeof ShapeImage> = {
  component: ShapeImage,
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta

const Circle: StoryObj = (args: any) => <ShapeImage {...args} />
Circle.args = { src: '/images/sample/1.jpg', shape: 'circle' }

const Square: StoryObj = (args: any) => <ShapeImage {...args} />
Square.args = { src: '/images/sample/1.jpg', shape: 'square' }
