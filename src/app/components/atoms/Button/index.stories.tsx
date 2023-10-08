import { ComponentMeta, ComponentStory } from '@storybook/react' // StoryBook7から非推奨

import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    argTypes: {
        variant: {
          options: ['primary', 'secondary'],
          control: { type: 'radio' },
          defaultValue: 'primary',
          // docsに表示する内容を設定
          description: 'ボタンバリアント',
          table: {
            type: { summary: 'primary | secondary' },
            defaultValue: { summary: 'primary' },
          },
        },
        children: {
          control: { type: 'text' },
          defaultValue: 'Button',
          description: 'ボタンテキスト',
          table: {
            type: { summary: 'string' },
          },
        },
        disabled: {
          control: { type: 'boolean' },
          defaultValue: false,
          description: 'Disabledフラグ',
          table: {
            type: { summary: 'boolean' },
          },
        },
        width: {
          control: { type: 'number' },
          description: 'ボタンの横幅',
          table: {
            type: { summary: 'number' },
          },
        },
        height: {
          control: { type: 'number' },
          description: 'ボタンの縦幅',
          table: {
            type: { summary: 'number' },
          },
        },
        onClick: {
          description: 'onClickイベントハンドラ',
          table: {
            type: { summary: 'function' },
          },
        },
      },
    component: Button,
  };
  
export default meta

// あとでany直す
export const Primary: StoryObj = (args: any) => <Button {...args} />;
Primary.args = { variant: 'primary', children: 'Primary Button' }

// Secondaryボタン
export const Secondary: StoryObj = (args: any) => <Button {...args} />;
Secondary.args = { variant: 'secondary', children: 'Secondary Button' }

// Disabledボタン
export const Disabled: StoryObj = (args: any) => <Button {...args} />;
Disabled.args = { disabled: true, children: 'Disabled Button' }
