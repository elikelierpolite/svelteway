<p align="center">
<img src="https://badgen.net/badge/license/MIT/blue" />
<img src="https://badgen.net/npm/v/svelteway" />
</p>
<p align="center">
<a href="https://svelteway.vercel.app">Website</a> · <a href="https://npmjs.com/package/svelteway">NPM Package</a>
</p>

# sveltway

> The most svelte way to build UI's for your svelte kit applications!
[![Watch the video](https://img.youtube.com/vi/r1Kag_QLsoM/maxresdefault.jpg)](https://youtu.be/r1Kag_QLsoM)
## Creating a project

```bash
# create a new project in the current directory
npm create svelteway@latest

# create a new project in my-app
npm create svelteway@latest my-app
```

## Basic usage

Wrap your root +layout with `<Layout {data} />` and pass the required data prop.

```svelte
<script>
import { Layout } from 'svelteway'

export let data;
const theme = JSON.parse(data.data.theme);
</script>

<Layout {data}>
    <div data-theme={theme}>
        <slot />
    </div>
</Layout>
```

For more on +layout.server code, see [svelteway manual setup](https://svelteway.vercel.app/installation).

## Thanks

Special Thanks to the Svelte Team, Tailwind Labs and DaisyUI.

```
MIT License Copyright (c) 2023 Elikelier Polite

Permission is hereby granted,
free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice
(including the next paragraph) shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
