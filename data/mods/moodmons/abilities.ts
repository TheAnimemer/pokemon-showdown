export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	// Moodmons custom abilities, currently placeholders
	// Should be replaced with actual ability changes / fake abilities
	// or the file should be deleted if there are no new ones.
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
