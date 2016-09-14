'use strict';

// Une expression de fonction fléchée (arrow function en anglais) permet d'avoir
// une syntaxe plus courte que les expressions de fonction et permet de lier la
// valeur this de façon lexicale. Les fonctions fléchés sont obligatoirement anonymes.

// es6
let wrap = fn => (...args) => fn(...args).catch(args[2]);

// equivalent
let wrap_es5 = function (fn) {
  return function (...args) {
    return fn(...args).catch(args[2]);
  }
}
