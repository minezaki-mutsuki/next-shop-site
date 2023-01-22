import { Example } from ".";
import {ComponentStory} from '@storybook/react'

export default {
    title: "Atoms/Example",
    component: Example,
}

const Template: ComponentStory<typeof Example> = (args) => (
    <Example {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    text: "テキスト",
}