(function(window, undefined) {
  var _HybridKit = function() {
    var commandUrlForHash = function(hash) {
      return 'command:'+ encodeURIComponent(JSON.stringify(hash));
    };

    var transformHash = function(command, hash) {
      var commandHash = {};
      commandHash.command = command;
      for (var attribute in hash) {
        var value = hash[attribute];
        // we're passing a callback method
        if (attribute === "callback" && value instanceof Array) {
          commandHash.callback_url = commandUrlForHash(transformHash(value[0], value[1]));
        }
        else {
          commandHash[attribute] = hash[attribute];
        }
      }
      return commandHash;
    };

    var model = {
      context: window,
      runCommand: function(command, hash) {
        var commandHash = transformHash(command, hash);
        this.context.location = commandUrlForHash(commandHash);
      },
      registerCommands: function(commands) {
        var make_commandMethod = function(command) {
          return function(hash) {
            model.runCommand(command, hash);
          }
        }
        for (var i = 0; i < commands.length; i++) {
          var command = commands[i];
          this[command] = make_commandMethod(command);
        }
      }
    }

    return model;
  };

  window.HybridKit = _HybridKit();
})(this);

if (this.module !== undefined) {
  module.exports = {
    HybridKit: this.HybridKit
  };
}