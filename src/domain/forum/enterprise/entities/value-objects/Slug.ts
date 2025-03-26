export class Slug {
  private _value: string

  private constructor(value: string) {
    this._value = value
  }

  get value() {
    return this._value
  }

  static create(slug: string) {
    return new Slug(slug)
  }

  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
