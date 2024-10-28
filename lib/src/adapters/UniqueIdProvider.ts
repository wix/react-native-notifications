var id = 0;

export class UniqueIdProvider {
	generate(): number {
		return id++;
	}
}
