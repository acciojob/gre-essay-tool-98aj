let evaluatedText = document.getElementById("evaluatedText");
	    let letterCount = document.getElementById("wordCount");


		let word = evaluatedText.value;
		let wordLength = word.length;
		letterCount.innerHTML = wordLength;

	    evaluatedText.addEventListener("input", cal)

	    function cal(){
	    	let word = evaluatedText.value;
		let wordLength = word.length;
		letterCount.innerHTML = wordLength;
	    }
