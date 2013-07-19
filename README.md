# HybridKit-JS

HybridKit for JavaScript

## Installation

Download [hybridkit.js](hybridkit.js) ([minified](hybridkit.min.js)) and add it to your page:

```html
<script src="/assets/js/hybridkit.min.js"></script>
```

## Usage

You can run arbitrary commands with `runCommand`:

```javascript
HybridKit.runCommand("alert", {
    title: "Hello!",
    message: "World!"
});
```

You can also register commands for easy access:

```javascript
HybridKit.registerCommands(["alert"]);

HybridKit.alert({
    title: "Hello!",
    message: "World!"
});
```

## Contact

Clay Allsopp ([http://clayallsopp.com](http://clayallsopp.com))

- [http://twitter.com/clayallsopp](http://twitter.com/clayallsopp)
- [clay@usepropeller.com](clay@usepropeller.com)

## License

HybridKit for JavaScript is available under the MIT license. See the [LICENSE](LICENSE) file for more info.
