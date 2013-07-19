(function(window, undefined) {
  var _HybridKit = function() {
    var commandUrlForHash = function(hash) {
      return 'command:'+ encodeURIComponent(JSON.stringify(hash));
    };

    var model = {
      context: window,
      runCommand: function(command, hash) {
        var commandHash = {};
        commandHash.command = command;
        for (var attribute in hash) {
          commandHash[attribute] = hash[attribute];
        }
        this.context.location = commandUrlForHash(commandHash);
      },
      registerCommands: function(commands) {
        for (var i = 0; i < commands.length; i++) {
          var command = commands[i];
          this[command] = function(hash) {
            model.runCommand(command, hash);
          }
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