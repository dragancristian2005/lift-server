function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase(),
    )
    .replace(/\s+/g, '');
}

export function convertKeysToCamelCase(
  obj: Record<string, any>,
): Record<string, any> {
  const newObj: Record<string, any> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = toCamelCase(key);
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
}
