var lift_input_up = document.getElementsByClassName("lift_button_up");
var lift_input_down = document.getElementsByClassName("lift_button_down");
var lift_arr_up = [];
var lift_arr_down = [];
lift_input_up[0].addEventListener("click", function () { set_lift_up(0); });
lift_input_up[1].addEventListener("click", function () { set_lift_up(1); });
lift_input_up[2].addEventListener("click", function () { set_lift_up(2); });
lift_input_up[3].addEventListener("click", function () { set_lift_up(3); });
lift_input_up[4].addEventListener("click", function () { set_lift_up(4); });
lift_input_up[5].addEventListener("click", function () { set_lift_up(5); });
lift_input_up[6].addEventListener("click", function () { set_lift_up(6); });
lift_input_up[7].addEventListener("click", function () { set_lift_up(7); });
lift_input_up[8].addEventListener("click", function () { set_lift_up(8); });
lift_input_up[9].addEventListener("click", function () { set_lift_up(9); });

lift_input_down[0].addEventListener("click", function () { set_lift_down(0); });
lift_input_down[1].addEventListener("click", function () { set_lift_down(1); });
lift_input_down[2].addEventListener("click", function () { set_lift_down(2); });
lift_input_down[3].addEventListener("click", function () { set_lift_down(3); });
lift_input_down[4].addEventListener("click", function () { set_lift_down(4); });
lift_input_down[5].addEventListener("click", function () { set_lift_down(5); });
lift_input_down[6].addEventListener("click", function () { set_lift_down(6); });
lift_input_down[7].addEventListener("click", function () { set_lift_down(7); });
lift_input_down[8].addEventListener("click", function () { set_lift_down(8); });
lift_input_down[9].addEventListener("click", function () { set_lift_down(9); });

function set_lift_up(h) {
    lift_arr_up.push(h);
    console.log(lift_arr_up);
    lift_main();
}
function set_lift_down(k) {
    lift_arr_down.push(k);
    console.log(lift_arr_down);
    lift_main();
}

function lift_main() {


    if (lift_arr_up.length == 0 && lift_arr_down.length == 1) {
        lift_goto(lift_arr_down[0]);
        console.log("lift went to:" + lift_arr_down + "floor");
        lift_arr_down.pop();
    }
    else if (lift_arr_down.length == 0 && lift_arr_up.length == 1) {
        lift_goto(lift_arr_up[0]);
        console.log("lift went to:" + lift_arr_up + "floor");
        lift_arr_up.pop();
    }
}
function lift_goto() {

}