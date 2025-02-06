import { validateJson } from './validateJson'

describe('validateJson', () => {
  it('should return false', () => {
    const data = ''
    const resultJson = JSON.parse(validateJson(data))
    expect(resultJson.isValid).toBe(false)
    expect(resultJson.message).toBe('Invalid JSON')
  });
});