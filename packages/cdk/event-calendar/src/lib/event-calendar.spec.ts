import { render } from '@testing-library/angular';
import { CdkEventCalendar } from './event-calendar';

describe('CdkEventCalendar', () => {
  it('should create', async () => {
    const { container } = await render(CdkEventCalendar);
    expect(container).toBeInTheDocument();
  });
});
