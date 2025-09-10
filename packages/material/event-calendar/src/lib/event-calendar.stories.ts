import type { Meta, StoryObj } from '@storybook/angular';
import { MatEventCalendar } from './event-calendar';

const meta: Meta<MatEventCalendar> = {
  component: MatEventCalendar,
  title: 'Material/EventCalendar',
};
export default meta;

type Story = StoryObj<MatEventCalendar>;

export const Primary: Story = {
  args: {},
};
