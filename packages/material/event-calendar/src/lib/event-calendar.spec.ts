import { render } from '@testing-library/angular';
import { MatEventCalendar } from './event-calendar';

describe('MatEventCalendar', () => {
  it('should create', async () => {
    const { container } = await render(MatEventCalendar);
    expect(container).toBeInTheDocument();
  });
});
