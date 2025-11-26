export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	witheroot: {
		inherit: true,
		types: ["Grass", "Poison"],
		baseStats: {hp: 95, atk: 120, def: 85, spa: 100, spd: 85, spe: 97},
		abilities: {0: "Corrosion", H: "Toxic Debris"},
	},
	shamarion: {
		inherit: true,
		types: ["Dark", "Fairy"],
		baseStats: {hp: 96, atk: 81, def: 129, spa: 99, spd: 87, spe: 107},
		abilities: {0: "Neo Armor"},
	},
	liliamp: {
		inherit: true,
		types: ["Water", "Grass"],
		baseStats: {hp: 80, atk: 75, def: 80, spa: 90, spd: 100, spe: 123},
		abilities: {0: "Neutralizing Gas"},
	},
};
