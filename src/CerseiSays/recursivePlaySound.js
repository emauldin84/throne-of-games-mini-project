let dummy = [1,2,2,3,1,3]
playSound(dummy,0)




function playSound(array,index){

	console.log("value is ", index);
	let mysound = "";
	if (array[index] === 1) {
		 mysound = new Audio ('./audio/wind.mp3')
	}
	else if (array[index] === 2) {
		 mysound = new Audio ('./audio/crowd.mp3')
	}
	else if (array[index] === 3) {
		 mysound = new Audio ('./audio/sword.mp3')
	}
	else {
		 mysound = new Audio ('./audio/fire.mp3')
	}
	mysound.addEventListener('ended', ()=> {
		console.log(index, "posisiton in dummy array")
		if (index < array.length-1) {

			playSound(array,index+1)
		}
	})
	console.log("playing song")
	mysound.play()
}
