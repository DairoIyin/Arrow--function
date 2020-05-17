//Create a to-do list of 6 items
//Filter the to-do's that aren't done
//display only their titles

const todos=[{
	title:'Write Code',
	isDone:true,
},
{
	title:'Buy Drinks',
	isDone:false,
},
{
	title:'Tidy Wardrobe',
	isDone:true,
},
{
	title:'Wash hair',
	isDone:false,
},
{
	title:'Do assignments',
	isDone:true,
},
{
	title:'Eat dinner',
	isDone:false
}
];

const notdone = todos.filter(todo => todo.isDone === false);
console.log(notdone);
//console.log('triple equal')


