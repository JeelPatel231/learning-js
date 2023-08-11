type Lazy<T> = () => T

type ConsList<T> = Lazy<{
  head: Lazy<T>,
  tail: ConsList<T>
} | null>

const asLazy = <T>(x: T): Lazy<T> => () => x

const linkedList: ConsList<number> = asLazy({
  head: asLazy(1),
  tail: asLazy({
    head: asLazy(2),
    tail: asLazy({
      head: asLazy(3),
      tail: asLazy(null),
    }),
  }),
})

// infinite list of numbers
const range = (begin: Lazy<number>): ConsList<number> => () => {
  return {
    head: begin,
    tail: range(asLazy(begin() + 1))
  }
}

// take x amount of elements from a ConsList
const take = <T>(n: Lazy<number>, consList: ConsList<T>): ConsList<T> => () => {
  let number = n();
  let pair = consList();
  return (number > 0 && pair != null)
    ? {
      head: pair.head,
      tail: take(asLazy(number - 1), pair.tail)
    }
    : null
}

const sum = (consList: ConsList<number>): Lazy<number> => () => {
  let forcedHead = consList();
  return (forcedHead != null)
    ? forcedHead.head() + sum(forcedHead.tail)()
    : 0
}

class Helper {
  static printList<T>(list: ConsList<T>) {
    let currHead = list();
    while (!!currHead) {
      console.log(currHead.head())
      currHead = currHead.tail();
    }
  }

  static toArrayList<T>(list: ConsList<T>): T[] {
    let arrList: T[] = [];
    let currHead = list();
    while (!!currHead) {
      arrList.push(currHead.head())
      currHead = currHead.tail();
    }
    return arrList;
  }

  static toConsList<T>(list: T[]): ConsList<T> {
    return () => {
      return (list.length === 0)
        ? null
        : {
          head: asLazy(list.shift()!),
          tail: this.toConsList(list)
        }
    }
  }
}

const filter = <T>(f: (x: T) => boolean, list: ConsList<T>): ConsList<T> => () => {
  let pair = list();
  if (pair === null) {
    return null;
  }
  return f(pair.head())
    ? {
      head: pair.head,
      tail: filter(f, pair.tail)
    }
    : filter(f, pair.tail)()
}

const sieve = (list: ConsList<number>): ConsList<number> => () => {
  let pair = list();
  if (pair === null) {
    return null;
  }
  let y = pair.head();
  return {
    head: asLazy(y),
    tail: sieve(filter((x) => x % y !== 0, pair.tail))
  };
}

const fibonacciRecursiveLazy = (a: Lazy<number>, b: Lazy<number>): ConsList<number> => () => {
  return {
    head: a,
    tail: fibonacciRecursiveLazy(b, asLazy(a() + b()))
  }
}

// infinite list of fibonacci numbers
const fib = fibonacciRecursiveLazy(asLazy(0), asLazy(1))

// 1477 is the last number in js before touching infinity in fib series
// take first 1477 elements from the infinite list of numbers
const fib10 = take(asLazy(1477), fib)

// print the 1477 fibonacci numbers
// Helper.printList(fib10)


// prints the infinite list of all numbers
let prime = sieve(range(() => 2));

Helper.printList(prime)
