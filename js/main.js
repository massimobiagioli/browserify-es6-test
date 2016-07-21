import $ from "jquery";
import MyModule from "./MyModule";

$(function() {
    let instance = new MyModule();

    $("#btnDummy").on("click", function() {
        alert(instance.getString());
    });
});