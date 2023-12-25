export interface DbzCharacterInterface {
  /* se coloca el id como opcional para no hacer una refactorización en toda la aplicación ya que recién se está añadiendo */
  id?: string,
  name: string,
  power: number,
}
