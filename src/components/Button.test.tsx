import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Components/Button', () => {
    it('some test case', () => {
        const { baseElement } = render(<Button>Button</Button>);
        expect(baseElement).toMatchSnapshot();
    })
})