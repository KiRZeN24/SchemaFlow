import { describe, it, expect } from 'vitest';
import { validateJson } from './validateJson'

describe('validateJson', () => {
  it('should return false', () => {
    const data = ''
    const resultJson = JSON.parse(validateJson(data))
    expect(resultJson.isValid).toBe(false)
    expect(resultJson.message).toBe('Invalid JSON')
  });

  it('should return true', () => {
    const data = '{"course":"ofimática","units":[{"id":1,"title":"conceptos basicos"},{"id":2,"title":"tablas de unidades"},{"id":3,"title":"correcion ortografica"}],"active":2}'
    const resultJson = JSON.parse(validateJson(data))
    expect(resultJson.isValid).toBe(true)
    expect(resultJson.message).toBe('Valid JSON')
  });
});
