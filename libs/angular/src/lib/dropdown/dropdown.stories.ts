// Dropdown.stories.ts
import DropdownDocumentation from './Dropdown-Documentation.mdx'
import { moduleMetadata, Story, Meta } from '@storybook/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NggDropdownModule } from './dropdown.module'
import { NggDropdownComponent } from './dropdown.component'

export default {
  title: 'Components/Dropdown',
  component: NggDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, NggDropdownModule],
    }),
  ],
  parameters: {
    docs: {
      page: DropdownDocumentation,
    },
  },
} as Meta<NggDropdownComponent>

const Template: Story<NggDropdownComponent> = (args: NggDropdownComponent) => ({
  template: `<ngg-dropdown text="Select" [options]='options' [(value)]="value" [loop]="loop" [text]="text"></ngg-dropdown>`,
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  id: '',
  text: 'Select Meal',
  value: '',
  loop: true,
  options: [
    { key: 'Tacos', value: 'tacos' },
    { key: 'Pizza', value: 'pizza' },
    { key: 'Sushi', value: 'sushi' },
  ],
}
