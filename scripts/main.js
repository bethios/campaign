function generateMarkov(){

    var slogans = ["Tippecanoe and Tyler Too","or Fight" , "Reannexation of Texas and Reoccupation of Oregon","Who is James K. Polk?", "Hurray, Hurray, the Country's Risin' Vote for Clay and Frelinghuysen!","For President of the People","We Polked you in, We shall Pierce you in","Free Soil, Free Labor, Free Speech, Free Men, Fremont","Vote yourself a Farm" , "Don't trade horses in midstream" ,"Let Us Have Peace" , "Vote as You Shot" , "Grant Us Another Term" ,"Tilden or Blood!","Ma, Ma, where's my Pa?","Rejuvenated Republicanism", "Grandfather's hat fits Ben!","Patriotism, Protection, and Prosperity", "Four more years of the full dinner pail","Let Well Enough Alone","He has kept us out of war.", "He proved the pen mightier than the sword.", "War in the East, Peace in the West, Thank God for Woodrow Wilson.", "War in Europe Peace in America God Bless Wilson" ,"Return to normalcy","Keep Cool and Keep Coolidge","Who but Hoover?", "A chicken in every pot and a car in every garage" , "We are turning the corner","Happy Days Are Here Again", "Remember Hoover!" , "Better A Third Termer than a Third Rater", "Don't swap horses in midstream" , "We are going to win this war and the peace that follows" ,"Defeat the New Deal and Its Reckless Spending" , "Let's Get Another Deck", "Let's Make It a LandonSlide" , "Life, Liberty, and Landon"  ,"No Fourth Term Either", "Roosevelt for ExPresident" , "There's No Indispensable Man", "We Want Willkie" , "Win with Willkie" ,"I'm just wild about Harry" ,"Pour it on 'em, Harry!","Give Em Hell, Harry!" ,"I like Ike" , "I still like Ike" , "Peace and Prosperity","A time for greatness","All the way with LBJ" , "In Your Guts, You Know He's Nuts" ,"In Your Heart, You Know He's Right","Some People Talk Change, Others Cause It" ,"This time, vote like your whole world depended on it" , "Nixon's the One" , "Nixon Now" ,"To Begin Anew...","He’s making us proud again" ,"Not Just Peanuts" , "A Leader, For a Change" ,"Are You Better Off Than You Were Four Years Ago?", "Let's Make America Great Again" , "It's Morning Again in America" ,"Where's the Beef?","Kinder, Gentler Nation" , "Thousand Points of Light","For People, for a Change" , "It's Time to Change America" , "Putting People First" , "Building a bridge to the twenty first century","Ross for Boss" ,"Leadership for the New Millennium" , "Prosperity and Progress" , "Compassionate Conservatism", "A Safer World and a More Hopeful America" , "A Stronger America" , "Let America Be America Again" , "Dean for America", "Yes We Can", "Change We Can Believe In", "Change We Need.", "Fired up! Ready to go!", "Country First", "Reform, prosperity and peace", "People Fighting Back", "Ready for change, ready to lead", "Big Challenges, Real Solutions: Time to Pick a President", "In to Win", "Working for Change, Working for You," , "The strength and experience to make change happen.", "Forward" , "Believe in America", "Restore America Now" , "The People's President" , "A Green New Deal for America", "Citizenship Matters" , "Restore Our Future", "Make America Great Again", "I'm With You", "Our Best America Yet!", "A Future To Believe In" , "It's in our hands" , "A New American Century", "Courageous Conservatives" , "Reigniting the Promise of America", "Right to Rise", "Heal. Inspire. Revive.", "From Hope to Higher Ground" , "New Possibilities. Real Leadership.", "Defeat the Washington Machine. Unleash the American Dream." , "Tanned, Rested, Ready.", "Telling it like it is.", "For America", "Turn the Rascals Out", "Rum, Romanism and Rebellion", "Ma, Ma, where's my Pa?", "Gone to the White House, Ha, Ha, Ha!", "Give Em Hell" ];
	
    function parseIt(arr){
        var parsedArr = [];
		for(let i = 0; i < arr.length; i++){
			parsedArr.push (arr[i].toLowerCase().replace(/[^a-z\s]/ig, "").split(' '));
							}
        return parsedArr;
        }

		function markov(parsed){
			var obj = {};
							
			for(let i = 0; i< parsed.length; i++){
			var current = parsed[i];
								
			for(let j =0; j < current.length-1; j++){
				if(obj[current[j]]){
				    obj[current[j]].push(current[j+1]);
				}else{
					obj[current[j]] = [current[j+1]] ;
				}
            }
								
				}
				return obj;
            }

		function writeSlogan(parsed, obj){
            var firstWord = parsed[Math.floor(Math.random() * parsed.length +1)][0];

            var str = firstWord;

            for(let i = 0; i < Math.floor(Math.random()* 10 +3); i++){
            
            var pairingLocation = Math.floor(Math.random() * obj[firstWord].length);
								
            var pairedWord = obj[firstWord][pairingLocation];

								
            str = str + " " + pairedWord;
								
								
            firstWord = pairedWord;
								
            if (obj[firstWord]=== undefined){ 	
				str = str + "!"
				break;
            }}

            return str + " 2016";
            }
    
	document.getElementById("generator").innerHTML = writeSlogan(parseIt(slogans), markov(parseIt(slogans)));		
}



function displayName(){
    document.getElementById('namedisplay').innerText = document.getElementById("lname").value;
}