import { screen } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { JobsList } from './JobsList';

describe('JobsList', () => {
  it('renders JobsList with properly connected redux', async () => {
    renderWithProviders(<JobsList />);
    expect(await screen.findByText('Bonanza.com, Inc.')).toBeInTheDocument();
    expect(
      await screen.findByText('Vista Higher Learning')
    ).toBeInTheDocument();
    expect(await screen.findByText('lawpilots GmbH')).toBeInTheDocument();
  });
});
