import { ComponentMeta, ComponentStory } from '@storybook/react'
import ListBody from './ListBody'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Component / Presenters / ListBody',
  component: ListBody,
  // 컴포넌트의 default props를 입력해주세요
  args: {},
} as ComponentMeta<typeof ListBody>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof ListBody> = (args) => <ListBody {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
