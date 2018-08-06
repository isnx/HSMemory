let game = function(){

	let cards = ['s1','s2','s3','s4','s5','s6','s1','s2','s3','s4','s5','s6'];

	let subs = document.querySelector('#winner h1');
		subs.innerText = '';

	for(i=0;i<12;i++){
		let	div = document.querySelectorAll('#board div.card');
		div = [...div];
		let cardNo = Math.floor(Math.random()*cards.length)
		card = cards[cardNo];
		div[i].style.backgroundImage = "url('img/"+card+".png')";
		cards.splice(cardNo,1)
	};

	let	div = document.querySelectorAll('#board div.card');
	div = [...div];

	for(i=0;i<12;i++){
			div[i].classList.remove('hidden');
			div[i].style.visibility = 'visible';
		}

	setTimeout(function(){
		for(i=0;i<12;i++){
			div[i].classList.add('hidden');
		}
	},1500
			  );
	const start = new Date().getTime();
	let check =[];
	let pairs = [];
	let turns = 0;
	document.getElementById('counter').innerHTML = 'Turns count: ' + turns;

	let revealCard = function(){
		if (check.length < 2){
			this.classList.remove('hidden')
			check.push(this)
			if(check.length==2){
				setTimeout(function(){
					if(check[0].style.backgroundImage == check[1].style.backgroundImage){
						check[0].style.visibility = 'hidden';
						check[1].style.visibility = 'hidden';
						pairs.push(check[0])
						pairs.push(check[1])
						check.length = 0;
						if(pairs.length == 12){
							setTimeout(function(){
							const end = new Date().getTime();
							let result = (end - start)/1000;
							result = result.toFixed(2);
							subs.innerText = 'YOU WON!' + "\n" + 'YOUR TIME= '+ result +'s';
							},300)
						}
					}else if(check[0].style.backgroundImage !== check[1].style.backgroundImage){
						check[0].classList.add('hidden');
						check[1].classList.add('hidden');
						check.length = 0;
					}
				},750)
				turns++
				document.getElementById('counter').innerHTML = 'Turns count: ' + turns;
			}
		};
	}

div.forEach(function(card){
	card.addEventListener('click', revealCard);
})

};




