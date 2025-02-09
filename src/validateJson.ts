import Unit from './interfaces';

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
    const requiredProperties = ['course', 'active', 'units'];
    
    for (const property of requiredProperties) {
      if (!(property in json)) {
        return JSON.stringify({ isValid: false, message: `The ${property} property is missing in the JSON` });
      }
    }

    if (json.units.length === 0) {
      return JSON.stringify({ isValid: false, message: 'The units is empty in the JSON' });
    }

    for (const unit of json.units) {
      if (typeof unit.id !== 'number') {
        return JSON.stringify({ isValid: false, message: 'The id property is missing in the units JSON' });
      }

      if (!json.units.some((unit: Unit) => unit.id === json.active)) {
        return JSON.stringify({ isValid: false, message: 'The id is not active in the JSON' });
      }

      if (typeof unit.title !== 'string' || unit.title.trim() === '') {
        return JSON.stringify({ isValid: false, message: 'The title property is missing in the units JSON' });
      }
    }

    return JSON.stringify({ isValid: true, message: 'Valid JSON' });
  }