class Weather {

    actualWeather = ""


    isStormy() {
        if (this.actualWeather === "stormy") {
            return true;
        } else {
            return false;
        }
    }
}



module.exports = Weather;