function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'none') e.style.display = 'block'; 
    else e.style.display = 'none';
}

function toggle_visibility_wrap(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'none') e.style.display = 'flex';
    else e.style.display = 'none';
}