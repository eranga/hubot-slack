var uppercase = require('upper-case');

module.exports = function(robot) {
    robot.respond(/is it (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

    robot.hear("Man, I'm hungry!", function(msg) {
        msg.send(uppercase("Dinner will be served in an hour."));
    });

    robot.hear("screenshot", function(msg) {
        msg.send(uppercase("www.trurating.com"));
    });
}
~     