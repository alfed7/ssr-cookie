# ssr-cookie
ssr-cookie implements a convenience common interface to access cookies in applications with server-side rendering (SSR).

## Installation

#### NPM
```
  $ npm install ssr-cookie --save
```

#### Yarn
```
  $ yarn add ssr-cookie
```

## Basic Usage

#### On the server

It requires Express and cookie-parser middleware.

```
import SsrCookie from "ssr-cookie";
const cookie = new SsrCookie(req, res);

// Set cookie
cookie.set("user", {userName: "test", token: "some token here"});

// Retrieve cookie
const user = cookie.get("user");

// Clear cookies
cookie.remove("user");

```

#### On the client

It uses js-cookie to access cookies on a client.

```
import SsrCookie from "ssr-cookie";
const cookie = new SsrCookie();

// Set cookie
cookie.set("user", {userName: "test", token: "some token here"}, { expires: 30 });

// Retrieve cookie
const user = cookie.get("user");

// Clear cookies
cookie.remove("user");

```

## Authors

* [Alexander Fedorenko](https://github.com/alfed7)
