const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
    const uptime = process.uptime();

    function format(seconds) {
        function pad(s) {
            return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60 * 60));
        var minutes = Math.floor(seconds % (60 * 60) / 60);
        var seconds2 = Math.floor(seconds % 60);

        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds2);
    }

    res.status(200).json({
        uptime: format(uptime),
        memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024,
        memoryTotal: process.memoryUsage().heapTotal / 1024 / 1024,
    });
});

module.exports = router;