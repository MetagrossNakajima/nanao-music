const songPagePaths = new Map<string, string>([
	['one-room-sugar-life', '/songs/one-room-sugar-life/'],
]);

export function resolveSongPagePath(songId: string) {
	return songPagePaths.get(songId);
}
