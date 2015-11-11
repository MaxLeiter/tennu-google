var google = require('google')
var GooglePlugin = {
    init: function (client, imports) {
        return {
            exports: {
            },

            handlers: {
                "!google": function (command) {
                    var args = command.args;
                    if(args.length > 0) {
                        var link = google(args.join(' '), function (err, next, links){
                            if (err) {
                                console.error("GooglePlugin error!");
                            }
                            return links[0];
                        });
                        return link.title + " - " + link.description.replace(/^(.{15}[^\s]*).*/, "$1");  + "\n" + link.link;
                    } else {
                        return;
                    }
                },
                "error": function (error) {
                   console.error("GooglePlugin error!")
                }
            },

            commands: ["google"]
        }
    }
};

module.exports = GooglePlugin;