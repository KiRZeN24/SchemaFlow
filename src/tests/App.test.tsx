import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
    it('should render the title', () => {
      render(<App />);
      expect(screen.getByText('SchemaFlow')).toBeInTheDocument();
    });

    it('should refresh status when button is clicked', () => {
      render(<App />);
    
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button', {name: 'Generate'});

      fireEvent.change(input, { target : { value: '{"course":"ofimática","units":[{"id":1,"title":"conceptos basicos"},{"id":2,"title":"tablas de unidades"},{"id":3,"title":"correcion ortografica"}],"active":2}' }});
      fireEvent.click(button);

      expect(screen.getByText('Valid JSON')).toBeInTheDocument();
    });
  });