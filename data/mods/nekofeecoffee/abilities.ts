export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	troubled: {
		onStart(source) {
			source.addVolatile('troubled');
		},
		condition: {
			noCopy: true,
			onDisableMove(pokemon) {
				if (pokemon.lastMove && pokemon.lastMove.id !== 'struggle') pokemon.disableMove(pokemon.lastMove.id);
			},
		},
		name: "Troubled",
		shortDesc: "This Pokemon cannot use the same move twice in a row.",
	},
};
