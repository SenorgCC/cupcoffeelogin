/**
 * Created by Alex on 16.05.2016.
 */
app.factory('User', function () {
    var UserData = {};
    UserData.name = '';
    UserData.Kontostand = 0;
    UserData.actualqueue = 0;
    return UserData;
});