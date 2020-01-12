function enableEditMode() {
    editText.document.designMode = "On";
}
function execCmd(command) {
    editText.document.execCommand(command, false, null);
}
function execCmdWithArgs(command, arg) {
    editText.document.execCommand(command, false, arg);
}
