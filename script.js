var lift_input_up = document.getElementsByClassName("lift_button_up");
var lift_input_down = document.getElementsByClassName("lift_button_down");
var light = document.getElementsByClassName("greens");
var prev = 0;
var lift_arr_up = [];
var lift_arr_down = [];
lift_input_up[0].addEventListener("click", function() { set_lift_up(0); });
lift_input_up[1].addEventListener("click", function() { set_lift_up(1); });
lift_input_up[2].addEventListener("click", function() { set_lift_up(2); });
lift_input_up[3].addEventListener("click", function() { set_lift_up(3); });
lift_input_up[4].addEventListener("click", function() { set_lift_up(4); });
lift_input_up[5].addEventListener("click", function() { set_lift_up(5); });
lift_input_up[6].addEventListener("click", function() { set_lift_up(6); });
lift_input_up[7].addEventListener("click", function() { set_lift_up(7); });
lift_input_up[8].addEventListener("click", function() { set_lift_up(8); });


lift_input_down[0].addEventListener("click", function() { set_lift_down(0); });
lift_input_down[1].addEventListener("click", function() { set_lift_down(1); });
lift_input_down[2].addEventListener("click", function() { set_lift_down(2); });
lift_input_down[3].addEventListener("click", function() { set_lift_down(3); });
lift_input_down[4].addEventListener("click", function() { set_lift_down(4); });
lift_input_down[5].addEventListener("click", function() { set_lift_down(5); });
lift_input_down[6].addEventListener("click", function() { set_lift_down(6); });
lift_input_down[7].addEventListener("click", function() { set_lift_down(7); });
lift_input_down[8].addEventListener("click", function() { set_lift_down(8); });

function set_lift_up(h) {
    lift_arr_up.push(h);
    console.log(lift_arr_up);
    lift_main();
}

function set_lift_down(k) {
    console.log("hi");
    lift_arr_down.push(k + 1);
    console.log(lift_arr_down);
    lift_main();
}

function lift_main() {


    if (lift_arr_up.length == 0 && lift_arr_down.length == 1) {
        lift_goto(lift_arr_down[0]);
        console.log("lift went to:" + lift_arr_down + "floor");
        prev = lift_arr_down[0];
        lift_arr_down.pop();
    } else if (lift_arr_down.length == 0 && lift_arr_up.length == 1) {
        lift_goto(lift_arr_up[0]);
        console.log("lift went to:" + lift_arr_up + "floor");
        prev = lift_arr_up[0];
        lift_arr_up.pop();
    } else if (lift_arr_down - lift_arr_up > 1) {
        lift_goto(arr_min(lift_array_down));
        console.log("lift went to:" + arr_min(lift_arr_down) + " floor");

    }

}

function lift_goto(floor) {
    light[prev].style.color = "red";
    light[floor].style.color = "green";
}

function arr_min(arr) {
    var min = arr[0];
    for (var z = 0; z < arr.length; z++) {
        if (arr[z] < min) {
            min = arr[z];
        }
    }
    return min;
}