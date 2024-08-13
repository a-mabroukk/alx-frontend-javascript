export default function cleanSet(set, startString) {
  return Array.from(set).filter((string) => string.startsWith(startString)).map((string) => string.slice(startString.length)).join('-');
}
