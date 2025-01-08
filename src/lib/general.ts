export function formatString(input: string) {
	return input
		.toLowerCase() // convierte todo a minúsculas
		.replace(/_/g, ' ') // reemplaza los guiones bajos con espacios
		.replace(/\b\w/g, (char) => char.toUpperCase()); // convierte la primera letra de cada palabra a mayúscula
}

export function slugFormatString(input: string) {
	return input
		.toLowerCase() // Convierte todo a minúsculas
		.replace(/\s/g, '_'); // Reemplaza los espacios con guiones bajos
}
