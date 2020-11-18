/** ESLint@7.13.0 */

module.exports = [
  {
    "title": "Possible Errors",
    "id": "possible-errors",
    "desc": "These rules relate to possible syntax or logic errors in JavaScript code:",
    "rules": [
      {
        "recommend": true,
        "fixable": false,
        "title": "for-direction",
        "desc": "enforce \"for\" loop update clause moving the counter in the right direction."
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "getter-return",
        "desc": "enforce `return` statements in getters"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-async-promise-executor",
        "desc": "disallow using an async function as a Promise executor"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-await-in-loop",
        "desc": "disallow `await` inside of loops"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-compare-neg-zero",
        "desc": "disallow comparing against -0"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-cond-assign",
        "desc": "disallow assignment operators in conditional expressions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-console",
        "desc": "disallow the use of `console`"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-constant-condition",
        "desc": "disallow constant expressions in conditions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-control-regex",
        "desc": "disallow control characters in regular expressions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-debugger",
        "desc": "disallow the use of `debugger`"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-dupe-args",
        "desc": "disallow duplicate arguments in `function` definitions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-dupe-else-if",
        "desc": "disallow duplicate conditions in if-else-if chains"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-dupe-keys",
        "desc": "disallow duplicate keys in object literals"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-duplicate-case",
        "desc": "disallow duplicate case labels"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-empty",
        "desc": "disallow empty block statements"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-empty-character-class",
        "desc": "disallow empty character classes in regular expressions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-ex-assign",
        "desc": "disallow reassigning exceptions in `catch` clauses"
      },
      {
        "recommend": true,
        "fixable": true,
        "title": "no-extra-boolean-cast",
        "desc": "disallow unnecessary boolean casts"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-extra-parens",
        "desc": "disallow unnecessary parentheses"
      },
      {
        "recommend": true,
        "fixable": true,
        "title": "no-extra-semi",
        "desc": "disallow unnecessary semicolons"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-func-assign",
        "desc": "disallow reassigning `function` declarations"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-import-assign",
        "desc": "disallow assigning to imported bindings"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-inner-declarations",
        "desc": "disallow variable or `function` declarations in nested blocks"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-invalid-regexp",
        "desc": "disallow invalid regular expression strings in `RegExp` constructors"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-irregular-whitespace",
        "desc": "disallow irregular whitespace"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-loss-of-precision",
        "desc": "disallow literal numbers that lose precision"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-misleading-character-class",
        "desc": "disallow characters which are made with multiple code points in character class syntax"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-obj-calls",
        "desc": "disallow calling global object properties as functions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-promise-executor-return",
        "desc": "disallow returning values from Promise executor functions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-prototype-builtins",
        "desc": "disallow calling some `Object.prototype` methods directly on objects"
      },
      {
        "recommend": true,
        "fixable": true,
        "title": "no-regex-spaces",
        "desc": "disallow multiple spaces in regular expressions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-setter-return",
        "desc": "disallow returning values from setters"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-sparse-arrays",
        "desc": "disallow sparse arrays"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-template-curly-in-string",
        "desc": "disallow template literal placeholder syntax in regular strings"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-unexpected-multiline",
        "desc": "disallow confusing multiline expressions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-unreachable",
        "desc": "disallow unreachable code after `return`, `throw`, `continue`, and `break` statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-unreachable-loop",
        "desc": "disallow loops with a body that allows only one iteration"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-unsafe-finally",
        "desc": "disallow control flow statements in `finally` blocks"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-unsafe-negation",
        "desc": "disallow negating the left operand of relational operators"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-useless-backreference",
        "desc": "disallow useless backreferences in regular expressions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "require-atomic-updates",
        "desc": "disallow assignments that can lead to race conditions due to usage of `await` or `yield`"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "use-isnan",
        "desc": "require calls to `isNaN()` when checking for `NaN`"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "valid-typeof",
        "desc": "enforce comparing `typeof` expressions against valid strings"
      }
    ]
  },
  {
    "title": "Best Practices",
    "id": "best-practices",
    "desc": "These rules relate to better ways of doing things to help you avoid problems:",
    "rules": [
      {
        "recommend": false,
        "fixable": false,
        "title": "accessor-pairs",
        "desc": "enforce getter and setter pairs in objects and classes"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "array-callback-return",
        "desc": "enforce `return` statements in callbacks of array methods"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "block-scoped-var",
        "desc": "enforce the use of variables within the scope they are defined"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "class-methods-use-this",
        "desc": "enforce that class methods utilize `this`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "complexity",
        "desc": "enforce a maximum cyclomatic complexity allowed in a program"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "consistent-return",
        "desc": "require `return` statements to either always or never specify values"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "curly",
        "desc": "enforce consistent brace style for all control statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "default-case",
        "desc": "require `default` cases in `switch` statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "default-case-last",
        "desc": "enforce default clauses in switch statements to be last"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "default-param-last",
        "desc": "enforce default parameters to be last"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "dot-location",
        "desc": "enforce consistent newlines before and after dots"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "dot-notation",
        "desc": "enforce dot notation whenever possible"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "eqeqeq",
        "desc": "require the use of `===` and `!==`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "grouped-accessor-pairs",
        "desc": "require grouped accessor pairs in object literals and classes"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "guard-for-in",
        "desc": "require `for-in` loops to include an `if` statement"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-classes-per-file",
        "desc": "enforce a maximum number of classes per file"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-alert",
        "desc": "disallow the use of `alert`, `confirm`, and `prompt`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-caller",
        "desc": "disallow the use of `arguments.caller` or `arguments.callee`"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-case-declarations",
        "desc": "disallow lexical declarations in case clauses"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-constructor-return",
        "desc": "disallow returning value from constructor"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-div-regex",
        "desc": "disallow division operators explicitly at the beginning of regular expressions"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-else-return",
        "desc": "disallow `else` blocks after `return` statements in `if` statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-empty-function",
        "desc": "disallow empty functions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-empty-pattern",
        "desc": "disallow empty destructuring patterns"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-eq-null",
        "desc": "disallow `null` comparisons without type-checking operators"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-eval",
        "desc": "disallow the use of `eval()`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-extend-native",
        "desc": "disallow extending native types"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-extra-bind",
        "desc": "disallow unnecessary calls to `.bind()`"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-extra-label",
        "desc": "disallow unnecessary labels"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-fallthrough",
        "desc": "disallow fallthrough of `case` statements"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-floating-decimal",
        "desc": "disallow leading or trailing decimal points in numeric literals"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-global-assign",
        "desc": "disallow assignments to native objects or read-only global variables"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-implicit-coercion",
        "desc": "disallow shorthand type conversions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-implicit-globals",
        "desc": "disallow declarations in the global scope"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-implied-eval",
        "desc": "disallow the use of `eval()`-like methods"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-invalid-this",
        "desc": "disallow `this` keywords outside of classes or class-like objects"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-iterator",
        "desc": "disallow the use of the `__iterator__` property"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-labels",
        "desc": "disallow labeled statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-lone-blocks",
        "desc": "disallow unnecessary nested blocks"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-loop-func",
        "desc": "disallow function declarations that contain unsafe references inside loop statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-magic-numbers",
        "desc": "disallow magic numbers"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-multi-spaces",
        "desc": "disallow multiple spaces"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-multi-str",
        "desc": "disallow multiline strings"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-new",
        "desc": "disallow `new` operators outside of assignments or comparisons"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-new-func",
        "desc": "disallow `new` operators with the `Function` object"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-new-wrappers",
        "desc": "disallow `new` operators with the `String`, `Number`, and `Boolean` objects"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-octal",
        "desc": "disallow octal literals"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-octal-escape",
        "desc": "disallow octal escape sequences in string literals"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-param-reassign",
        "desc": "disallow reassigning `function` parameters"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-proto",
        "desc": "disallow the use of the `__proto__` property"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-redeclare",
        "desc": "disallow variable redeclaration"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-restricted-properties",
        "desc": "disallow certain properties on certain objects"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-return-assign",
        "desc": "disallow assignment operators in `return` statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-return-await",
        "desc": "disallow unnecessary `return await`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-script-url",
        "desc": "disallow `javascript:` urls"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-self-assign",
        "desc": "disallow assignments where both sides are exactly the same"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-self-compare",
        "desc": "disallow comparisons where both sides are exactly the same"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-sequences",
        "desc": "disallow comma operators"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-throw-literal",
        "desc": "disallow throwing literals as exceptions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-unmodified-loop-condition",
        "desc": "disallow unmodified loop conditions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-unused-expressions",
        "desc": "disallow unused expressions"
      },
      {
        "recommend": true,
        "fixable": true,
        "title": "no-unused-labels",
        "desc": "disallow unused labels"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-useless-call",
        "desc": "disallow unnecessary calls to `.call()` and `.apply()`"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-useless-catch",
        "desc": "disallow unnecessary `catch` clauses"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-useless-concat",
        "desc": "disallow unnecessary concatenation of literals or template literals"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-useless-escape",
        "desc": "disallow unnecessary escape characters"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-useless-return",
        "desc": "disallow redundant return statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-void",
        "desc": "disallow `void` operators"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-warning-comments",
        "desc": "disallow specified warning terms in comments"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-with",
        "desc": "disallow `with` statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "prefer-named-capture-group",
        "desc": "enforce using named capture group in regular expression"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "prefer-promise-reject-errors",
        "desc": "require using Error objects as Promise rejection reasons"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "prefer-regex-literals",
        "desc": "disallow use of the `RegExp` constructor in favor of regular expression literals"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "radix",
        "desc": "enforce the consistent use of the radix argument when using `parseInt()`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "require-await",
        "desc": "disallow async functions which have no `await` expression"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "require-unicode-regexp",
        "desc": "enforce the use of `u` flag on RegExp"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "vars-on-top",
        "desc": "require `var` declarations be placed at the top of their containing scope"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "wrap-iife",
        "desc": "require parentheses around immediate `function` invocations"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "yoda",
        "desc": "require or disallow \"Yoda\" conditions"
      }
    ]
  },
  {
    "title": "Strict Mode",
    "id": "strict-mode",
    "desc": "These rules relate to strict mode directives:",
    "rules": [
      {
        "recommend": false,
        "fixable": true,
        "title": "strict",
        "desc": "require or disallow strict mode directives"
      }
    ]
  },
  {
    "title": "Variables",
    "id": "variables",
    "desc": "These rules relate to variable declarations:",
    "rules": [
      {
        "recommend": false,
        "fixable": false,
        "title": "init-declarations",
        "desc": "require or disallow initialization in variable declarations"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-delete-var",
        "desc": "disallow deleting variables"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-label-var",
        "desc": "disallow labels that share a name with a variable"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-restricted-globals",
        "desc": "disallow specified global variables"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-shadow",
        "desc": "disallow variable declarations from shadowing variables declared in the outer scope"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-shadow-restricted-names",
        "desc": "disallow identifiers from shadowing restricted names"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-undef",
        "desc": "disallow the use of undeclared variables unless mentioned in `/*global */` comments"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-undef-init",
        "desc": "disallow initializing variables to `undefined`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-undefined",
        "desc": "disallow the use of `undefined` as an identifier"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-unused-vars",
        "desc": "disallow unused variables"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-use-before-define",
        "desc": "disallow the use of variables before they are defined"
      }
    ]
  },
  {
    "title": "Stylistic Issues",
    "id": "stylistic-issues",
    "desc": "These rules relate to style guidelines, and are therefore quite subjective:",
    "rules": [
      {
        "recommend": false,
        "fixable": true,
        "title": "array-bracket-newline",
        "desc": "enforce linebreaks after opening and before closing array brackets"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "array-bracket-spacing",
        "desc": "enforce consistent spacing inside array brackets"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "array-element-newline",
        "desc": "enforce line breaks after each array element"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "block-spacing",
        "desc": "disallow or enforce spaces inside of blocks after opening block and before closing block"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "brace-style",
        "desc": "enforce consistent brace style for blocks"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "camelcase",
        "desc": "enforce camelcase naming convention"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "capitalized-comments",
        "desc": "enforce or disallow capitalization of the first letter of a comment"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "comma-dangle",
        "desc": "require or disallow trailing commas"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "comma-spacing",
        "desc": "enforce consistent spacing before and after commas"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "comma-style",
        "desc": "enforce consistent comma style"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "computed-property-spacing",
        "desc": "enforce consistent spacing inside computed property brackets"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "consistent-this",
        "desc": "enforce consistent naming when capturing the current execution context"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "eol-last",
        "desc": "require or disallow newline at the end of files"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "func-call-spacing",
        "desc": "require or disallow spacing between function identifiers and their invocations"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "func-name-matching",
        "desc": "require function names to match the name of the variable or property to which they are assigned"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "func-names",
        "desc": "require or disallow named `function` expressions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "func-style",
        "desc": "enforce the consistent use of either `function` declarations or expressions"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "function-call-argument-newline",
        "desc": "enforce line breaks between arguments of a function call"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "function-paren-newline",
        "desc": "enforce consistent line breaks inside function parentheses"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "id-denylist",
        "desc": "disallow specified identifiers"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "id-length",
        "desc": "enforce minimum and maximum identifier lengths"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "id-match",
        "desc": "require identifiers to match a specified regular expression"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "implicit-arrow-linebreak",
        "desc": "enforce the location of arrow function bodies"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "indent",
        "desc": "enforce consistent indentation"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "jsx-quotes",
        "desc": "enforce the consistent use of either double or single quotes in JSX attributes"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "key-spacing",
        "desc": "enforce consistent spacing between keys and values in object literal properties"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "keyword-spacing",
        "desc": "enforce consistent spacing before and after keywords"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "line-comment-position",
        "desc": "enforce position of line comments"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "linebreak-style",
        "desc": "enforce consistent linebreak style"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "lines-around-comment",
        "desc": "require empty lines around comments"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "lines-between-class-members",
        "desc": "require or disallow an empty line between class members"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-depth",
        "desc": "enforce a maximum depth that blocks can be nested"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-len",
        "desc": "enforce a maximum line length"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-lines",
        "desc": "enforce a maximum number of lines per file"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-lines-per-function",
        "desc": "enforce a maximum number of line of code in a function"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-nested-callbacks",
        "desc": "enforce a maximum depth that callbacks can be nested"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-params",
        "desc": "enforce a maximum number of parameters in function definitions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-statements",
        "desc": "enforce a maximum number of statements allowed in function blocks"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "max-statements-per-line",
        "desc": "enforce a maximum number of statements allowed per line"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "multiline-comment-style",
        "desc": "enforce a particular style for multiline comments"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "multiline-ternary",
        "desc": "enforce newlines between operands of ternary expressions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "new-cap",
        "desc": "require constructor names to begin with a capital letter"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "new-parens",
        "desc": "enforce or disallow parentheses when invoking a constructor with no arguments"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "newline-per-chained-call",
        "desc": "require a newline after each call in a method chain"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-array-constructor",
        "desc": "disallow `Array` constructors"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-bitwise",
        "desc": "disallow bitwise operators"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-continue",
        "desc": "disallow `continue` statements"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-inline-comments",
        "desc": "disallow inline comments after code"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-lonely-if",
        "desc": "disallow `if` statements as the only statement in `else` blocks"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-mixed-operators",
        "desc": "disallow mixed binary operators"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-mixed-spaces-and-tabs",
        "desc": "disallow mixed spaces and tabs for indentation"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-multi-assign",
        "desc": "disallow use of chained assignment expressions"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-multiple-empty-lines",
        "desc": "disallow multiple empty lines"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-negated-condition",
        "desc": "disallow negated conditions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-nested-ternary",
        "desc": "disallow nested ternary expressions"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-new-object",
        "desc": "disallow `Object` constructors"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-plusplus",
        "desc": "disallow the unary operators `++` and `--`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-restricted-syntax",
        "desc": "disallow specified syntax"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-tabs",
        "desc": "disallow all tabs"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-ternary",
        "desc": "disallow ternary operators"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-trailing-spaces",
        "desc": "disallow trailing whitespace at the end of lines"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-underscore-dangle",
        "desc": "disallow dangling underscores in identifiers"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-unneeded-ternary",
        "desc": "disallow ternary operators when simpler alternatives exist"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-whitespace-before-property",
        "desc": "disallow whitespace before properties"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "nonblock-statement-body-position",
        "desc": "enforce the location of single-line statements"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "object-curly-newline",
        "desc": "enforce consistent line breaks inside braces"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "object-curly-spacing",
        "desc": "enforce consistent spacing inside braces"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "object-property-newline",
        "desc": "enforce placing object properties on separate lines"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "one-var",
        "desc": "enforce variables to be declared either together or separately in functions"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "one-var-declaration-per-line",
        "desc": "require or disallow newlines around variable declarations"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "operator-assignment",
        "desc": "require or disallow assignment operator shorthand where possible"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "operator-linebreak",
        "desc": "enforce consistent linebreak style for operators"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "padded-blocks",
        "desc": "require or disallow padding within blocks"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "padding-line-between-statements",
        "desc": "require or disallow padding lines between statements"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "prefer-exponentiation-operator",
        "desc": "disallow the use of `Math.pow` in favor of the `**` operator"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "prefer-object-spread",
        "desc": "disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead."
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "quote-props",
        "desc": "require quotes around object literal property names"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "quotes",
        "desc": "enforce the consistent use of either backticks, double, or single quotes"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "semi",
        "desc": "require or disallow semicolons instead of ASI"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "semi-spacing",
        "desc": "enforce consistent spacing before and after semicolons"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "semi-style",
        "desc": "enforce location of semicolons"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "sort-keys",
        "desc": "require object keys to be sorted"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "sort-vars",
        "desc": "require variables within the same declaration block to be sorted"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "space-before-blocks",
        "desc": "enforce consistent spacing before blocks"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "space-before-function-paren",
        "desc": "enforce consistent spacing before `function` definition opening parenthesis"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "space-in-parens",
        "desc": "enforce consistent spacing inside parentheses"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "space-infix-ops",
        "desc": "require spacing around infix operators"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "space-unary-ops",
        "desc": "enforce consistent spacing before or after unary operators"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "spaced-comment",
        "desc": "enforce consistent spacing after the `//` or `/*` in a comment"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "switch-colon-spacing",
        "desc": "enforce spacing around colons of switch statements"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "template-tag-spacing",
        "desc": "require or disallow spacing between template tags and their literals"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "unicode-bom",
        "desc": "require or disallow Unicode byte order mark (BOM)"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "wrap-regex",
        "desc": "require parenthesis around regex literals"
      }
    ]
  },
  {
    "title": "ECMAScript 6",
    "id": "ecmascript-6",
    "desc": "These rules relate to ES6, also known as ES2015:",
    "rules": [
      {
        "recommend": false,
        "fixable": true,
        "title": "arrow-body-style",
        "desc": "require braces around arrow function bodies"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "arrow-parens",
        "desc": "require parentheses around arrow function arguments"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "arrow-spacing",
        "desc": "enforce consistent spacing before and after the arrow in arrow functions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "constructor-super",
        "desc": "require `super()` calls in constructors"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "generator-star-spacing",
        "desc": "enforce consistent spacing around `*` operators in generator functions"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-class-assign",
        "desc": "disallow reassigning class members"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-confusing-arrow",
        "desc": "disallow arrow functions where they could be confused with comparisons"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-const-assign",
        "desc": "disallow reassigning `const` variables"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-dupe-class-members",
        "desc": "disallow duplicate class members"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-duplicate-imports",
        "desc": "disallow duplicate module imports"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-new-symbol",
        "desc": "disallow `new` operators with the `Symbol` object"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-restricted-exports",
        "desc": "disallow specified names in exports"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-restricted-imports",
        "desc": "disallow specified modules when loaded by `import`"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "no-this-before-super",
        "desc": "disallow `this`/`super` before calling `super()` in constructors"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-useless-computed-key",
        "desc": "disallow unnecessary computed property keys in objects and classes"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "no-useless-constructor",
        "desc": "disallow unnecessary constructors"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-useless-rename",
        "desc": "disallow renaming import, export, and destructured assignments to the same name"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "no-var",
        "desc": "require `let` or `const` instead of `var`"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "object-shorthand",
        "desc": "require or disallow method and property shorthand syntax for object literals"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "prefer-arrow-callback",
        "desc": "require using arrow functions for callbacks"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "prefer-const",
        "desc": "require `const` declarations for variables that are never reassigned after declared"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "prefer-destructuring",
        "desc": "require destructuring from arrays and/or objects"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "prefer-numeric-literals",
        "desc": "disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "prefer-rest-params",
        "desc": "require rest parameters instead of `arguments`"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "prefer-spread",
        "desc": "require spread operators instead of `.apply()`"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "prefer-template",
        "desc": "require template literals instead of string concatenation"
      },
      {
        "recommend": true,
        "fixable": false,
        "title": "require-yield",
        "desc": "require generator functions to contain `yield`"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "rest-spread-spacing",
        "desc": "enforce spacing between rest and spread operators and their expressions"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "sort-imports",
        "desc": "enforce sorted import declarations within modules"
      },
      {
        "recommend": false,
        "fixable": false,
        "title": "symbol-description",
        "desc": "require symbol descriptions"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "template-curly-spacing",
        "desc": "require or disallow spacing around embedded expressions of template strings"
      },
      {
        "recommend": false,
        "fixable": true,
        "title": "yield-star-spacing",
        "desc": "require or disallow spacing around the `*` in `yield*` expressions"
      }
    ]
  }
]
