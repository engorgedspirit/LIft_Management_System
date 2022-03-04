var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var selectEl = document.querySelector('select');
var confirmBtn = document.getElementById('confirmBtn');

// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
    if (typeof favDialog.showModal === "function") {
        favDialog.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
    confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
    outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});
var updateButton1 = document.getElementById('updateDetails1');
var favDialog1 = document.getElementById('favDialog1');
var outputBox = document.querySelector('output');
var selectE2 = document.querySelector('select');
var confirmBtn1 = document.getElementById('confirmBtn1');

// "Update details" button opens the <dialog> modally
updateButton1.addEventListener('click', function onOpen() {
    if (typeof favDialog1.showModal === "function") {
        favDialog1.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
});
// "Favorite animal" input sets the value of the submit button
selectE2.addEventListener('change', function onSelect(e) {
    confirmBtn1.value = selectE2.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog1.addEventListener('close', function onClose() {
    outputBox.value = favDialog1.returnValue + " button clicked - " + (new Date()).toString();
});