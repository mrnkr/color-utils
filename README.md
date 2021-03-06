# Color Utilities

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Build Status](https://travis-ci.com/mrnkr/color-utils.svg?branch=master)](https://travis-ci.com/mrnkr/color-utils)
[![codecov](https://codecov.io/gh/mrnkr/color-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/mrnkr/color-utils)
[![License][license]][npm-url]

[npm-image]:http://img.shields.io/npm/v/dead-simple-color-utils.svg
[npm-url]:https://npmjs.org/package/dead-simple-color-utils
[downloads-image]:http://img.shields.io/npm/dm/dead-simple-color-utils.svg
[license]:https://img.shields.io/github/license/mrnkr/color-utils

Basic functions to work with colors in javascript

## Intro

The purpose of this library is to have a compilation of the functions I use to process my colors. It is extremely limited since it contains, as I said, only functions I've needed accross my projects.

Some possible use cases are calculating the best text color according to the background color (chooses between only black and white but could easily be modified to achieve a comparison with several colors if it were necessary) and lightening or darkening a color on demand.

Why would you want these functions? Well, say you had a color picker and wanted to put a marker on top of the selected color... There you have your use for the calculate ideal text color function. Now imagine you wanted to have a different color for your status bar than the one in your app bar (like in Android). You could achieve that easily by processing one of the colors lightening or darkening it.

## Quick Start

```javascript
import { shadeBlendConvert, calculateBestTextColor } from "color-utils";

// Darkens a color by 10%
shadeBlendConvert("#83fc8f", -10);

// Lightens a color by 19%
shadeBlendConvert("#fc83d3", 19);

// Calculates the best text color for the passed background
calculateBestTextColor("#f62459");
```
