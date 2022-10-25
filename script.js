var counting = document.getElementById("count");
document.getElementById("lottie").style.display = "none";

setTimeout(function () {
    counting.innerText = 10;

    setTimeout(function () {
        counting.innerText = 9;

        setTimeout(function () {
            counting.innerText = 8;

            setTimeout(function () {
                counting.innerText = 7;

                setTimeout(function () {
                    counting.innerText = 6;

                    setTimeout(function () {
                        counting.innerText = 5;

                        setTimeout(function () {
                            counting.innerText = 4;

                            setTimeout(function () {
                                counting.innerText = 3;

                                setTimeout(function () {
                                    counting.innerText = 2;

                                    setTimeout(function () {
                                        counting.innerText = 1;

                                        setTimeout(function () {
                                            counting.innerText = "";
                                            document.getElementById("lottie").style.display = "block";
                                            
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);