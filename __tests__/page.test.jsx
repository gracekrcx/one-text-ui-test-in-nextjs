import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { renderAlert } from '../pages/index';

describe('renderAlert', () => {
  test('error 是 true, limitBuyText 有值', () => {
    const { getByText } = render(
      <div>{renderAlert(true, '限購 5 件', 5)}</div>
    );
    expect(getByText('( 買太多了限購 5 件 )')).toBeInTheDocument();
  });
  test('error 是 true, limitBuyText 沒有值', () => {
    const { getByText } = render(<div>{renderAlert(true, '', 3)}</div>);
    expect(getByText('已超出購買數量，上限3')).toBeInTheDocument();
  });

  test('error 是 false, limitBuyText 有值', () => {
    const { getByText } = render(
      <div>{renderAlert(false, '限購 10 件', 10)}</div>
    );
    expect(getByText('( 限購 10 件 )')).toBeInTheDocument();
  });

  test('error 是 false, limitBuyText 沒有值', () => {
    const { container } = render(<div>{renderAlert(false, '', 1)}</div>);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
