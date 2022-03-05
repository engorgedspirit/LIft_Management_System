var lift_input_up = document.getElementsByClassName("lift_button_up");
var lift_input_down = document.getElementsByClassName("lift_button_down");
var light = document.getElementsByClassName("greens");
var start = document.getElementsByClassName("start");
var prev = 0;

var main_array = [];




//--------------------------------------------setting up the lift inputs----------------------------------------------
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
    main_array.push(h);
    console.log("up array" + lift_arr_up);

}

function set_lift_down(k) {
    lift_arr_down.push(k + 1);
    main_array.push(-(k + 1));
    console.log("down array:" + lift_arr_down);

}
//------------------------------------------------------Lift working part code-------------------------------------------------------------------
start[0].addEventListener("click", function() {
    lift_main();




});





function lift_main() {
    console.log("lift_main function");
    if (lift_arr_up.length == 0 && lift_arr_down.length == 1) {
        lift_goto_down(lift_arr_down);

        //  prev = lift_arr_down[0];

    } else if (lift_arr_down.length == 0 && lift_arr_up.length == 1) {
        lift_goto(lift_arr_up);

        //  prev = lift_arr_up[0];

    } else if (lift_arr_down.length - lift_arr_up.length >= 2) {
        lift_goto_down(lift_arr_down);
        lift_goto(lift_arr_up);

    } else if (lift_arr_up.length - lift_arr_down.length >= 2) {
        lift_goto(lift_arr_up);
        lift_goto_down(lift_arr_down);

    } else {
        if (main_array[0] >= 0) {
            console.log("lift goes up");
            lift_goto(lift_arr_up);
            lift_goto_down(lift_arr_down);
        } else {
            console.log("lift goes down");
            lift_goto_down(lift_arr_down);
            lift_goto(lift_arr_up);
        }

    }

}

function lift_goto(floor) {
    // light[prev_down].style.color = "black";
    //light[prev_up].style.color = "black";
    if (floor.length == 0) {

        light[prev].style.color = "green";
        return;

    } else {
        floor.sort();
        console.log("Lift went to " + floor[0] + " floor");
        //light[prev_up].style.color = "black";
        getinput();
        prev = floor[0];
        // light[floor[0]].style.color = "green";
        floor.shift();
        lift_goto(floor);


    }
}

function lift_goto_down(floor) {
    // light[prev_down].style.color = "black";
    //light[prev_up].style.color = "black";
    if (floor.length == 0) {
        light[prev].style.color = "green";
        return;
    } else {
        floor.sort(function(a, b) { return b - a; });
        //floor.reverse();
        console.log("Lift went to " + floor[0] + " floor");
        // light[prev_down].style.color = "black";

        getinput();
        prev = floor[0];
        floor.shift();

        lift_goto_down(floor);


    }
}

function arr_min(arr) {
    let min = arr[0];
    for (let z = 0; z < arr.length; z++) {
        if (arr[z] < min) {
            min = arr[z];
        }
    }
    return min;
}

function arr_max(arr) {
    let max = arr[0];
    for (let z = 0; z < arr.length; z++) {
        if (arr[z] > max) {
            max = arr[z];
        }
    }
    return max;
}

function getinput() {

}