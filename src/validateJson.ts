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
    
    const json = JSON.parse(data);
    const requiredProperties = ['course'];
    
    for (const property of requiredProperties) {
      if (!(property in json)) {
        return JSON.stringify({ isValid: false, message: `The ${property} property is missing in the JSON` });
      }
    }

    return JSON.stringify({ isValid: true, message: 'Valid JSON' });
  }