function matchDate(event) {
    let nextmonth = document.getElementById("$Next-Month").selectedOptions[0].text;
    let nextday = document.getElementById("$Next-Day").value;
    document.getElementById("Meeting-Day").innerHTML = document.getElementById("$Day").selectedOptions[0].text;
    document.getElementById("Meeting-Month").innerHTML = document.getElementById("$Month").selectedOptions[0].text;
    document.getElementById("Next-Meeting-Date").innerHTML = nextmonth + '&nbsp;' + nextday;
}

function matchName(event) {
    let Timer = document.getElementById("Timer-Name").value;
    let Ah = document.getElementById("Ah-Counter-Name").value;
    document.getElementById("Timer+Ah-Counter-Name").innerHTML = Timer + '&nbsp;&#43;&nbsp;' + Ah;
    document.getElementById("GE-Display").innerHTML = document.getElementById("GE-Name").value;
}

function showRemoveBtn(event) {
    document.querySelectorAll(".remove")[0].style.visibility = "visible";
    document.querySelectorAll(".remove")[1].style.visibility = "visible";
}

function hideRemoveBtn(event) {
    document.querySelectorAll(".remove")[0].style.visibility = "hidden";
    document.querySelectorAll(".remove")[1].style.visibility = "hidden";
}

function removeThirdSpeaker(event) {
    document.getElementById("Speaker-3").remove();
    document.getElementById("IE-3").remove();
}

function removeBothSpeakers(event) {
    document.getElementById("Speaker-2n3").remove();
    document.getElementById("IE-2-3").remove();
}

function noImage(replacement) {
    replacement.setAttribute("src", "./avatars/unknown.jpg");
}

function dynamicAvatar(speakerName) {
    let speakerAvatar = speakerName.replace('Name', 'Avatar');
    document.getElementById(speakerAvatar).setAttribute('src', './avatars/' + document.getElementById(speakerName).value + '.jpg');
}

function saveImage(event) {
    let node = document.getElementById('AGENDA');
    var scale = Math.min(node.offsetWidth / 390, node.offsetHeight / 2532);
    htmlToImage.toBlob(node, {
            width: node.offsetWidth * scale,
            height: node.offsetHeight * scale,
        })
        .then(function(blob) {
            window.saveAs(blob, 'Agenda ' + new Date().getFullYear() + '-' + document.getElementById("$Month").value + '-' + document.getElementById("$Day").selectedOptions[0].text + '.png');
        });
}

function checkBrowser() {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        alert('Safari is not supported, please use other web browsers.');
        document.querySelector('body').remove()
    }
}