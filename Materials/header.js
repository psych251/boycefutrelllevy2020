//for G-maze
var shuffleSequence = seq("code", "setcounter", "welcome", "intro-gram",
                          "intro-practice", followEachWith("sep", "practice"),
                          "end-practice",
                          followEachWith("sep",randomize(anyOf(startsWith("rel"),startsWith("and"), startsWith("adverb"), startsWith("filler")))),
                          "explanation","instructions2", anyOf("questionnaire"),
                          "topic","debriefing");

var showProgressBar = false;

var defaults = [
        "Question", {
                as: ["yes", "no"],
        presentAsScale: false,
        presentHorizontally: false,
    },
];

var code = Math.floor(Math.random()*100000000);
var sendingResultsMessage = "The results are now being transferred.  Please wait.";

//* Add if needed: Your participation code is: " + code.toString();*//
var completionMessage = "Thank you for your participation.  The results were successfully transmitted."
//* Add to if needed: Your participation code is: " + code.toString();*//
var completionErrorMessage = "The transmission of the results failed.  Please contact prolific.experiment.help@gmail.com and retry the transmission again by clicking the link."

var items = [
    ["code", "DashedSentence", {s:code.toString(), mode:"speeded acceptability", wordTime:1}],
    ["setcounter", "__SetCounter__", { }],
    ["welcome", "Message", {html:'<table width="100%"><tr><td valign="top" align="right">School of Education<br>Stanford University<br>485 Lasuen Mall<br>Stanford, CA 94305</tr></table>\
<h2>Thank you very much for your participation!</h2><p>This task is part of a Stanford research project. Your decision to participate in this task is voluntary. There is no way for us to identify you. The only information we will have, in addition to your responses, is the time at which you completed the survey. The results of the research may be presented at scientific meetings or published in scientific journals. Clicking on the link below indicates that you are at least 18 years of age and agree to complete this task voluntarily.'}],
    ["explanation", "Form", {html:'How was your experience doing this task? What did you think of its length?<br/><textarea name="explanation" rows="3" cols="50" autofocus="true"></textarea>'}],
            ["instructions2", "Message", {html:'The next section will ask for your Prolific ID, so please have it handy.  In accordance with the ethics guidelines of Stanford University, this information will be stored in anonymous form and it will be impossible to link it to you.'}],
        ["questionnaire", "Form", {html:'Please enter your unique Prolific ID. <input type="text" name="ID" rows="3" cols="50" autofocus="true"/>'}],
    ["topic", "Form", {html:'Very briefly, what do you think this study is about?<br/><textarea name="topic" rows="3" cols="50" autofocus="true"></textarea>'}],
    ["debriefing", "Message", {html:'<p>Thank you.  You will receive confirmation that your results were logged on the next page.</p>\n\n<p>Purpose of this study (feel free to skip): We’re generally interested in how the human brain processes language. The present study is testing out a new method for studying what types of sentence constructions are easier or harder to read. Your data will help us to answer these questions.</p>'}],
    ["intro-lex", "Message", {html: "<p>For this experiment, please place your left index finger on the 'e' key and your right index finger on the 'i' key. </p><p>On each screen you will see two options: one will be a word and one will be on a non-word. Select the real word by pressing 'e' (left-hand) for the option on the left or pressing 'i' (right-hand) for the option on the right.</p><p>The words will make a sentence.</p>" }],
    ["intro-gram", "Message", {html: "<p>For this experiment, please place your left index finger on the 'e' key and your right index finger on the 'i' key.</p><p> You will read sentences word by word. On each screen you will see two options: one will be the next word in the sentence, and one will not. Select the word that continues the sentence by pressing 'e' (left-hand) for the word on the left or pressing 'i' (right-hand) for the word on the right.</p><p>Select the best word as quickly as you can, but without making too many errors.</p>"}],
    ["intro-practice", "Message", {html: "The following items are for practice." }],
    ["end-practice", "Message", {html: "End of practice. The experiment will begin next."}],
    ["sep", "MazeSeparator", {normalMessage: "Correct! Press any key to continue", errorMessage: "Incorrect! Press any key to continue."}],
    ["done", "Message", {html: "All done!"}],
