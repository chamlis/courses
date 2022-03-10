document.addEventListener('DOMContentLoaded', function(){
    e = function(i){
        document.getElementById('target').innerHTML += i;
    };

    let total_weeks = Math.floor(activities.length / activityNum);
    t = total_weeks;
    c = startWeekNum + total_weeks;

    makeTable();
});
