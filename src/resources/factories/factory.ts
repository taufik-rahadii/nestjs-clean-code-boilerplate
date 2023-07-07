export class Factory<T> {
  public attrs(): Partial<T> {
    return {}
  }

  make(overrideValue?: Partial<T>): Promise<Partial<T>> {
    try {
      const object = this.attrs()

      if (overrideValue) {
        Object.assign(object, overrideValue)
      }

      return Promise.resolve(object)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async makeMany(length: number, overrideValue?: Partial<T>) {
    const results: Partial<T>[] = []
    for (let i = 0; i <= length; i++) {
      results.push(await this.make(overrideValue))
    }

    return results
  }
}
