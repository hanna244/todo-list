import { ComponentMeta, ComponentStory } from '@storybook/react'
import ListHead from './ListHead'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Component / Presenters / ListHead',
  component: ListHead,
  // 컴포넌트의 default props를 입력해주세요
  args: {},
} as ComponentMeta<typeof ListHead>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof ListHead> = (args) => <ListHead {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
