import songs from './songs.generated.json';
import type { Song } from './setlistTypes';

const songById = new Map((songs as Song[]).map((song) => [song.id, song]));

export function resolveSong(songId: string) {
	const song = songById.get(songId);

	if (!song) {
		throw new Error(`Unknown songId: ${songId}`);
	}

	return song;
}
