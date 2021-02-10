declare interface String {
  toTitleCase(): string
}

String.prototype.toTitleCase = function () {
  return this.split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1, s.length))
    .join(' ')
}

export {}
