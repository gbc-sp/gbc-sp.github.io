var scenario = [
    '<h1>Scenario: <span class="lighten">Jim</span></h1><p>Jim was hired to help a local politician get re-elected. He had a college certificate in general business practice, and a Personal Learning Preference (PLP) that leaned to the concrete/graphic preference quadrant. When Jim arrived at the office, he received a large file of documents and instructions which detailed his very wide range of responsibilities. The politician was mostly on the road, building community support, so Jim was left with one office colleague and some volunteers to see things ran smoothly at headquarters.</p>',
    '<h1>Scenario: <span class="lighten">Jim</span></h1><p>Jim was not a person comfortable with text as much as he was with graphic material and the thought of wading through the file was daunting - he wanted to get things done. Jim did not read the file, nor did he find someone more comfortable with textual material to help him by doing so. At the same time, he contacted the returning officer to make sure the dates and rules were followed. He gave an assistant the job of organizing the volunteers for the canvassing, and he took on the job of fundraising with the candidate.</p>',
    '<h1>Scenario: <span class="lighten">Jim</span></h1><p>Jim was a personable guy and people were happy to see him. But what was not so positive was that Jim lacked any knowledge of the riding, the procedures that had historically been in place or, most vitally, the policies of his boss. All that material had been in the file which Jim had decided not to read. The result was that Jim could not really campaign with his boss, could not answer questions, help with briefings or speak to the press or local associations on behalf of the riding office. The candidate lost the election.</p>',
    '<h1>Your analysis</h1><h2 class="lighten">Choose all that you think are correct:</h2><ul class="check-box-container analysis"><li data-id="good"><span>Jim understood what he needed to learn</span></li><li data-id="bad"><span>Jim understood what he needed to learn</span></li><li data-id="good"><span>Jim’s assistant was unhelpful</span></li><li data-id="good"><span>Jim had the wrong learning profile for the job</span></li><li data-id="bad"><span>The politician was unhelpful</span></li></ul>',
    '<img class="wow" src="https://media.giphy.com/media/3OvuH0GxGvbiakzthp/source.gif" alt=""><h1>Congratulations!</h1><p>You have completed the Smarter Learning skill. </p><p>We encourage you to reflect on past experiences with these new idea\'s in mind!</p><h2>Next Step?</h2><a class="button" href="create-portfolio.html">Create Portfolio</a>'

]
var progress;

//init progress bar
var progBar = document.getElementById("prog");
//set the amount of progress per click with this variable (static)
var progressSteps = 6;
//set the progress bar to "one step done"
progBar.style.width = 100/progressSteps+"%";

if(localStorage.moduleData){
    progress = JSON.parse(localStorage.moduleData);
}
else{
    alert("no data");
}

var doneAnalysis = false;
var doneScenario = false;
var doneReflect = false;

var pos = 0;

$("#tipsPopBtn").click( function() {
    $("#tipsPop").fadeIn();
});
$("#closeTips").click( function() {
    $("#tipsPop").fadeOut();
});

$("#scenarioTab").click(function() {
    if($("#scenarioTab").hasClass("complete")) {
        pos = 1;
        okay();
    }
});
$("#analysisTab").click(function() {
    if($("#scenarioTab").hasClass("complete")) {
        pos = 3;
        okay();
    }
});

$("#nextBtn").click(function() {

    //increase progress bar on click of next
    //get current width (parseint to get rid of the %)
    let currWidth = parseInt(progBar.style.width);
    //add 10
    currWidth += 100/progressSteps;
    //set width again, add back %
    progBar.style.width = currWidth+"%";

    if (pos == 5) {
        progress.modules[6].comps = 4;
        progress.modules[6].complete = true;
        localStorage.moduleData = JSON.stringify(progress);
        window.location.href = '../skillpod-prototype/congrats.html';
    }
    else {
        okay();
    }

});

$("#closeCoach").click( function() {
    $("#coach").removeClass("active");
});

function okay() {
    $("#scenario").html(scenario[pos]);
    if (!doneAnalysis) {
        if (pos == 1) {
            $(".step.active").removeClass("active");
            $(".steps").children().eq(2).addClass("active");
        }
        else if (pos == 0) {
            $(".step.active").removeClass("active");
            $(".steps").children().eq(1).addClass("active");
        }
        else if (pos == 2) {
            $(".step.active").removeClass("active");
            $(".steps").children().eq(3).addClass("active");
        }
        else if (pos == 3) {
            $(".steps").hide();
            doneScenario = true;
            $(".selected").removeClass("selected");
            $("#analysisTab").addClass("selected");
            $("#scenarioTab").addClass("complete");
            $("#analysisTab").removeClass("disabled");
            $("#nextBtn").hide();
            doneAnalysis = true;

            $(".analysis > li").click(function(e) {
                console.log("idk");
                $(e.currentTarget).addClass("selected");
                $("#nextBtn").fadeIn();
                if($(e.currentTarget).attr("data-id") == "good") {
                    //good
                    $("#coach").addClass("active");
                    $("#coachContent").text("Good Job! Had Jim really understood the idea of learning preferences and how to make the most of individual differneces, he could have planned better and planned to fill his gaps in skills. The best chances of success follow the quadrant preferences: knowing what you are doing (Q1); communicating it (Q2); working probable options (Q3); and seeing the big picture in order to identify key priorities (Q4). Jim had the ability to succeed, but not the plan or understanding of what needed to be learned by whom.");
                    $(e.currentTarget).addClass("correct");
                }
                else {
                    //bad
                    $("#coach").addClass("active");
                    $("#coachContent").text("Bad Job! Two key elements of the scenario are setting up a plan in order to maximize strength in learning; and the initiating if new learning when needed. Jim missed both these elements. Essentially, because it is not his strength, he turns his back on a critical task and, by doing so, really limits his effectiveness.");
                    $(e.currentTarget).addClass("wrong");

                }
            });
        }
    }
    if (!doneReflect) {
        if (pos == 4) {
            $(".selected").removeClass("selected");
            $("#reflectTab").addClass("selected");
            $("#analysisTab").addClass("complete");
            $("#reflectTab").removeClass("disabled");
            doneReflect = true;
            $("#nextBtn").hide();
            setTimeout( function() {
                $(".wow").fadeOut(1000);
            }, 2000);
        }
    }

    pos++;
}
