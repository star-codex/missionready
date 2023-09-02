const createPokemon = ({ pokemonName, pokemonType, pokemonStats }) => ({
	pokemonName,
	pokemonType,
	pokemonStats,
});

const bulbasaur = createPokemon({
	pokemonName: 'Bulbasaur',
	pokemonType: ['Grass', 'Poison'],
	pokemonStats: {
		HP: 45,
		Attack: 49,
		'Sp. Attack': 65,
		'Sp. Defense': 65,
		Speed: 45,
	},
});

console.log(bulbasaur);
// {
// 	pokemonName: 'Bulbasaur',
// 	pokemonType: [ 'Grass', 'Poison' ],
// 	pokemonStats: {
// 	  HP: 45,
// 	  Attack: 49,
// 	  'Sp. Attack': 65,
// 	  'Sp. Defense': 65,
// 	  Speed: 45
// 	}