export class AliasAlreadyExistsError extends Error {
  constructor() {
    super('Alias already exists')
  }
}
