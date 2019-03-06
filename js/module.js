var tile = document.getElementById("toCompFlow");
if (tile) {
	tile.addEventListener("click", function() {
		window.location.href = "competency1.html"
	  });
}

$("#gotIt").click(function() {
	$("#infoAlert").hide();
});


var tipsContent = [
	"<ul class='bulleted'><li>Have I completed, studied and understood my PLP?</li><li>Can I recognize when there is an important new learning opportunity?</li><li>Do I have strategies for engaging people with different learning profiles?</li><li>Can I recognize, understand and appreciate how other’s different learning profiles can help me?</li><li>Have I constructed a model or system for how I can be a smarter learner?</li></ul>",
	"<ul class='bulleted'><li>Are you aware of the signs that you are thinking with a fixed mindset?</li><li>When you are in a fixed mindset, what elements do you need to work to overcome?</li><li>Can you envision yourself succeeding in a task?</li><li>Are you able to identifying risk and taking steps to mitigate it?</li><li>Do you know how to ask for help when you hit a roadblock?</li><li>Do you know how to leverage your network to help you succeed in a task/situation?</li></ul>",
	"<ul class='bulleted'><li>What would you have lined up before you started the process of reaching your goal?</li><li>How would you deal with radically different views of others involved in achieving the goal?</li><li>What role does communication play in the exercise?</li></ul>"
]

var scenarioContent = [
	"Jim was hired to help a local politician get re-elected. He had a college certificate in general business practice, and a Personal Learning Preference (PLP) that leaned to the concrete/graphic preference quadrant. When Jim arrived at the office, he received a large file of documents and instructions which detailed his very wide range of responsibilities. The politician was mostly on the road, building community support, so Jim was left with one office colleague and some volunteers to see things ran smoothly at headquarters. Jim was not a person comfortable with text as much as he was with graphic material and the thought of wading through the file was daunting - he wanted to get things done. Jim did not read the file, nor did he find someone more comfortable with textual material to help him by doing so. At the same time, he contacted the returning officer to make sure the dates and rules were followed. He gave an assistant the job of organizing the volunteers for the canvassing, and he took on the job of fundraising with the candidate. Jim was a personable guy and people were happy to see him. But what was not so positive was that Jim lacked any knowledge of the riding, the procedures that had historically been in place or, most vitally, the policies of his boss. All that material had been in the file which Jim had decided not to read. The result was that Jim could not really campaign with his boss, could not answer questions, help with briefings or speak to the press or local associations on behalf of the riding office. The candidate lost the election.",
	"Jasper and Archie were friends who grew up in the rural community of Inglenook, a lovely waterside town with a strong heritage of cottaging and resorts. Jasper and Archie had both worked for their fathers and other builders in the area as they grew up and they knew the community well, They saw it changing from a traditional “family at the cottage for the summer” venue to a place attractive to shorter-term rentals. They watched as old family cottages were rented by the month and listened to people complain about the issues of maintenance, supervision and vetting renters. They saw a real opportunity for a property management business and had soon persuaded their families and the bank to help them get started. At first things went well and Jasper, particularly, was happy to see things progressing in a manageable way. Archie, however, could see that the real opportunity was an integrated services model, in which additional offerings such as cleaning, laundry, grounds and boat maintenance and security would all be extremely attractive. In order to realize Archie’s vision, it became apparent that the two of them would have to hire more people and, in order to meet that payroll, would have to commit to a loan from their families and work hard to find clients. When Jasper looked ahead, he saw the risk of a financial uncertainty. He did not think they had the skills and knowledge or clients to make this expansion viable. When Archie looked ahead, he saw the changing population who had more income and needed on-the-ground help both to rent and to secure their investments. Most of all, he knew that the cottage owners who would be their clients, knew their families and trusted them both. Archie could not get Jasper to share his mindset - Jasper really believed that rentals were the limit of what they should take on. They parted and remained friends. Archie’s parents worried he had over-extended the business. They were eventually won over by his careful planning, strong local relationships, and the positive results he achieved. With hard work and commitment, Archie continued to develop and grow and strengthen the business.",
	"Jean was tasked by her bosses to meet a goal that would reduce and, hopefully, eliminate bullying and harassment in her workplace. This had been a very difficult issue in her company because women and the LGBT employees were vulnerable both to harassment and to a glass ceiling for promotions. When the evidence was presented to the bosses, they said that they would look into it, but little changed in the workplace, but in the end, they were forced to act. They appointed Jean to lead the project, believing that she had the confidence of her colleagues. Jean had no HR experience, but had lots of energy and integrity. So Jean had a very sensitive task. To further complicate matters, the boss of a close competitor had recently been fired for inappropriate behaviour with female employees. The whole climate Jean was working within was a negative one. Jean’s dilemma was whether to go after the historical negative climate her bosses had allowed to go unchecked or to work on a company policy that would lay out very clearly the professional behaviour necessary to remain an employee of the company. Where should the time and energy go? Jean was very aware that she lacked the background either to conduct an investigation or to forge a new company policy. And many of her colleagues right across the company were anxious to go after the perpetrators. To nail them! After a lot of thought and some good advice, Jean decided that it was more important tohave the policy. With it, any offenders at any level of the company could be held accountable. Jean knew she had to make a careful plan, learning all she could from trusted sources, to ensure the policy would protect everyone in the workplace. Having a clearly defined goal helped Jean shape her learning curve"
]

$("#tipsClose").click( function() {
	$("#tipsPopUp").hide();
});

$(".comp").click( function(e) {

	if($(e.currentTarget).attr("data-id") != "false") {
		$("#tipsPopUp").css({display: "grid"});
		repopulateContent($(e.currentTarget).attr("data-id"));
	}
});

function repopulateContent(id) {
	$("#tipsContent").html(tipsContent[id]);
	$("#scenarioContent").text(scenarioContent[id]);
	$(".grabPop").addClass("blank");
	$(".grabPop").removeClass("selected "+thisPage+" white-txt invert");
	$(".grabPop[data-id="+id+"]").removeClass("blank");
	$(".grabPop[data-id="+id+"]").addClass("selected "+thisPage+" white-txt invert ");
}

//read more button
$("#dotdot").hide();
$("#read-less").hide();
//onclick show more and change button to read less

$("#read-more").click(function(){
 $("#dotdot").show();
 //$('#read-more').text("Read Less");
 $("#read-more").hide();
 $("#read-less").show()
});
//this caused error
//click show less and change button to read more
//$("#read-more").click(function(){
 //$("#dotdot").hide();
 //$("#read-more).text("Read More");

//});

$("#read-less").click(function(){
 $("#dotdot").hide();
 //$('#read-more').text("Read Less");
 $("#read-more").show();
 $("#read-less").hide()
});
