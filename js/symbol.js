const id = Symbol();

const courseInfo = {
	// id: 'js_course',
	title: 'ES6',
	topics: ["babel", "syntax", "functions", "classes"]
};

courseInfo[id] = 41284;

//console.log(courseInfo.id); // undefined
console.log(courseInfo[id]); // 41284
console.log(courseInfo); // {title: "ES6", topics: Array(4), Symbol(): 41284}


// Symbol() avoids naming conflict, if another developer adds a property 'id' to the courseInfo object as our object remains intact below:

courseInfo.id = 'js_course';
console.log(courseInfo); // {title: "ES6", topics: Array(4), id: "js_course", Symbol(): 41284}