function isValidJson(data: string): boolean {
    try {
      JSON.parse(data)
      return true
    } catch {
      return false
    }
  }

  export function validateJson(data: string): string {
    if (!isValidJson(data)) {
      return JSON.stringify({ isValid: false, message: 'Invalid JSON' });
    }
    return JSON.stringify({ isValid: true, message: 'Valid JSON' });
  }