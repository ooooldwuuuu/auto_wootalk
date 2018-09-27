let SendFlag = false;
let Interval = setInterval(()=>{
	let len = document.getElementsByClassName("system").length;
	if ((len >= 4) && !SendFlag) {
		document.getElementById("messageInput").value = "台北男 27 妳好";
        sendMessage();
        SendFlag = true;
    } else if ((len === 5 || len === 7 || len === 9) && SendFlag) {
        SendFlag = false;
        document.querySelector("#changeButton > input[value=\"離開\"]").click();
        document.getElementById("popup-yes").click();
    } else if (len === 1) {
        document.getElementById("startButton").click();
        SendFlag = false;
    }
}, 1000);

function killInterval() {
    clearInterval(Interval);
}