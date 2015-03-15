cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.brodysoft.sqlitePlugin/www/SQLitePlugin.js",
        "id": "com.brodysoft.sqlitePlugin.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/com.jsmobile.plugins.sms/www/sms.js",
        "id": "com.jsmobile.plugins.sms.sms",
        "clobbers": [
            "window.sms"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.brodysoft.sqlitePlugin": "1.0.2",
    "com.jsmobile.plugins.sms": "0.0.1",
    "org.apache.cordova.geolocation": "0.3.10"
}
// BOTTOM OF METADATA
});