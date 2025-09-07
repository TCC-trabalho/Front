export default function getRandomHexColor(): string {
    const cor = Math.floor(Math.random() * 16777216).toString(16);
    return `#${cor.padStart(6, '0')}`;
}