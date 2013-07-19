var assert = function(statement) {
    if (statement === false) throw "error";
}
var assertEqual = function(expected, actual) {
    if (expected !== actual) throw("Error: " + actual + " should have been " + expected);
};
var tests = [];
var test = function(description, test) {
    tests.push([description, test]);
}
var runTests = function() {
    var passCount = 0;
    var failCount = 0;
    for(var i = 0; i < tests.length; i++) {
        _test = tests[i];
        var description = _test[0];
        var test = _test[1];
        var result = true;
        try {
            test();
            passCount++;
        }
        catch (err) {
            console.log(err);
            result = false;
            failCount++;
        }

        var output = result ? "PASS" : "FAIL";
        console.log(output + " - " +description);
    }
    var output = (failCount == 0) ? "PASS" : "FAIL";
    console.log(output + " - " + passCount + " / " + tests.length);
};


var HybridKit = require('./hybridkit.js').HybridKit;

var mockWindow = {
    location: "http://localhost"
};
HybridKit.context = mockWindow;


test("runCommand works", function() {
    // runCommand# works
    HybridKit.runCommand("alert", {
        params: "one"
    });
    assertEqual("command:%7B%22command%22%3A%22alert%22%2C%22params%22%3A%22one%22%7D", mockWindow.location);
});

test("runCommand works with nested parameters", function() {
    // runCommand# works
    HybridKit.runCommand("alert", {
        params: "one",
        hello: {
            world: "clay"
        }
    });
    assertEqual("command:%7B%22command%22%3A%22alert%22%2C%22params%22%3A%22one%22%2C%22hello%22%3A%7B%22world%22%3A%22clay%22%7D%7D", mockWindow.location);
});

test("registerCommands creates methods", function() {
    var commands = ["alert", "thing", "test2"];
    HybridKit.registerCommands(commands);
    for(var i = 0; i < commands.length; i++) {
        var command = commands[i];
        assert(HybridKit[command] !== undefined);
    }
});

test("registerCommand triggers correctly", function() {
    HybridKit.registerCommands(["foobar", "herp"]);
    HybridKit.foobar({
        params: "two"
    });
    assertEqual("command:%7B%22command%22%3A%22foobar%22%2C%22params%22%3A%22two%22%7D", mockWindow.location);
});

runTests();