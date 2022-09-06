function sendmail(callback) {
    setTimeout(() => { console.log("email sent"), callback(); }, 5000);

}

function login(callback) {
    setTimeout(() => { console.log("email login"), callback(); }, 2000);
}

function getData(callback) {
    setTimeout(() => {
        console.log("data fetched"); callback;
    }, 4000);
}

function DisplayData() {
    setTimeout(() => {
        console.log("Data Displayed");
    }, 1000);
}

sendmail(function () {
    login(function () {
        getData(function () {
            DisplayData();
        });

    });

});
