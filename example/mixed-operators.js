const a = 1;
const b = 2;
const c = 3;
const d = 4;

const foo = a && (b < 0 || c > 0 || (d + 1 === 0));
const foo1 = a + b * c;

const baz = a > 2 ? b : c || d;
