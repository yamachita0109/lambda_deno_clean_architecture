export class User {
  private id: number
  private name: string
  private age: number

  get getId(): number {
    return this.id
  }

  set setId(id: number) {
    this.id = id
  }

  get getName(): string {
    return this.name
  }

  set setName(name: string) {
    this.name = name
  }

  get getAge(): number {
    return this.age
  }

  set setAge(age: number) {
    this.age = age
  }

  constructor(name: string = null, age: number = null) {
    this.name = name
    this.age = age
  }
}