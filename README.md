# HybridKit for JavaScript

HybridKit is a simple, extensible messaging system for your web/native hybrid mobile apps. This is the JavaScript library you run on your web pages to communicate with your app.

Use [HybridKit for iOS](https://github.com/usepropeller/hybridkit-ios) to enable it in your mobile apps.

## Installation

Download [hybridkit.js](https://raw.github.com/usepropeller/HybridKit-JS/master/hybridkit.js) ([minified](https://raw.github.com/usepropeller/HybridKit-JS/master/hybridkit.min.js)) and add it to your page:

```html
<script src="/assets/js/hybridkit.min.js"></script>
```

## Usage

Run commands with `runCommand`:

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

HybridKit comes with several useful [built-in commands](https://github.com/usepropeller/HybridKit-JS/wiki/Built-In-Commands).

## Contact

Clay Allsopp ([http://clayallsopp.com](http://clayallsopp.com))

- [http://twitter.com/clayallsopp](http://twitter.com/clayallsopp)
- [clay@usepropeller.com](clay@usepropeller.com)

## License

HybridKit for JavaScript is available under the MIT license. See the [LICENSE](LICENSE) file for more info.
