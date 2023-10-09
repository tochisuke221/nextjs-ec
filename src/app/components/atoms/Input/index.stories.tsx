import { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta:Meta<typeof Input> = {
    title: 'Atoms/Input',
    argTypes: {
        placeholder: {
          control: { type: 'text' },
          description: 'プレースホルダー',
          table: {
            type: { summary: 'string' },
          },
        },
        hasBorder: {
          control: { type: 'boolean' },
          defaultValue: true,
          description: 'ボーダーフラグ',
          table: {
            type: { summary: 'boolean' },
          },
        },
        hasError: {
          control: { type: 'boolean' },
          defaultValue: false,
          description: 'バリデーションエラーフラグ',
          table: {
            type: { summary: 'boolean' },
          },
        },
      }
}

export default meta

export const Normal: StoryObj = (args: any) => <Input {...args} />;
Normal.args = {}

export const Error: StoryObj = (args: any) => <Input {...args} />;
Error.args = { hasError: true }
