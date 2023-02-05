import { ComponentMeta, ComponentStory } from '@storybook/react'
import ListItem from './ListItem'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Component / Commons / ListItem',
  component: ListItem,
  // 컴포넌트의 default props를 입력해주세요
  args: {
    children: 'Sample Button',
    bgColor: 'white',
  },
} as ComponentMeta<typeof ListItem>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
