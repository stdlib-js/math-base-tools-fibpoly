<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Fibonacci Polynomial

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate a [Fibonacci polynomial][fibonacci-polynomials].

<section class="intro">

A [Fibonacci polynomial][fibonacci-polynomials] is expressed according to the following recurrence relation

<!-- <equation class="equation" label="eq:fibonacci_polynomial" align="center" raw="F_n(x) = \begin{cases}0 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\x \cdot F_{n-1}(x) + F_{n-2}(x) & \textrm{if}\ n \geq 2\end{cases}" alt="Fibonacci polynomial."> -->

```math
F_n(x) = \begin{cases}0 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\x \cdot F_{n-1}(x) + F_{n-2}(x) & \textrm{if}\ n \geq 2\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F_n(x) = \begin{cases}0 &amp; \textrm{if}\ n = 0\\1 &amp; \textrm{if}\ n = 1\\x \cdot F_{n-1}(x) + F_{n-2}(x) &amp; \textrm{if}\ n \geq 2\end{cases}" data-equation="eq:fibonacci_polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/fibpoly/docs/img/equation_fibonacci_polynomial.svg" alt="Fibonacci polynomial.">
    <br>
</div> -->

<!-- </equation> -->

Alternatively, if `F(n,k)` is the coefficient of `x^k` in `F_n(x)`, then

<!-- <equation class="equation" label="eq:fibonacci_polynomial_combinatoric" align="center" raw="F_n(x) = \sum_{k = 0}^n F(n,k) x^k" alt="Combinatoric interpretation of a Fibonacci polynomial."> -->

```math
F_n(x) = \sum_{k = 0}^n F(n,k) x^k
```

<!-- <div class="equation" align="center" data-raw-text="F_n(x) = \sum_{k = 0}^n F(n,k) x^k" data-equation="eq:fibonacci_polynomial_combinatoric">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/fibpoly/docs/img/equation_fibonacci_polynomial_combinatoric.svg" alt="Combinatoric interpretation of a Fibonacci polynomial.">
    <br>
</div> -->

<!-- </equation> -->

where

<!-- <equation class="equation" label="eq:fibonacci_polynomial_coefficients" align="center" raw="F(n,k) = {{\frac{n+k-1}{2}} \choose {k}}" alt="Fibonacci polynomial coefficients."> -->

```math
F(n,k) = {{\frac{n+k-1}{2}} \choose {k}}
```

<!-- <div class="equation" align="center" data-raw-text="F(n,k) = {{\frac{n+k-1}{2}} \choose {k}}" data-equation="eq:fibonacci_polynomial_coefficients">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/fibpoly/docs/img/equation_fibonacci_polynomial_coefficients.svg" alt="Fibonacci polynomial coefficients.">
    <br>
</div> -->

<!-- </equation> -->

We can extend [Fibonacci polynomials][fibonacci-polynomials] to negative `n` using the identity

<!-- <equation class="equation" label="eq:negafibonacci_polynomial" align="center" raw="F_{-n}(x) = (-1)^{n-1} F_n(x)" alt="NegaFibonacci polynomial."> -->

```math
F_{-n}(x) = (-1)^{n-1} F_n(x)
```

<!-- <div class="equation" align="center" data-raw-text="F_{-n}(x) = (-1)^{n-1} F_n(x)" data-equation="eq:negafibonacci_polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/fibpoly/docs/img/equation_negafibonacci_polynomial.svg" alt="NegaFibonacci polynomial.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
fibpoly = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-fibpoly@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var fibpoly = require( 'path/to/vendor/umd/math-base-tools-fibpoly/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-fibpoly@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.fibpoly;
})();
</script>
```

#### fibpoly( n, x )

Evaluates a [Fibonacci polynomial][fibonacci-polynomials] at a value `x`.

```javascript
var v = fibpoly( 5, 2.0 ); // => 2^4 + 3*2^2 + 1
// returns 29.0
```

#### fibpoly.factory( n )

Uses code generation to generate a `function` for evaluating a [Fibonacci polynomial][fibonacci-polynomials].

```javascript
var polyval = fibpoly.factory( 5 );

var v = polyval( 1.0 ); // => 1^4 + 3*1^2 + 1
// returns 5.0

v = polyval( 2.0 ); // => 2^4 + 3*2^2 + 1
// returns 29.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For hot code paths, a compiled function will be more performant than `fibpoly()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-fibpoly@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var i;

// Compute the negaFibonacci and Fibonacci numbers...
for ( i = -77; i < 78; i++ ) {
    console.log( 'F_%d = %d', i, fibpoly( i, 1.0 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/tools/evalpoly`][@stdlib/math/base/tools/evalpoly]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial.</span>
-   <span class="package-name">[`@stdlib/math-base/tools/lucaspoly`][@stdlib/math/base/tools/lucaspoly]</span><span class="delimiter">: </span><span class="description">evaluate a Lucas polynomial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-fibpoly.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-fibpoly

[test-image]: https://github.com/stdlib-js/math-base-tools-fibpoly/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-fibpoly/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-fibpoly/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-fibpoly?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-fibpoly.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-fibpoly/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-fibpoly/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-tools-fibpoly/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-tools-fibpoly/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-tools-fibpoly/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-fibpoly/main/LICENSE

[fibonacci-polynomials]: https://en.wikipedia.org/wiki/Fibonacci_polynomials

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

<!-- <related-links> -->

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math-base-tools-evalpoly/tree/umd

[@stdlib/math/base/tools/lucaspoly]: https://github.com/stdlib-js/math-base-tools-lucaspoly/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
